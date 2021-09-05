import React from "react"
import Layout from "../components/ui/layout"
import { Grid } from "@material-ui/core"
import DynamicToolbar from "../components/productList/DynamicToolbar"

const productList = ({ pageContext }) => {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar />
      </Grid>
      <div>This is from dynamic page creation {pageContext.name}</div>
    </Layout>
  )
}

export default productList
