import dynamic from 'next/dynamic'
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from 'rehype-raw'

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { getPostBySlug, getPostsSlugs } from "../../../utils/posts";
import Disqus from "../../../components/disqus";

const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter  language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props} />
    )
  }
}

export default function Post({ post, frontmatter, nextPost, previousPost }) {
  return (
    <Layout>
      <SEO
        keywords={frontmatter.tags}
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image}
      />


<div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <header className="mb-8">
              <h1 className="mb-2 text-6xl font-black leading-none font-display">
                {frontmatter.title}
              </h1>
              <p className="text-sm">{frontmatter.date}</p>
            </header>
            <ReactMarkdown
              className="mb-4 prose-sm prose sm:prose lg:prose-lg"
              children={post.content}
              rehypePlugins={[rehypeRaw]}
              components={components}
            />
            <Disqus props={frontmatter} />
          </div>
        </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();
  // console.log(`paths: ${JSON.stringify(paths)}`)

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { folder, slug } }) {
  const postData = getPostBySlug(folder, slug);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}
