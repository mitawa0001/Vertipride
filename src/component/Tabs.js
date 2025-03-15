import React, { Component } from "react";
import TabsList from "../menu/TabsList";
import TabsItem from "../menu/TabsItem";
import TabsContent from "../menu/TabsContent";
import { TabsStyle } from "../menu/TabsStyle";

import Atom from "../image/atom.png"
import Digital from "../image/digital-marketing-white.png"
import Ill from "../image/illustration.png"
import Mobile from "../image/mobile-white'.png"
// import Android from "../image/and-white.png"


import react from "../image/tech-work/react.png"
import angular from "../image/tech-work/angular.png"
import php from "../image/tech-work/php.png"
import node from "../image/tech-work/node.jpg"
import net from "../image/tech-work/net.png"
import java from "../image/tech-work/java.png"

import Android from "../image/tech-work/android.png"
import aftereffects from "../image/tech-work/after-effects.png"
import figma from "../image/tech-work/figma.png"
import flutter from "../image/tech-work/flutter.png.webp"
import ionic from "../image/tech-work/ionic.png.webp"
// import ionic from "../image/tech-work/ionic.png.webp"
import kotlin from "../image/tech-work/kotlin-1.png.webp"
// import magento from "../image/tech-work/magento.png"
import xd from "../image/tech-work/xd.png"
import ios from "../image/tech-work/IOS_logo.svg.png"



import wordpress from "../image/tech-work/Wordpress_Blue_logo.png"
import sopify from "../image/tech-work/shopify.png"
import magento from "../image/tech-work/magento.png"
import opencart from "../image/tech-work/opencart.png"
import id from "../image/tech-work/id.webp"
import ps from "../image/tech-work/ps.webp"
import ai from "../image/tech-work/ai.webp"








class Tabs extends Component {
    state = {
        selectedTab: 0
    };

    handleClick = itemIndex => {
        this.setState({
            selectedTab: itemIndex
        });
    };

    render() {
        let data = [
            { id: 1, title: "Full Stack Development" },
            { id: 2, title: "Mobile" },
            { id: 3, title: "CMS & E-Commerce" },
            { id: 4, title: "Designing" },

        ];
        return (
            <section>
                <TabsStyle>
                    <TabsList className="container">
                        {data.map((item, index) => (
                            <TabsItem
                                handleClick={this.handleClick.bind(this, index)}
                                className={this.state.selectedTab === index ? "active" : ""}
                                key={item.id}
                            >
                                {item.title}
                            </TabsItem>
                        ))}
                    </TabsList>
                    <div className="container tabs__content-wrapper">
                        <TabsContent tabId="0" activeTab={this.state.selectedTab}>
                            <div class="tabs-content">
                                <div class="tabsBody">
                                    <div class="first_ring">
                                        <div className="imgCenter center rounded-circle">
                                            <img className="atom-filter-img" src={react} alt="react img"></img>
                                        </div>
                                    </div>
                                    <div class="second_ring">
                                        <div className="imgCenter left rounded-circle">
                                            <img className="atom-filter-img" src={angular} alt="react img"></img>

                                        </div>
                                        <div className="imgCenter right rounded-circle">
                                            <img className="atom-filter-img" src={php} alt="react img"></img>

                                        </div>
                                    </div>
                                    <div class="third_ring">
                                        <div className="imgCenter-11 left rounded-circle">
                                            <img className="atom-filter-img" src={node} alt="react img"></img>

                                        </div>
                                        <div className="imgCenter-11 center rounded-circle">
                                            <img className="atom-filter-img" src={net} alt="react img"></img>
                                        </div>
                                        <div className="imgCenter-11 right rounded-circle">
                                            <img className="atom-filter-img" src={java} alt="react img"></img>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent tabId="1" activeTab={this.state.selectedTab}>
                            <div class="tabs-content">
                                <div class="tabsBody">
                                    <div class="first_ring">
                                        <div className="imgCenter center rounded-circle">
                                            <img className="atom-filter-img" src={react} alt="react img"></img>
                                        </div>
                                    </div>
                                    <div class="second_ring">
                                        <div className="imgCenter left rounded-circle">
                                            <img className="atom-filter-img" src={ios} alt="react img"></img>

                                        </div>
                                        <div className="imgCenter right rounded-circle">
                                            <img className="atom-filter-img" src={flutter} alt="react img"></img>

                                        </div>
                                    </div>
                                    <div class="third_ring">
                                        <div className="imgCenter-11 left rounded-circle">
                                            <img className="atom-filter-img" src={Android} alt="react img"></img>

                                        </div>
                                        {/* <div className="imgCenter-11 center rounded-circle">
                                            <img className="atom-filter-img" src={Digital} alt="react img"></img>
                                        </div> */}
                                        <div className="imgCenter-11 right rounded-circle">
                                            <img className="atom-filter-img" src={kotlin} alt="react img"></img>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent tabId="2" activeTab={this.state.selectedTab}>
                            <div class="tabs-content">
                                <div class="tabsBody">
                                    <div class="first_ring">
                                        <div className="imgCenter center rounded-circle">
                                            <img className="atom-filter-img" src={wordpress} alt="react img"></img>
                                        </div>
                                    </div>
                                    <div class="second_ring">
                                        {/* <div className="imgCenter left rounded-circle">

                                            <img className="atom-filter-img" src={magento} alt="react img"></img>

                                        </div> */}
                                        {/* <div className="imgCenter right rounded-circle">
                                            <img className="atom-filter-img" src={Android} alt="react img"></img>

                                        </div> */}
                                    </div>
                                    <div class="third_ring">
                                        <div className="imgCenter-11 left rounded-circle">
                                            <img className="atom-filter-img" src={sopify} alt="react img"></img>
                                        </div>
                                        {/* <div className="imgCenter-11 center rounded-circle"><img className="atom-filter-img" src={Ill} alt="react img"></img></div> */}
                                        <div className="imgCenter-11 right rounded-circle">
                                            <img className="atom-filter-img" src={opencart} alt="react img"></img>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent tabId="3" activeTab={this.state.selectedTab}>
                            <div class="tabs-content">
                                <div class="tabsBody">
                                    <div class="first_ring">
                                        <div className="imgCenter center rounded-circle">
                                            <img className="atom-filter-img" src={xd} alt="react img"></img>
                                        </div>
                                    </div>
                                    <div class="second_ring">
                                        <div className="imgCenter left rounded-circle">
                                            <img className="atom-filter-img" src={figma} alt="react img"></img>

                                        </div>
                                        <div className="imgCenter right rounded-circle">
                                            <img className="atom-filter-img" src={id} alt="react img"></img>

                                        </div>
                                    </div>
                                    <div class="third_ring">
                                        <div className="imgCenter-11 left rounded-circle">
                                            <img className="atom-filter-img" src={aftereffects} alt="react img"></img>

                                        </div>
                                        <div className="imgCenter-11 center rounded-circle"><img className="atom-filter-img" src={ps} alt="react img"></img></div>
                                        <div className="imgCenter-11 right rounded-circle">

                                            <img className="atom-filter-img" src={ai} alt="react img"></img>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </TabsStyle>
            </section>

        );
    }
}

export default Tabs;
