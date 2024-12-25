import React, { useState } from "react";
import axios from "axios";

const EditSchemePopup = ({ scheme, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({ ...scheme });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/scheme/updateScheme/${formData.scheme_id}`,
        formData
      );
      onUpdate(response.data.data);
    } catch (error) {
      console.error("Error updating scheme:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Edit Scheme</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="scheme_name"
            value={formData.scheme_name}
            onChange={handleChange}
            placeholder="Scheme Name"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
            placeholder="Short Description"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="long_description"
            value={formData.long_description}
            onChange={handleChange}
            placeholder="Long Description"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="eligibility_criteria"
            value={formData.eligibility_criteria}
            onChange={handleChange}
            placeholder="Eligibility Criteria"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="benefits_of_scheme"
            value={formData.benefits_of_scheme}
            onChange={handleChange}
            placeholder="Benefits of Scheme"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="ml-2 bg-gray-300 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditSchemePopup;