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

import { Link, navigate } from "gatsby"

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
            <Tab
              component={Link}
              to={tab.node.link || `/${tab.node.name.toLowerCase()}`}
              label={tab.node.name}
              key={tab.node.strapiId}
            />
          ))}
          <IconButton
            onClick={() => {
              navigate("/search")
            }}
          >
            <img src={search} alt="Search" />
          </IconButton>

          <IconButton to="/cart" component={Link}>
            <img src={cart} alt="Cart" />
          </IconButton>
          <IconButton to="/account" component={Link}>
            <img src={account} alt="Account" />
          </IconButton>
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
