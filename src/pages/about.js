// // Step 1: Import React
// import * as React from 'react'
// import { Link } from 'gatsby'

// // Step 2: Define your component
// const AboutPage = () => {
//   return (
//     <main>
//       <title>About Us</title>
//       <h1>About Us</h1>
//       <Link to="/">Back to Home Page</Link>
//       <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
//     </main>
//   )
// }

// // Step 3: Export your component
// export default AboutPage

import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
  return (
  <Layout pageTitle="About Us Page">
    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="../images/th.jpg"
    />
  </Layout>
  )
}

export default AboutPage