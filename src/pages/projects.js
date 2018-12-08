import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Project from '../components/Project'

const ProjectsWapperEl = styled.div`
  display: flex;
  margin-bottom: 48px;
  width: 100%;
  flex-wrap: wrap;
`

const ProjectsPage = ({ data }) => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>Projects</h1>
    <ProjectsWapperEl>
      {data.allContentfulProject.edges.map(({ node }) => (
        <Project key={node.id} project={node} />
      ))}
    </ProjectsWapperEl>
    <Link to="/">Back</Link>
  </Layout>
)

export const query = graphql`
  query ContentfulProjectsQuery {
    allContentfulProject(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          id
          createdAt
          title
          description {
            description
          }
          link
          year
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
