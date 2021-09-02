import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"

const footer = () => {
  return (
    <footer>
      <Grid container justify="space-between">
        <Grid item container>
          <Grid item>
            <Typography>Information</Typography>
          </Grid>
          <Grid>
            <Typography>Contact us</Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <img src={facebook} alt="facebook" />
          </Grid>
          <Grid item>
            <img src={twitter} alt="twitter" />
          </Grid>
          <Grid item>
            <img src={instagram} alt="instagram" />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

export default footer
