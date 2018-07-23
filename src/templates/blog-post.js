import React from "react";
import Helmet from "react-helmet";

export default function Template({
  data
}) {
  const post = data.markdownRemark;
  return (
    <div className="blog-post-container">
     <Helmet title={`Gatsby Starter | ${post.frontmatter.title}`} />
      <div className="blog-post">
        <header>
          <h1>{post.frontmatter.title}</h1>
          <em
            style={{
              display: 'block',
              paddingBottom: 20,
            }}
          >
            {post.frontmatter.date}
          </em>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
;
