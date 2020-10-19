  
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ()=> {
    return (
      <Layout>
        <SEO title="404: Not Found" />
        <h1>404</h1>
        <p>
          We Think that You get Lost and we think that you need help 
          please check our map to go fast for the page that you need
        </p>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </Layout>
    )
}

export default NotFoundPage
