import {DiscussionEmbed} from "disqus-react"
const DisqusComments = ( props ) => {
  const post = props.props
  const disqusShortname = "peterhanssens"
  const disqusConfig = {
    url: "https://peterhanssens.com.au/blog/"+post.pageSlug,
    identifier: post.pageSlug, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;