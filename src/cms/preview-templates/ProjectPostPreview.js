import React from 'react'
import { ProjectPostTemplate } from '../../templates/project-post'

const ProjectPostPreview = ({ entry, widgetFor }) => {
    const entryAuthors = entry.getIn(['data', 'authors']);
    const authors = entryAuthors ? entryAuthors.toJS() : [];
    return (
        <ProjectPostTemplate
            content={widgetFor('body')}
            description={entry.getIn(['data', 'description'])}
            title={entry.getIn(['data', 'title'])}
            image={entry.getIn(['data', 'image'])}
            // authors={authors}
            authors={{
                title: entry.getIn(['data', 'authors', 'title']),
                text: entry.getIn(['data', 'authors', 'text']),
            }}
        />
    )
};

export default ProjectPostPreview
