import React from "react"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header siteTitle="PSLCorp Home" />
    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
