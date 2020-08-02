const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
}

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions

  const result = await graphql(`
  query {
    allMdx {
      edges {
        node {
          slug
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/section.js`),
      context: {
        slug: node.slug
      }
    })
  })
}