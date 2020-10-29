export default function B(props) {
  return <div>B. Country - {props.country}</div>
}

export async function getStaticProps(context) {
  return {
    props: {
      country: context.params.country
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