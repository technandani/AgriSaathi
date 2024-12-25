import React, { useState, useEffect } from "react";
import axios from "axios";

const SchemeFormModal = ({ scheme, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    scheme_name: "",
    short_description: "",
    long_description: "",
    scheme_type: "",
    eligibility_criteria: "",
    necessary_documents: "",
    benefits_of_scheme: "",
    application_process: "",
    apply_button_url: "",
    documentation_url: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    if (scheme) {
      setFormData(scheme);
    }
  }, [scheme]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (scheme) {
        await axios.put(`http://localhost:5000/scheme/updateScheme/${scheme.scheme_id}`, formData);
      } else {
        await axios.post("http://localhost:5000/scheme/createScheme", formData);
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Error saving scheme:", error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-96 shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4">
          {scheme ? "Edit Scheme" : "Add Scheme"}
        </h2>
        {Object.keys(formData).map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium capitalize">{key}</label>
            <input
              type="text"
              name={key}
              value={formData[key] || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchemeFormModal;