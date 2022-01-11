import matter from "gray-matter";
import fs from "fs";
import path from "path";

export function getPostsFolders() {
  // Get all posts folders located in `content/posts`
  const postsFolders = fs
    .readdirSync(`${process.cwd()}/content/blog`)
    .filter((folderName) => (folderName != '_index.md'))
    .map((folderName) => (
        fs
          .readdirSync(`${process.cwd()}/content/blog/${folderName}`)
          .map((fileName) => ({
              folder: folderName,
              filename: `${fileName}`,
            }
          ))
    ));

  return postsFolders;
}

// Get day in format: Month day, Year. e.g. April 19, 2020
function getFormattedDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function getSortedPosts() {
  const postFolders = getPostsFolders().flat();

  const posts = postFolders
    .map(({ folder, filename }) => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/blog/${folder}/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content } = matter(markdownWithMetadata);

      // Remove .md file extension from post name
      const slug = `${folder}/${filename.replace(".md", "")}`;

      const frontmatter = {
        ...data,
        date: getFormattedDate(data.date),
        pageSlug: slug,
        authorImage: './img/square_headshot.jpg',
        authorName: 'Peter Hanssens'
      };

      return {
        slug,
        frontmatter,
        excerpt,
        content,
      };
    })
    .filter((data) => (
      data.frontmatter.draft != true
    ))
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return posts;
}

export function getPostsSlugs() {
  const postFolders = getPostsFolders().flat();

  const paths = postFolders.map(({ folder, filename }) => ({
    params: {
      folder: `${folder}`,
      slug: `${filename}`,
    },
  }));

  return paths;
}

export function getPostBySlug(folder, slug) {
  const posts = getSortedPosts()

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === `${folder}/${slug.replace(".md", "")}`);

  const { frontmatter, content, excerpt } = posts[postIndex];

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return { frontmatter, post: { content, excerpt }, previousPost, nextPost };
}
