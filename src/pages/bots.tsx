import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Bots = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="Bots | Ernesto" desc="Hola. I'm Ernesto!" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Bots</h1>
        <p>
          At some point I enjoyed making Twitter bots
        </p>
        <ul>
          <li><a href="https://twitter.com/DiaDeTuSanto">@DiaDeTuSanto</a>: Tuitea los santos del Día. <a href="https://github.com/elneto/santos">Source.</a></li>
          <li><a href="https://twitter.com/freemanhattan">@freemanhattan</a>: Scraps craigslist free items in Manhattan.</li>
          <li><a href="https://twitter.com/free_stof">Free in Astoria</a>: Scraps craigslist free items in Astoria.</li>
          <li><a href="https://twitter.com/Jalil_Gibran">@Jalil_Gibran</a>: Dichos diarios del poeta del Líbano.</li>
          <li>And a bunch more that Twitter deactivated. 🙄</li>
        </ul>
      </AnimatedBox>
    </Layout>
  )
}

export default Bots
