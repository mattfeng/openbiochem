import React, { Component } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

class Home extends Component {
  render() {
    return (
      <Layout>
        <h1>Open Biochemistry Textbook</h1>
        <table className="fullwidth">
          <tr>
            <th>Chapter</th>
            <th>Description</th>
          </tr>

          <tr>
            <td><Link to="/ochem/">Organic chemistry</Link></td>
            <td></td>
          </tr>

          <tr>
            <td><Link to="/genomics/">Genomics</Link></td>
            <td></td>
          </tr>

          <tr>
            <td><Link to="/anatomy/">Anatomy</Link></td>
            <td></td>
          </tr>

          <tr>
            <td><Link to="/dd/">Drug discovery</Link></td>
            <td></td>
          </tr>
        </table>
      </Layout>
    )
  }
}

export default Home
