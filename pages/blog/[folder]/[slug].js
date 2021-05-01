import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import gfm from 'remark-gfm';

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { getPostBySlug, getPostsSlugs } from "../../../utils/posts";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

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
              escapeHtml={false}
              children={post.content}
              renderers={{ code: CodeBlock,  }}
            />
            {/* <hr className="mt-4" /> */}
            {frontmatter.title}
            {/* <footer>
            </footer> */}
          </article>
          {/* <nav className="flex flex-wrap justify-between mb-10">
            {previousPost ? (
              <Link href={"/blog/[slug]"} as={`/blog/${previousPost.slug}`}>
                <a className="text-lg font-bold">
                  ← {previousPost.frontmatter.title}
                </a>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link href={"/blog/[slug]"} as={`/blog/${nextPost.slug}`}>
                <a className="text-lg font-bold">{nextPost.frontmatter.title} →</a>
              </Link>
            ) : (
              <div />
            )}
          </nav> */}
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
