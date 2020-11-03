export default function A(props) {
  return <div>A. Country - {props.country}</div>
}

export async function getStaticProps(context) {
  console.log(JSON.stringify(context))
  return {
    props: {
      country: context.params.slug
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}