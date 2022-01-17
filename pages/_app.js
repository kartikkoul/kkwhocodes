import React, { useCallback, useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const {showLoader, setShowLoader} = useState(true);
  useCallback(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);
    return () => {
      clearTimeout(timer)
    }
  }, [showLoader])
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
