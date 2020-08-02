import React, { Component } from "react"
import styles from "./layout.module.scss"

class Layout extends Component {

  render() {
    const { children } = this.props

    return (
      <div className={styles.pageContainer}>
        { children }
      </div>
    )
  }
}

export default Layout