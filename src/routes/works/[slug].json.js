import { getLookupMap, setLookupHeaders } from '../../utils.js';
import works from './_works.js';

const lookup = getLookupMap(works);

export function get(req, res, next) {
	setLookupHeaders(req, res);
}
