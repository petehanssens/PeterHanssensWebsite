import Link from "next/link";
import dynamic from 'next/dynamic'
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
// import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { getPostBySlug, getPostsSlugs } from "../../../utils/posts";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

const renderers = {
  code:({language,value})=>{
  var newCode = value
  var oldCode = value || oldCode

  return <SyntaxHighlighter style={dark} language={"dart"} children={newCode || "" } />
}
}
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

// const MarkdownImage = ({ alt, src }) => (
//   <Image
//     alt={alt}
//     src={require(`../../content/assets/${src}`)}
//     previewSrc={require(`../../content/assets/${src}?lqip`)}
//     className="w-full"
//   />
// );

export default function Post({ post, frontmatter, nextPost, previousPost }) {
  return (
    <Layout>
      <SEO
        keywords={frontmatter.tags}
        title={frontmatter.title}
      />

      <main className="min-h-screen">
        <div className="relative">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <article>
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
          </article>
          </div>
        </div>
      </main>
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
