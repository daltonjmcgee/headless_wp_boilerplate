import { getPaths } from "../helpers"

export async function getStaticPaths() {
  const paths = await getPaths(process.env.WORDPRESS_API_URL);
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  console.log(params);
  return {props: {data: params.slug}};
}

export default function Page({data}) {
  return <div><h1>{data}</h1></div>
}
