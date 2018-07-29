import React from 'react';
import Link from 'gatsby-link';

export default class IndexPage extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div>
                <nav className="nav2">
                    <div className="container">
                        <h1 className="text-center">Работы по категориям:</h1>
                        <br />
                        <div className="menu_toggle2">Категории</div>
                        <ul className="menu_list2">
                            <li><a href="#">Всё</a></li>
                            <li><a href="#">Сайты</a></li>
                            <li><a href="#">Полиграфия </a></li>
                            <li><a href="#">Наружная реклама </a></li>
                            <li><a href="project.html">Логотип и фирменный стиль</a></li>
                            <li><a href="#">Иллюстрации </a></li>
                        </ul>
                    </div>
                </nav>
                <section className="portfolio">
                    <div className="container-fluid">
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
            </div>
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
`;
