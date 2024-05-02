import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function SliderThree() {

  const items = [
    {
      imgSrc: "/assets/img/bg-image/ai-new-home.jpg",
      title: `Supercharge with <br><span style="color:#2ac8fd" >Artificial Intelligence</span>`,
      description:
        "Explore the forefront of innovation with our AI development <br> expertise.Transforming possibilities into tangible achievements.",
      color: "#2ac8fd"
    },
    {
      imgSrc: "/assets/img/bg-image/Gaming-barb (1).jpg",
      title: `Forge Your Gaming <br> <span style="color:#13c4a1">Legacy</span>`,
      description:
        "Immerse Yourself in the Art of Gaming Creation Let's <br> Build Your Next Masterpiece Together!",
      color: "#13c4a1"

    },
    {
      imgSrc: "/assets/img/bg-image/metaverse.jpg",
      title: `Redefining Experiences <br> <span style="color:#2ac8fd">with XR</span>`,
      description:
        "Discover augmented and virtual realities with our <br> expert XR development.",
      color: "#2ac8fd"
    },
    {
      imgSrc: "/assets/img/bg-image/technonogy.jpg",
      title: `Leading Blockchain <br> <span style="color:#13c4a1">Solutions Await</span>`,
      description:
        "Revolutionize with Cutting-Edge Blockchain Solutions<br>Unleash the power of innovation for your business.",
      color: "#13c4a1"
    },
  ];
  const [itemActive, setItemActive] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);
  const countItem = items.length;

  const handleNext = () => {
    setItemActive((prev) => (prev + 1) % countItem);
    sliderRef.current.classList.add("next");
  };

  const handlePrev = () => {
    setItemActive((prev) => (prev - 1 + countItem) % countItem);
    sliderRef.current.classList.add("prev");
  };

  const selectItem = (index) => {
    setItemActive(index);
  };

  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(handleNext, 6000);
    return () => clearInterval(intervalRef.current);
  }, [handleNext]);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleAnimationEnd = () => {
      if (slider.classList.contains("next")) {
        slider.classList.remove("next");
      } else if (slider.classList.contains("prev")) {
        slider.classList.remove("prev");
      }
    };

    slider.addEventListener("animationend", handleAnimationEnd, { once: true });

    return () => {
      slider.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [itemActive]);

  return (
    <>
      <div className="slider" style={{ background: "black" }} ref={sliderRef} >
        <div className="list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === itemActive ? "active" : ""}`}
            >
              <img src={item.imgSrc} alt={`Slide ${index}`} />
              <div className="auto-container content">
                <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                <Link className="default-btn" style={{ backgroundColor: item.color }}>Explore</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === itemActive ? "active" : ""}`}
              onClick={() => selectItem(index)}
            >
              <img src={item.imgSrc} alt={`Thumbnail ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default SliderThree;
