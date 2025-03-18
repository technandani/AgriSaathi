import React, { useEffect, useRef, useState } from "react";

const data = [
  { img: "images/14.png", text: "Software Engineering" },
  // { img: "images/3.png", text: "Data Science" },
  // { img: "images/4.jpg", text: "Web Development" },
  // { img: "images/8.jpeg", text: "Cloud Computing" },
  // { img: "images/5.png", text: "Machine Learning" },
  // { img: "images/2.png", text: "Cybersecurity" },
  // { img: "images/9.jpg", text: "DevOps" },
  // { img: "images/1.png", text: "AI and Robotics" },
  // { img: "images/14.png", text: "Product Management" },
  // { img: "images/3.png", text: "Digital Marketing" },
  // { img: "images/4.jpg", text: "Blockchain Development" },
  // { img: "images/8.jpeg", text: "UI/UX Design" },
  // { img: "images/5.png", text: "Business Analytics" },
  // { img: "images/2.png", text: "Full Stack Development" },
  // { img: "images/4.jpg", text: "Data Engineering" },
  // { img: "images/1.png", text: "Game Development" },
  // { img: "images/14.png", text: "Cloud Solutions Architect" },
  // { img: "images/3.png", text: "Network Engineering" },
  // { img: "images/14.png", text: "Software Engineering" },
  // { img: "images/3.png", text: "Data Science" },
  // { img: "images/4.jpg", text: "Web Development" },
  // { img: "images/8.jpeg", text: "Cloud Computing" },
  // { img: "images/5.png", text: "Machine Learning" },
  // { img: "images/2.png", text: "Cybersecurity" },
  // { img: "images/9.jpg", text: "DevOps" },
  // { img: "images/1.png", text: "AI and Robotics" },
  // { img: "images/14.png", text: "Product Management" },
  // { img: "images/3.png", text: "Digital Marketing" },
  // { img: "images/4.jpg", text: "Blockchain Development" },
  // { img: "images/8.jpeg", text: "UI/UX Design" },
  // { img: "images/5.png", text: "Business Analytics" },
  // { img: "images/2.png", text: "Full Stack Development" },
  { img: "images/4.jpg", text: "Data Engineering" },
  { img: "images/1.png", text: "Game Development" },
  { img: "images/14.png", text: "Cloud Solutions Architect" },
  { img: "images/3.png", text: "Network Engineering" },
];

const Scrollbar = () => {
  const scrollContainer = useRef(null);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    const container = scrollContainer.current;
    let scrollSpeed = 0.85;

    const startScrolling = () => {
      if (scrolling) {
        requestAnimationFrame(() => {
          container.scrollLeft += scrollSpeed;
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0; 
          }
          startScrolling(); 
        });
      }
    };

    if (scrolling) {
      startScrolling();
    }

    return () => setScrolling(false); 
  }, [scrolling]);

  const handleMouseEnter = () => {
    setScrolling(false);
  };

  const handleMouseLeave = () => {
    setScrolling(true);
  };

  return (
    <div
      className="scroll-container overflow-scroll flex gap-x-8  items-center justify-center"
      ref={scrollContainer}
      style={{
        alignItems: "center",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="card w-fit flex text-white text-2xs h-12 items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} 
          style={{
            backgroundColor:'green',
            transition: "opacity 0.3s ease-in, transform 0.3s ease, backdrop-filter 0.3s ease", 
            borderRadius: "10px",
            textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)",
            fontWeight: "bold",
            padding: "5px 15px",
            cursor: "pointer",
            boxShadow: "0 0 5px grey",
            opacity: 0.7,
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 0 5px rgba(255, 255, 255, 0.2)";
            e.target.style.opacity = "1"; // Make the background image clearer on hover
            e.target.style.backdropFilter = "blur(0px)"; // Remove blur effect on hover
          }}
          // onMouseLeave={(e) => {
          //   e.target.style.transform = "scale(1)";
          //   e.target.style.boxShadow = "none";
          //   e.target.style.opacity = "0.7"; // Reset opacity when mouse leaves
          //   e.target.style.backdropFilter = "blur(8px)"; // Reset blur effect when mouse leaves
          // }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default Scrollbar;
