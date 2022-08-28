import React from 'react'
import styles from './RandomImage.module.css'

const RandomImage = () => {
  return (
    <section className={styles.lower_section}>
      <div
        className={styles.image_container}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80')",
        }}
      >
        <h2>Get alerted when the shots you want to take are possible</h2>
        <p>
          Say you want to take a sunset photo of some rocks on a nearby beach
          that are only visible at low tide. You need a couple of things to line
          up: the low tide has to coincide with the golden hour and, of course,
          you can’t have a miserable grey day. You could ceaselessly refresh
          your favourite weather and tide apps, hoping every day that the shot’s
          available. Or, you could create an alert with Snapsure. A few days
          before the shot is possible, we’ll drop you an email to let you know.
          No more missed opportunities. With X variables and billions of
          possible combinations, whatever shot you want to take, Snapsure can
          make sure you don’t miss it.
        </p>
      </div>
    </section>
  )
}

export default RandomImage
