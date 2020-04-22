import { getLookupMap, setLookupHeaders } from '../../utils.js';
import posts from './_posts.js';

const lookup = getLookupMap(posts);

export function get(req, res, next) {
	setLookupHeaders(req, res, lookup);
}
