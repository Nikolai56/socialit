import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Services from '../components/Services'

export const ServicesPageTemplate = ({ title, content, contentComponent, services }) => {
  const PageContent = contentComponent || Content

  return (
      <div>
          <div className="container">
              <h1>{title}</h1>
              <PageContent className="content" content={content} />
          </div>
          <Services services={services} />
      </div>
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
`
