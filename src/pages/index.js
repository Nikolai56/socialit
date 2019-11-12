import React from 'react';
import { graphql, Link } from 'gatsby';
import { Collapse } from 'react-collapse';
import Layout from '../layouts';

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: 'всё',
            isMenuOpen: false,
        };
    }

    handleChangeTag = (e, tag) => {
        const activeEls = document.querySelectorAll('.menu_list2 .active');

        e.preventDefault();
        activeEls.forEach(el => el.classList.remove('active'));
        e.target.parentElement.classList.add('active');
        this.setState({ tag });
        this.handleCloseMenu();
    };

    handleToggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    };

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    };

    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <Layout>
                <nav className="nav2">
                    <div className="container">
                        {/*<h1 className="text-center">Работы по категориям:</h1>*/}
                        {/*<br />*/}
                        <div className="menu_toggle2" onClick={this.handleToggleMenu} style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false"><title>Menu</title><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22" /></svg>
                            <span style={{marginLeft: 8}}>Категории</span>
                        </div>
                        <ul className="menu_list2">
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'всё')}>Всё </a></li>
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'сайты')}>Сайты </a></li>
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'полиграфия')}>Полиграфия </a></li>
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'наружная реклама')}>Наружная реклама </a></li>
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'логотип и фирменный стиль')}>Логотип и фирменный стиль </a></li>
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'иллюстрации')}>Иллюстрации </a></li>
                        </ul>
                        <Collapse isOpened={this.state.isMenuOpen}>
                            <ul className="menu_list2 menu_list2-mobile">
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'всё')}>Всё </a></li>
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'сайты')}>Сайты </a></li>
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'полиграфия')}>Полиграфия </a></li>
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'наружная реклама')}>Наружная реклама </a></li>
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'логотип и фирменный стиль')}>Логотип и фирменный стиль </a></li>
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'иллюстрации')}>Иллюстрации </a></li>
                            </ul>
                        </Collapse>
                    </div>
                </nav>
                <section className="portfolio">
                    <div className="container-fluid">
                        {posts
                            .filter(post => post.node.frontmatter.templateKey === 'project-post')
                            .filter(post => [...post.node.frontmatter.tags].includes(this.state.tag))
                            .map(({ node: post }) => (
                                <Link key={post.id} to={post.fields.slug} className='project-link'>
                                    <img src={post.frontmatter.imageInList} alt={`${post.frontmatter.title} | ${post.frontmatter.date}`} />
                                    <p>{post.frontmatter.title}</p>
                                </Link>
                            ))}
                    </div>
                </section>
            </Layout>
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
            tags
            title
            templateKey
            date(formatString: "DD.MM.YYYY")
            imageInList
          }
        }
      }
    }
  }
`;
