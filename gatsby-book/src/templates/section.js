/**
 * The template for a section within a chapter.
 * 
 * Book > Chapters > Sections
 */

import React, { Component } from "react"
import Layout from "../components/layout"
import Chem from "../components/formula"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/classes.scss"

require('katex/dist/contrib/mhchem.js');
require(`katex/dist/katex.min.css`)

class Section extends Component {
  render() {
    const shortcodes = { Chem }

    return (
      <Layout>
        <script src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/mhchem.min.js" integrity="sha384-5gCAXJ0ZgozlShOzzT0OWArn7yCPGWVIvgo+BAd8NUKbCmulrJiQuCVR9cHlPHeG"></script>
        <h1>{ this.props.data.mdx.frontmatter.title }</h1>
        <MDXProvider components={ shortcodes }>
          <MDXRenderer>
            { this.props.data.mdx.body }
          </MDXRenderer>
        </MDXProvider>
      </Layout>
    )
  }
}

export default Section

export const query = graphql`
query($slug: String!) {
  mdx(slug: { eq: $slug }) {
    slug
    body
    frontmatter {
      title
      slug
    }
  }
}
`
