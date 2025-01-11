import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const PostCard = ({
  profilePic,
  creatorName,
  creatorSubTitle,
  title,
  description,
  media_type, 
  likes,
  view,
  share,
  comments,
  media_urls,
}) => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-green-50 dark:bg-[#121212] rounded-lg shadow-md min-w-64 lg:max-w-lg md:max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={profilePic}
            alt="User"
            className="w-10 h-10 rounded-full border-solid border-solid border-[#000] dark:border-[#fff] border"
          />
          <div>
            <h3 className="font-semibold text-lg">{creatorName}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{creatorSubTitle}</p>
          </div>
        </div>
        <button className="bg-green-700 hover:bg-green-600 px-4 py-1 rounded text-white">
          Follow
        </button>
      </div>

      <div className="rounded-lg overflow-hidden mb-4">
        {media_type === "Image" && media_urls.length > 1 ? (
          <Slider {...settings}>
            {media_urls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Post Media ${index + 1}`}
                className="w-full object-cover"
              />
            ))}
          </Slider>
        ) : media_type === "Image" && media_urls.length === 1 ? (
          <img src={media_urls[0]} alt="Post" className="w-full object-cover" />
        ) : media_type === "Video" ? (
          <video
            src={media_urls[0]}
            controls
            className="w-full"
            alt="Video Post"
          ></video>
        ) : (
          <div className="flex justify-center items-center text-gray-400">
          </div>
        )}
      </div>

      <h2 className="text-xl">{title}</h2>
      <p className="text-gray-800 dark:text-gray-200 text-sm mb-4">{description}</p>

      <div className="flex items-center justify-between border-t border-gray-700 pt-3">
        <div className="flex items-center justify-between w-full">
          <button className="flex items-center space-x-1 hover:text-green-600">
            <i className="fa-solid fa-thumbs-up"></i>
            <span>{likes} Like</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-600">
            <i className="fa-solid fa-comment-dots"></i>
            <span>{comments} Comment</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-600">
            <i className="fa-solid fa-share-nodes"></i>
            <span>{share} Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;