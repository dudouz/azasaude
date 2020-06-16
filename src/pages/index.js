import React from "react"

import Layout from "../components/Layout"

import Slider from "../components/Slider"
import About from "../components/About"
import Services from "../components/Services"
import Footer from "../components/Footer"

import Clients from "../components/Clients"
import Contact from "../components/Contact"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="AZA Saúde - Consultoria jurídica especializada em saúde. " />
    <About />
    <Services />
    <Clients />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
