import React from 'react'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="portfolio">
        <div className="container-fluid">
            <h1>Работы</h1>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'project-post')
            .map(({ node: post }) => (
                <Link key={post.id} to={post.fields.slug}>
                    <img src={post.frontmatter.image} alt={`${post.frontmatter.title} | ${post.frontmatter.date}`} />
                    {/*<p>{post.excerpt}</p>*/}
                </Link>
            ))}
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD.MM.YYYY")
            image
          }
        }
      }
    }
  }
`
