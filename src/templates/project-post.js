import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const ProjectPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  date,
  helmet,
  image,
  authors,
}) => {
  const PostContent = contentComponent || Content;
    return (
        <section className="project">
            {helmet || ''}
            <div className="container">
                <h1>{title}</h1>
            </div>
            <div className="grey">
                <div className="container">
                    <p>{description} <span className="tr">{date}</span></p>
                </div>
            </div>
            {image ? <div className="handbg">
                <img src={image} alt={title} />
            </div> : null}
            <div className="container">
                <PostContent content={content}/>
            </div>
            {authors ? <div className="grey">
                <div className="container dib">
                    {authors.map(item => (
                        <p key={`${item.title}-${item.text}`}>
                            <span>{item.title}</span>
                            <br />{item.text}
                        </p>
                    ))}
                </div>
            </div> : null}
        </section>
    )
};

export default props => {
  const { markdownRemark: post } = props.data;

  return (
    <ProjectPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Работы | ${post.frontmatter.title}`} />}
      tag={post.frontmatter.tag}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      image={post.frontmatter.image}
      authors={post.frontmatter.authors}
    />
  )
}

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        tag
        title
        description
        image
        authors {
            title
            text
        }
      }
    }
  }
`;
