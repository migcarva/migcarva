import works from './works/_works.js';

const contents = JSON.stringify(works.map(work => {
	return {
		isSelected: work.isSelected,
		slug: work.slug,
		title: work.title,
		tech: work.tech,
		client: work.client,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}