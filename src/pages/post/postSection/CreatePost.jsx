import React,{useState} from "react";
import Navbar from "../../../components/common/Navbar";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title:'',
    description:'',
    category:'',
    tags:[],
    postType:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value }));
  }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[88vh] overflow-scroll">
        <form
          action=""
          className="w-1/2 flex flex-col gap-4 p-4 rounded-xl shadow-inner bg-gray-200"
        >
          <h3 className="text-3xl font-semibold text-center mb-4">
            Create Post
          </h3>
          <div className="w-full text-lg">
            <label htmlFor="title">title</label>
            <input
              type="text"
              placeholder="Enter title..."
              onChange={handleChange}
              className="w-full h-10 px-2 rounded"
            />
          </div>
          <div className="w-full text-lg">
            <label htmlFor="description">description</label>
            <input
              type="text"
              placeholder="Enter description..."
              className="w-full h-10 px-2 rounded"
            />
          </div>
          <div className="w-full text-lg">
            <label htmlFor="category">category</label>
            <input
              type="text"
              placeholder="Enter category..."
              className="w-full h-10 px-2 rounded"
            />
          </div>
          <div className="w-full text-lg">
            <label htmlFor="tags">tags</label>
            <input
              type="text"
              placeholder="Enter tags..."
              className="w-full h-10 px-2 rounded"
            />
          </div>
          <div className="w-full text-lg">
            <label htmlFor="post type">post type</label>
            <select name="post type" id="" className="w-full h-10 px-2 rounded">
              <option value="Select option">Select option</option>
              <option value="Question">Question</option>
              <option value="Announcement">Announcement</option>
              <option value="Information">Information</option>
              <option value="Showcase">Showcase</option>
              <option value="Rent">Rent</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* <fieldset className="border p-4 rounded-md">
            <label className="block mt-4">
              Upload Images:
              <input
                type="file"
                name="images"
                multiple
                className="block mt-2"
              />
            </label>
            <div className="flex space-x-4 mt-2">
              {previewImages.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-20 h-20 object-cover rounded"
                />
              ))}
            </div>
          </fieldset> */}
          <button className="bg-green-900 h-10 text-white font-medium rounded">
            Create post
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
