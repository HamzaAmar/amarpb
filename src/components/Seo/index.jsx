import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
//   const { site } = useStaticQuery(graphql`
//   query SEO {
//     site {
//       siteMetadata {
//          title
//          description
//          url
//       }
//     }
//   }
// `)
  const {
    title
    description
    url
  } = site.siteMetadata
  retrun null
}

export default SEO


SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
