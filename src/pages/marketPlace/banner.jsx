import React, { useState, useEffect } from "react";
const banners = ["images/farmer.jpg", "images/farmer.jpg"]
function Banner() {


    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>

            <div className="rounded-lg h-55 ">
                <img src={banners[currentIndex]} alt="banner-img" className="rounded-lg" />

            </div>

        </>
    );
}



export default Banner;