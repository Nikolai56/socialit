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
}) => {
  const PostContent = contentComponent || Content;
    return (
        <main className="project">
            {helmet || ''}
            <div className="container">
                <h1>{title}</h1>
            </div>
            <div className="grey">
                <div className="container">
                    <p>{description} <span className="tr">{date}</span></p>
                </div>
            </div>
            <div className="handbg">
                <img src={image} alt={title} />
            </div>
            <div className="container">
                <PostContent content={content}/>
                <img src={image} alt={title} />
                <img src="img/art-gr.png" alt="" />
            </div>
            <div className="grey">
                <div className="container dib">
                    <p>
                        <span>Дизайнер:</span>
                        <br />Андрей Фуфачев
                    </p>
                    <p>
                        <span>Дизайнер:</span>
                        <br />Станислав Авдеев
                    </p>
                </div>
            </div>
        </main>
    )
};

// const old = (
//     <section className="section">
//         {helmet || ''}
//         <div className="container content">
//             <div className="columns">
//                 <div className="column is-10 is-offset-1">
//                     <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
//                         {title}
//                     </h1>
//                     <p>{description}</p>
//                     <PostContent content={content}/>
//                 </div>
//             </div>
//         </div>
//     </section>
// )

export default props => {
  const { markdownRemark: post } = props.data

  return (
    <ProjectPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      image={post.frontmatter.image}
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
        title
        description
        image
      }
    }
  }
`;
