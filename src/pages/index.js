// // Step 1: Import React
// import * as React from 'react'
// import {Link} from 'gatsby';

// // Step 2: Define your component
// const IndexPage = () => {
//   return (
//     <main>
//       <title>Home Page</title>
//       <h1>Welcome to my Gatsby site!</h1>
//       <Link to="/about">About</Link>
//       <p>I'm making this by following the Gatsby Tutorial.</p>
//     </main>
//   )
// }

// // Step 3: Export your component
// export default IndexPage

import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
  <Layout pageTitle="Home Page">
    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
    />
  </Layout>
  )
}

export default IndexPage