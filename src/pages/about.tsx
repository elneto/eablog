import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Ernesto" desc="Hola. I'm Ernesto!" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hola. I'm Ernesto!</h1>
        <p>
          Full stack developer and international Godínez. You can also visit my {' '}
          <a href="https://www.youtube.com/user/soyfantomas/videos">Youtube channel</a> or my {' '}
          <a href="https://github.com/elneto/">github</a> repositories.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
