import React from 'react'
import Content, { HTMLContent } from '../components/Content'

export const ServicesPageTemplate = ({ title, content, contentComponent, services }) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="services">
            <div className="container">
                <h1>{title}</h1>
                <PageContent className="content" content={content} />
                <br />
                {services.map(item => (
                    <div className="col-md-12 clearfix" key={item.image}>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default ({ data }) => {
    const { frontmatter, html } = data.markdownRemark

    return (
        <ServicesPageTemplate
            contentComponent={HTMLContent}
            title={frontmatter.title}
            services={frontmatter.services}
            content={html}
        />
    )
}

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        services {
          image
          title
          text
        }
      }
    }
  }
`;
