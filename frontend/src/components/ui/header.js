import React from "react"

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tab,
  Tabs,
} from "@material-ui/core"

export default function header() {
  return (
    <AppBar>
      <Toolbar>
        <Button>
          <Typography variant="h1">Grood</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
