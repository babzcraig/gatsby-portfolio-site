import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 48%;
  box-sizing: border-box;
  margin-bottom: 24px;

  &:nth-child(odd) {
    margin-right: 20px;
  }

  p {
    font-size: 90%;
  }

  a {
    display: block;
    color: #ae5eed;
  }

  article {
    padding: 20px;
  }

  small {
    text-transform: uppercase;
    color: #ababab;
    font-size: 70%;
  }

  @media screen and (max-width: 554px) {
    width: 100%;

    &:nth-child(odd) {
      margin-right: 0px;
    }
  }
`

const Project = ({ project }) => (
  <Div>
    <img src={project.image.file.url} alt="project image" />
    <article>
      <h3>{project.title}</h3>
      <p>{project.description.description}</p>
      <a href={project.link}>View Project</a>
      <small>Project date: {project.year}</small>
    </article>
  </Div>
)

export default Project
