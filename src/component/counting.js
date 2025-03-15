import React from "react";
// import pattern from "../image/expertise/e-pattern.png";
import coutdown from "../image/Layer 123.png";
import CountUp from "react-countup";




function counting({startCounter}) {
  return (
    <>
      <section id="counters">
        <div class="mt-5 d-flex justify-content-center">
          <div class="row  container">
            <div class="col-xl-12">
              <div class="row justify-content-center">
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 single-count-item-mb ">
                  <div className="single-count-background">
                    <img src={coutdown} alt="3d img"></img>
                  </div>
                  <div class="single-count-area">
                    <span class="counter"><CountUp redraw={startCounter} end={57} /></span>
                    <span>+</span>
                    <p>Active Client</p>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 single-count-item-mb">
                  <div className="single-count-background">
                    <img src={coutdown} alt="3d img"></img>
                  </div>
                  <div class="single-count-area">
                    <span class="counter"><CountUp redraw={startCounter} end={385} /></span>
                    <span>+</span>
                    <p>Project
                      Delivered</p>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 single-count-item-mb">
                  <div className="single-count-background">
                    <img src={coutdown} alt="3d img"></img>
                  </div>
                  <div class="single-count-area">
                    <span class="counter"><CountUp redraw={startCounter} end={11} /></span>
                    <span>+</span>
                    <p>Countries
                      Client</p>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 single-count-item-mb">
                  <div className="single-count-background">
                    <img src={coutdown} alt="3d img"></img>
                  </div>
                  <div class="single-count-area">
                    <span class="counter"><CountUp redraw={startCounter} end={30} /></span>
                    <span>+</span>
                    <p>Team
                      Members</p>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 single-count-item-mb">
                  <div className="single-count-background">
                    <img src={coutdown} alt="3d img"></img>
                  </div>
                  <div class="single-count-area">
                    <span class="counter"><CountUp redraw={startCounter} end={82.36} /></span>
                    <span>%</span>
                    <p>Retention Rate</p>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 single-count-item-mb">
                  <div className="single-count-background">
                    <img src={coutdown} alt="3d img"></img>
                  </div>
                  <div class="single-count-area">
                    <span class="counter"><CountUp redraw={startCounter} end={14} /></span>
                    <p>Ongoing Projects</p>
                  </div>
                </div>
              </div>




            </div>
          </div>

        </div>

      </section>
    </>
  );
}

export default counting;
