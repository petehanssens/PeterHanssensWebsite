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
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Press</h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-500">Get weekly articles in your inbox on how to grow your business.</p>
            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                >
                  Notify me
                </button>
              </div>
            </form>
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
