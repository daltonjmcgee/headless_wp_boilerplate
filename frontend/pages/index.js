import { useEffect, useState } from 'react';
import { getPageBlocks } from '../helpers';

export async function getServerSideProps(ctx) {
  return {
    props: {
      apiUrl: process.env.WORDPRESS_API_URL,
    }
  }
}

export default function Home({ apiUrl }) {
  const [state, setState] = useState([]);
  const query =
    useEffect(() => {
      getPageBlocks(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          const newState = [];
          for (let item of data.data.pages.edges) {
            // const tempData = JSON.parse(item.attributesJSON.replace('\\', ''));
              newState.push(item);
          }
          setState(newState);
        });
    }, [])

  console.log(state);
  return (
    <h1>Hello Multiverse...</h1>
  )
}
