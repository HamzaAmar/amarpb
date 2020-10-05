import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const SEO = props => {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description
          url
        }
      }
    }
  `)
  const { title, description, url } = site.siteMetadata
  console.log(title, description, url)
  return null
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
