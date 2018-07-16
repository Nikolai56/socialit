import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Services from '../components/Services'

export const ServicesPageTemplate = ({ title, content, contentComponent, services }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <Services services={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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
