import { getPaths } from "../helpers"

export async function getStaticPaths() {
  const paths = getPaths(process.env.WORDPRESS_API_URL);
  paths.then(res=>console.log(res));
  return {
    paths: [
      { params: {slug: 'dalton'} }
    ],
    fallback: false,
  }
}

export async function getStaticProps() {
  return {props: {data: "dalton"}};
}

export default function Page({data}) {
  return <div><h1>{data}</h1></div>
}
