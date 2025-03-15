import React from "react";
import CalendlyWidget from "../component/calendlyWidget";
import { Helmet } from "react-helmet";
import WithLayout from "../component/Layout";

import emp_member01 from "../image/Employee Pics/Abhishek_Android_Developer.png";
import emp_member02 from "../image/Employee Pics//Ashwini_Deshmukh_Backend_Developer.png";
import emp_member03 from "../image/Employee Pics/Darshana_wankhade_Backend_Developer.png";
import emp_member04 from "../image/Employee Pics/Deveshre_Wagadre-Business Development executive.png";
import emp_member05 from "../image/Employee Pics/Gunjan _Chaturvedi_HR_Executive.png";
import emp_member06 from "../image/Employee Pics/Pranjali Dharmale - HR Manager.png";
import emp_member07 from "../image/Employee Pics/Pratiksha - Product Manager.png";
import emp_member08 from "../image/Employee Pics/Sarika_kate_Backend_Developer.png";
import emp_member09 from "../image/Employee Pics/Vaibhav - Business Analyst.png";

function about_team() {
  const dynamicTitle = "Team Member";
  const dynamicDescription = "Vertipride team member list";

  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
      </Helmet>

      <div class="about-hero-banner">
        <div class="about-hero-text">
          <h1>Know more about our Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
            viverra leo.{" "}
          </p>
        </div>
      </div>
      <div class="team-area">
        <div class="container">
          <div class="row">
            {/* <!--section heading--> */}
            <div class="col-xl-12 col-lg-12 col-md-12">
              <div class="section-heading-3">
                <h4> meet the leaders</h4>
                <h3>the best team</h3>
              </div>
            </div>
          </div>
          <div class="row">
            {/* <!--single team--> */}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 margin-top-sb-30">
              <div class="single-team">
                <div class="team-image">
                  <img src={emp_member07} alt=""></img>
                </div>
                <div class="person-name">
                  <h4>Pratiksha </h4>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>
            {/* <!--single team--> */}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="single-team">
                <div class="team-image">
                  <img src={emp_member06} alt=""></img>
                </div>
                <div class="person-name">
                  <h4>Pranjali Dharmale</h4>
                  <p>HR Manager</p>
                </div>
              </div>
            </div>

                      {/* <!--single team--> */}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="single-team">
                <div class="team-image">
                  <img src={emp_member01} alt=""></img>
                </div>
                <div class="person-name">
                  <h4>Abhishek</h4>
                  <p>Android Developer</p>
                </div>
              </div>
            </div>
            {/* <!--single team--> */}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="single-team">
                <div class="team-image">
                  <img src={emp_member02} alt=""></img>
                </div>
                <div class="person-name">
                  <h4>Ashwini_Deshmukh</h4>
                  <p>Backend Developer</p>
                </div>
              </div>
            </div>
            {/* <!--single team--> */}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="single-team">
                <div class="team-image">
                  <img src={emp_member03} alt=""></img>
                </div>
                <div class="person-name">
                  <h4>Darshana wankhade</h4>
                  <p>Backend Developer</p>
                </div>
              </div>
            </div>
            {/* <!--single team--> */}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="single-team">
                <div class="team-image">
                  <img src={emp_member04} alt=""></img>
                </div>
                <div class="person-name">
                  <h4>Deveshre Wagadre</h4>
                  <p>Business Development executive</p>
                </div>
              </div>
            </div>
            {/* <!--single team--> */}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="single-team">
                <div class="team-image">
                  <img src={emp_member05} alt=""></img>
                </div>
                <div class="person-name">
                  <h4>Gunjan Chaturvedi_</h4>
                  <p>HR Executive</p>
                </div>
              </div>
            </div>
            {/* <!--single team--> */}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="single-team">
                <div class="team-image">
                  <img src={emp_member08} alt=""></img>
                </div>
                <div class="person-name">
                  <h4>Sarika Kate</h4>
                  <p>Backend Developer</p>
                </div>
              </div>
            </div>
            {/* <!--single team--> */}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="single-team">
                <div class="team-image">
                  <img src={emp_member09} alt=""></img>
                </div>
                <div class="person-name">
                  <h4>Vaibhav</h4>
                  <p>Business Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="callto-action">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-7">
              <div class="callto-action-text">
                <h5>
                  Like what you see,{" "}
                  <span>Lets discuss your requirements properly”</span>{" "}
                </h5>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-5">
              <div class="callto-action-btn">
                <CalendlyWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WithLayout(about_team);
