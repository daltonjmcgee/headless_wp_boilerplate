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
                title
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
        slug: path.node.slug
      }
    });
  }

  // Return Array
  return ret;
};

export async function getPageBlocks(url) {
  return await fetch(url, {
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
                title
                slug
              }
            }
          }
        }
    `
    }),
  })
};
