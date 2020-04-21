import works from './_works.js';

const contents = JSON.stringify(works.map(work => {
	return {
		isSelected: work.isSelected,
		slug: work.slug,
		title: work.title,
		tech: work.tech,
		thumbnail: work.thumbnail,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}