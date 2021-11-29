export async function getPaths(url) {
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
