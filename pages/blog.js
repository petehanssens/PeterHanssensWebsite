import Link from "next/link";
import { useRouter } from 'next/router'
import { getSortedPosts } from "../utils/posts";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Blog({ posts }) {
  const router = useRouter()
  return (
  <Layout>
    <SEO
      keywords={[`Peter Hanssens`,`blogs`]}
      title="Blogs - Peter Hanssens!"
    />
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Blog</h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-500">Here are my thoughts on a bunch of topics that are taking my interest at the moment!</p>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">

        {posts.map(({ frontmatter: { title, description, date }, slug }) => (
          <div key={slug}>
            <p className="text-sm text-gray-500">
              <time dateTime={date}>{date}</time>
            </p>
            <a onClick={() => router.push(`blog/${slug}.md`)} className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="mt-3 text-base text-gray-500">{description}</p>
            </a>
            <div className="mt-3">
              <a onClick={() => router.push(`blog/${slug}.md`)} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                Read full story
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  </Layout>
  )
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
