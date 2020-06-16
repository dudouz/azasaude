import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NÃO ENCONTRADO</h1>
    <p>Perdão, mas essa página que você tentou acessar não existe.</p>
    <p>
      <a href="/">Volte para a home.</a>
    </p>
  </Layout>
)

export default NotFoundPage
