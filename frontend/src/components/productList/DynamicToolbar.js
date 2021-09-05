import React from "react"
import { Grid, Typography } from "@material-ui/core"

const DynamicToolbar = () => {
  return (
    <Grid item container direction="column">
      <Grid item>
        <Typography>Filter</Typography>
      </Grid>
    </Grid>
  )
}

export default DynamicToolbar
