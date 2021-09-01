import React from "react"

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tab,
  Tabs,
  IconButton,
} from "@material-ui/core"
import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import account from "../../images/account-header.svg"

export default function header({ categories }) {
  const allTabs = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "xy" } },
  ]
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">Grood</Typography>
        </Button>
        <Tabs>
          {allTabs.map(tab => (
            <Tab label={tab.node.name} key={tab.node.strapiId} />
          ))}
          <IconButton>
            <img src={search} alt="Search" />
            <img src={cart} alt="Cart" />
            <img src={account} alt="Account" />
          </IconButton>
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
