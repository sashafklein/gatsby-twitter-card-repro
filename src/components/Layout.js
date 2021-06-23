import React from 'react'
import { Helmet } from 'react-helmet'
import { Location } from "@reach/router"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children, headerImage }) => {
  const { title, description } = useSiteMetadata()

  const removeTrailingSlash = s => s[s.length - 1] === '/' ? s.slice(0, s.length - 1) : s
  const imagePath = headerImage ? headerImage.childImageSharp.fixed.src : '/img/og-image.jpg'

  return (
    <Location>
      {({ location }) => {
        const href = location.href
        const origin = removeTrailingSlash(location.origin || "")
        const image = `${origin}${imagePath}`

        return (
          <div>
            <Helmet>
              <html lang="en" />
              <title>{title}</title>
              <meta name="description" content={description} />

              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={`${withPrefix('/')}img/apple-touch-icon.png`}
              />
              <link
                rel="icon"
                type="image/png"
                href={`${withPrefix('/')}img/favicon-32x32.png`}
                sizes="32x32"
              />
              <link
                rel="icon"
                type="image/png"
                href={`${withPrefix('/')}img/favicon-16x16.png`}
                sizes="16x16"
              />

              <link
                rel="mask-icon"
                href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                color="#ff4400"
              />
              <meta name="theme-color" content="#fff" />

              <meta property="og:type" content="business.business" />
              <meta property="og:title" content={title} />
              <meta property="og:url" content="/" />
              <meta property="og:image" content={image} />

              <meta name="twitter:url" content={href} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={title} />
              <meta name="twitter:description" content={description} />
              <meta name="twitter:image" content={image} />
            </Helmet>
            <Navbar />
            <div>{children}</div>
            <Footer />
          </div>
          )
      }}
    </Location>
  )
}

export default TemplateWrapper
