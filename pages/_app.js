import React, { useCallback, useEffect, useState } from 'react'
import PreLoaderPage from '../components/UI/PreLoaderPage';
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [showLoader, setShowLoader] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoader(false);
  //   }, 6000);
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [showLoader])
  return (
    <React.Fragment>
      {/* {showLoader && <PreLoaderPage/>} */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

export default MyApp
