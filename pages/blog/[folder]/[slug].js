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

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                {frontmatter.date}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {frontmatter.title}
              </span>
            </h1>

            <ReactMarkdown
              className="mt-8 text-xl text-gray-500 leading-8"
              children={post.content}
              rehypePlugins={[rehypeRaw]}
              components={components}
            />
            <Disqus props={frontmatter} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

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





