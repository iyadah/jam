import React from "react"

const productList = ({ pageContext }) => {
  return <div>This is from dynamic page creation {pageContext.name}</div>
}

export default productList
