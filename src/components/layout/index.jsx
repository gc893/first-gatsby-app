import React from "react"
import NavBar from '../navbar'
import Footer from '../footer'
import styles from "./layout.module.css"


export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
        <NavBar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}