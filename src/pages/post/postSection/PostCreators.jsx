import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";

const PostCreators = () => {
  const navigate = useNavigate();
  const handelCreatepost = () => {
    navigate('/posts/create-post');
  };
  return (
    <>
      <div className="flex  gap-4">
        <div className="createPost">
          <button className="creator w-[80px] flex items-center justify-center flex-col" onClick={handelCreatepost}>
            <div className="flex flex-col text-center items-center justify-center bg-gray-200 dark:bg-gray-700 h-[50px] w-[50px] rounded-[50%] border-[1px]">
            <FaPlus />
            </div>
            <div>Add Post</div>
          </button>
        </div>
        <div className="creators flex gap-4 overflow-scroll	">
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
          <div className="creator">
            <img
              src="images/user.jpg"
              alt=""
              className="h-[50px] rounded-[50%] border-[1px]"
            />
            <div>Creator</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCreators;
