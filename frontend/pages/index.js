import { useEffect, useRef, useState } from 'react';
import { getPageBlocks } from '../helpers';

export async function getServerSideProps(ctx) {
  const blocks = await getPageBlocks(process.env.WORDPRESS_API_URL).then(res=>res.json());
  console.log(blocks);
  return {
    props: {
      blocks:blocks.data,
    }
  }
}

export default function Home({ blocks }) {
  const [state, setState] = useState([]);
  useEffect(()=>setState(blocks),[]);
  console.log(blocks);
  return (
    <h1>Hello Multiverse...</h1>
  )
}
