export async function getPaths(url) {
  // Initialize return array;
  let ret = [];

  // Get list of Pages from Wordpress in JSON.
  const paths = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          pages {
            edges {
              node {
                slug
              }
            }
          }
        }
    `
    }),
  }).then(res => res.json());

  // Build array for getStaticPaths() to use;
  for (let path of paths.data.pages.edges) {
    ret.push({
      params: {
        slug: path.node.slug,
      }
    });
  }

  // Return Array
  return ret;
};

export async function getPageBlocks(url, pageUri) {
  // Get block data from given page based on URI.
  const blocks = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          page ( idType: URI, id: "${pageUri}" ) {
            title
            blocks {
              attributesJSON
            }
          }
        }
      `
    }),
  }).then(res => res.json());

  const ret = blocks.data.page;

  return ret;
};
