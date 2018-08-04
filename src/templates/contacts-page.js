import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Content, { HTMLContent } from '../components/Content';

const mapState = { center: [55.675118, 37.584362], zoom: 14 };

export const ContactsPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="contacts clearfix">
            <div className="container">
                <h1>{title}</h1>
                <br />
                <div className="col-md-6">
                    <form name="contact" method="POST" data-netlify>
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" name="name" placeholder="Имя" required />
                        <input type="email" name="email" placeholder="E-mail" required />
                        <textarea name="comment" rows="12" placeholder="Комментарий" />
                        <div data-netlify-recaptcha />
                        <br />
                        <button type="submit">Отправить</button>
                    </form>
                </div>
                <PageContent className="col-md-6" content={content} />
            </div>
            <div className="col-md-12">
                <YMaps>
                    <Map state={mapState} width="100%" height={420}>
                        <Placemark
                            geometry={{
                                coordinates: mapState.center,
                            }}
                            properties={{
                                hintContent: 'Центральный офис SOCIALIT в Москве',
                                balloonContentBody: ['<address>',
                                    '<strong>Центральный офис SOCIALIT в Москве</strong>',
                                    '<br/>',
                                    'Адрес: 117218, Москва, ул.Большая Черёмушкинская, д.25, стр. 97',
                                    '</address>'].join(''),
                            }}
                            options={{
                                preset: 'islands#redDotIcon',
                            }}
                        />
                    </Map>
                </YMaps>
            </div>
        </section>
    )
};

export default ({ data }) => {
    const { frontmatter, html } = data.markdownRemark

    return (
        <ContactsPageTemplate
            contentComponent={HTMLContent}
            title={frontmatter.title}
            content={html}
        />
    )
}

export const contactsPageQuery = graphql`
  query ContactsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
