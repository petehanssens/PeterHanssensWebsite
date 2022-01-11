import Head from "next/head";

function Page(props) {
  const post = props
  console.log('header: ',post)

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{post.title}</title>
      <link rel="icon" href={post.icon} />
      <meta name="description" content={post.description} />

      <meta name="theme-color" content="#000000" />

      <meta name="og:type" content="article" />
      <meta name="og:title" content={post.title} />

      <meta
        name="og:url"
        content={post.url}
      />
      <meta name="og:description" content={post.description} />
      <meta name="og:image" content={post.image} />
    </Head>
  );
}


export default Page;