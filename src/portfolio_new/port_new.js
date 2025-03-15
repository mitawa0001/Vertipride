import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./portmenu";
import { photos1 } from "./portmenu1";
import { photos2 } from "./portmenu2";

import { photos3 } from "./portmenu3";
import { photos4 } from "./portmenu4";

import { Box, Tab, Tabs, } from "@mui/material";

// import { Tabs, Tab, Content } from "./tab";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

function Port_new() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id,);
    if (index !== active) {
      setActive(index);
    }
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <>
      <React.Fragment>
        <Tabs className="w-100 text-center" value={currentTabIndex} onChange={handleTabChange}>
          <Tab label='Brochure Design' />
          <Tab label='Digital Background' />
          <Tab label='Mockups' />
          <Tab label='Packging' />
          <Tab label='Logo Designing' />
        </Tabs>

        {/* TAB 1 Contents */}
        {currentTabIndex === 0 && (
          <Box sx={{ p: 3 }}>

            <div>
              <div className="alpha container my-5 d-flex col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <Gallery photos={photos} onClick={openLightbox} />
              </div>
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </Box>
        )}

        {/* TAB 2 Contents */}
        {currentTabIndex === 1 && (
          <Box sx={{ p: 3 }}>

            <div>
              <div className="alpha container my-5 d-flex col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <Gallery photos={photos1} onClick={openLightbox} />
              </div>
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos1.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </Box>
        )}

        {/* TAB 3 Contents */}
        {currentTabIndex === 2 && (
          <Box sx={{ p: 3 }}>

            <div>
              <div className="alpha container my-5 d-flex col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <Gallery photos={photos2} onClick={openLightbox} />
              </div>
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos2.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </Box>
        )}

        {/* TAB 4 Contents */}
        {currentTabIndex === 3 && (
          <Box sx={{ p: 3 }}>

            <div>
              <div className="alpha container my-5 d-flex col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <Gallery photos={photos3} onClick={openLightbox} />
              </div>
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos3.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </Box>
        )}
        {/* TAB 5 Contents */}
        {currentTabIndex === 4 && (
          <Box sx={{ p: 3 }}>

            <div>
              <div className="alpha container my-5 d-flex col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <Gallery photos={photos4} onClick={openLightbox} />
              </div>
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos4.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </Box>
        )}
      </React.Fragment>

      {/* <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Content1
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Content2
        </Tab>
      </Tabs>
      <>

       
        <Content active={active === 0}>
          <div>
            <div className="alpha container my-5 d-flex col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <Gallery photos={photos} onClick={openLightbox} />
            </div>
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </Content>


        <Content active={active === 1}>
          <div>
            <div className="alpha container my-5 d-flex col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <Gallery photos={photos1} onClick={openLightbox} />
            </div>
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos1.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </Content>
      </> */}


    </>
  )
}

export default Port_new