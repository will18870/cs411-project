import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MyCarousel() {
  return (
      <div className="w-full">
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            // stopOnLastSlide={true}
            transitionEffect={'fade'}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 focus:outline-none"
                        style={{ zIndex: "1" }}
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100"
                          height="100"
                          viewBox="0 0 24 24"
                          fill="#ffffff"
                      >
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                      </svg>
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 focus:outline-none"
                        style={{ zIndex: "1" }}
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100"
                          height="100"
                          viewBox="0 0 24 24"
                          fill="#ffffff"
                      >
                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" />
                      </svg>
                    </button>
                )
            }
        >
          <div>
            <img src={require("../Resources/poster1.jpeg")} alt={"1"} />
          </div>
          <div>
            <img src={require("../Resources/poster2.png")} alt={"2"} />
          </div>
          <div>
            <img src={require("../Resources/poster3.jpeg")} alt={"3"} />
          </div>
        </Carousel>
      </div>
  );
}
