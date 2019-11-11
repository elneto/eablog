import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'


export default () => {
  const data = useStaticQuery(graphql`
    query Logo {
    me: file(sourceInstanceName: { eq: "images" }, name: { eq: "avatar" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `)
  return (
    <Img fluid={data.me.childImageSharp.fluid} alt="Ernesto" title="Este soy yo"/>
  )
}


  
