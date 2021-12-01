import { getPageBlocks, getPaths } from "../helpers"

export async function getStaticPaths() {
  const paths = await getPaths(process.env.WORDPRESS_API_URL);
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = await getPageBlocks(process.env.WORDPRESS_API_URL, params.slug);
  // TODO: Destructure Blocks and pass them into the props;
  return { props: { data } };
}

export default function Page({ data }) {
  return <div><h1>hello</h1></div>
}
