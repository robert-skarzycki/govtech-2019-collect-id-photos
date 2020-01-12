import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Konkurs GovTech</h1>
      <h3>Walidacja zdjęć do dowodu osobistego</h3>
      <h4>
        Wytrenujmy sztuczną inteligencję, żeby rozpoznawała, czy fotografia
        spełnia standardy zdjęcia do dowodu osobistego. Zainteresowany?{" "}
        <Link to="/about">Dowiedz się więcej</Link> albo{" "}
        <Link to="/valid">od razu zacznij zabawę</Link>!
      </h4>
    </Layout>
  )
}

export default IndexPage
