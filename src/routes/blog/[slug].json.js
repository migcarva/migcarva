import posts from './_posts.js';

const lookup = new Map();
posts.forEach((post, i) => {
	const j = i >= posts.length - 1 ? null : i + 1;
	const next = j === null ? { slug: null } : {
		slug: posts[j].slug,
		title: posts[j].title,
	};

	const lPost = { ...post, next };
	lookup.set(post.slug, JSON.stringify(lPost));
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
