import React, { Component } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

class Home extends Component {
  render() {
    return (
      <Layout>
        <p></p>
        <Link to="/ochem/">Organic chemistry</Link>
      </Layout>
    )
  }
}

export default Home
