import React, { useEffect, useState } from 'react'
import preloader from '../image/preloader 1.gif';

const Preloader = ({ delay = 4000 }) => {


  const [loader, setLoader] = useState(false);
  console.log(delay, 'delaydelay')

  useEffect(() => {
    // Simulate an async operation, e.g., fetching data
    setLoader(true)
    let timer = setTimeout(() => {
      setLoader(false);
    }, delay); // Replace this with your actual data fetching logic
    return () => {
      clearTimeout(timer)
    }
  }, [delay]);

  if (loader) {
    return (
      <>
        <div className="preloader-container">
          <img src={preloader} alt="Loading..." />
        </div>
      </>
    )
  }
}

export default Preloader