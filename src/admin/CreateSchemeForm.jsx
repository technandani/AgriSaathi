import React, { useState } from "react";
import axios from "axios";

const CreateSchemeForm = ({ onSchemeCreated }) => {
  const [formData, setFormData] = useState({
    scheme_name: "",
    short_description: "",
    long_description: "",
    scheme_type: "",
    eligibility_criteria: "",
    necessary_documents: [""],
    benefits_of_scheme: "",
    application_process: "",
    apply_button_url: "",
    documentation_url: "",
    start_date: "",
    end_date: "",
    state_specific: false,
    applicable_states: [""],
    tags: [""],
    logo: null,
    images: [],
  });

  const [previewLogo, setPreviewLogo] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "logo") {
      setFormData((prev) => ({ ...prev, logo: files[0] }));
      setPreviewLogo(URL.createObjectURL(files[0]));
    } else if (name === "images") {
      setFormData((prev) => ({ ...prev, images: Array.from(files) }));
      setPreviewImages(Array.from(files).map((file) => URL.createObjectURL(file)));
    }
  };

  // Handle dynamic fields
  const handleDynamicChange = (field, index, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData((prev) => ({ ...prev, [field]: updatedArray }));
  };

  const addDynamicField = (field) => {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const removeDynamicField = (field, index) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData((prev) => ({ ...prev, [field]: updatedArray }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        formData[key].forEach((file) => data.append("images", file));
      } else if (Array.isArray(formData[key])) {
        data.append(key, JSON.stringify(formData[key]));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post("http://localhost:5000/scheme/createScheme", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Scheme created successfully!");
      onSchemeCreated(response.data.data);
    } catch (error) {
      console.error("Error creating scheme:", error);
      alert("Failed to create scheme.");
    }
  };

  return (
    <div className="overflow-y-auto max-h-[90vh] bg-white p-6 rounded shadow-lg w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Create New Scheme</h2>

        {/* General Information */}
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-lg">General Information</legend>
          <input
            type="text"
            name="scheme_name"
            value={formData.scheme_name}
            onChange={handleChange}
            placeholder="Scheme Name *"
            className="w-full p-2 border rounded"
            required
          />
          <select
            name="scheme_type"
            value={formData.scheme_type}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            required
          >
            <option value="">Select Scheme Type *</option>
            <option value="Subsidy">Subsidy</option>
            <option value="Loan">Loan</option>
            <option value="Training">Training</option>
            <option value="Insurance">Insurance</option>
          </select>
          <div className="flex gap-4 mt-2">
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
            <input
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
          </div>
        </fieldset>

        {/* Dynamic Fields */}
        {["necessary_documents", "tags", "applicable_states"].map((field) => (
          <fieldset key={field} className="border p-4 rounded-md">
            <legend className="font-semibold text-lg capitalize">{field.replace("_", " ")}</legend>
            {formData[field].map((value, index) => (
              <div key={index} className="flex items-center gap-4 mb-2">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleDynamicChange(field, index, e.target.value)}
                  placeholder={`Enter ${field.replace("_", " ")}`}
                  className="w-full p-2 border rounded"
                />
                <button
                  type="button"
                  onClick={() => removeDynamicField(field, index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addDynamicField(field)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Add {field.replace("_", " ")}
            </button>
          </fieldset>
        ))}

        {/* File Uploads */}
        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold text-lg">Uploads</legend>
          <label className="block mt-2">
            Upload Logo:
            <input type="file" name="logo" onChange={handleFileChange} className="block mt-2" />
          </label>
          {previewLogo && (
            <img src={previewLogo} alt="Logo Preview" className="mt-2 w-32 h-32 object-cover rounded" />
          )}
          <label className="block mt-4">
            Upload Images:
            <input type="file" name="images" multiple onChange={handleFileChange} className="block mt-2" />
          </label>
          <div className="flex space-x-4 mt-2">
            {previewImages.map((url, index) => (
              <img key={index} src={url} alt={`Preview ${index + 1}`} className="w-20 h-20 object-cover rounded" />
            ))}
          </div>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Create Scheme
        </button>
      </form>
    </div>
  );
};

export default CreateSchemeForm;