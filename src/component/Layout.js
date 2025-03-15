import React from "react";
import NewHeader from "./new_header";
import Footer from "./footer";
import WhatsApp from "../image/wp-4.png"
import BackToTopButton from '../component/BackToTopButton';

const
  
  WithLayout = (Component) => () => (<div>
    <NewHeader />
    <Component />
    <div className="whatsapp">
      <a href="https://api.whatsapp.com/send/?phone=918685014330&text=Hello+Team+Vertipride+Solutions%21+%0D%0A%0D%0AWould+like+to+know+more+information+about&type=phone_number&app_absent=0" target="_blank">
        <img src={WhatsApp} alt="fixed img"></img>
      </a>
    </div>
    <div className="BackToTopButton"><BackToTopButton /></div>
    <Footer />
  </div>)

export default WithLayout;