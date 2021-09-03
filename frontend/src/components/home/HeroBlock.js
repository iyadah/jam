import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Lottie from "react-lottie"
import animationData from "../../images/data.json"

const HeroBlock = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

  return (
    <Grid container justify="space-around">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">
              The Premier
              <br />
              Developer Clothing Line
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              high qulity custom design shirts hoodies and hats
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Lottie options={defaultOptions} width="50rem" />
      </Grid>
    </Grid>
  )
}

export default HeroBlock
