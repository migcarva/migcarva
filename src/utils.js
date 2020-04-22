export const getLookupMap = (list) => {
  const lookup = new Map();

  list.forEach((item, i) => {
    const j = i >= list.length - 1 ? null : i + 1;
    const next = j === null ? { slug: null } : {
      slug: list[j].slug,
      title: list[j].title,
    };

    const lItem = { ...item, next };
    lookup.set(item.slug, JSON.stringify(lItem));
  });

  return lookup;
}

export const setLookupHeaders = (req, res) => {
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