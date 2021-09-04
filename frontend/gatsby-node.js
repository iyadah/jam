/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const results = await graphql(`
    {
      allStrapiProduct {
        edges {
          node {
            name
            strapiId
            category {
              name
            }
          }
        }
      }
      allStrapiCategory {
        edges {
          node {
            name
            strapiId
            description
          }
        }
      }
    }
  `)

  if (results.errors) {
    throw results.errors
  }

  const products = results.data.allStrapiProduct.edges
  const categories = results.data.allStrapiCategory.edges

  products.forEach(product => {
    createPage({
      path: `/${product.node.category.name.toLowerCase()}/${product.node.name
        .split(" ")[0]
        .toLowerCase()}`,
      component: require.resolve("./src/templates/productDetail.js"),
      context: {
        name: product.node.name,
        id: product.node.strapiId,
        category: product.node.category.name,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/${category.node.name.toLowerCase()}`,
      component: require.resolve("./src/templates/productList.js"),
      context: {
        name: category.node.name,
        description: category.node.description,
        id: category.node.strapiId,
      },
    })
  })
}
