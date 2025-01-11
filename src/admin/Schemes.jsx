import React, { useState, useEffect } from "react";
import axios from "axios";
import SchemeCard from "./SchemeCard";
import EditSchemePopup from "./EditSchemePopup";
import CreateSchemeForm from "./CreateSchemeForm";
import Navbar from "../components/common/Navbar";

const Schemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false); 

  const fetchSchemes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/scheme/getSchemes");
      setSchemes(response.data.data);
    } catch (error) {
      console.error("Error fetching schemes:", error);
    }
  };

  const handleDelete = async (scheme_id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this scheme?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/scheme/deleteScheme/${scheme_id}`);
        setSchemes(schemes.filter((scheme) => scheme.scheme_id !== scheme_id));
      } catch (error) {
        console.error("Error deleting scheme:", error);
      }
    }
  };

  const handleEdit = (scheme) => {
    setSelectedScheme(scheme);
    setShowEditPopup(true);
  };

  const handleAddScheme = (newScheme) => {
    setSchemes([newScheme, ...schemes]);
    setShowCreatePopup(false);
  };

  useEffect(() => {
    fetchSchemes();
  }, []);

  return (
    <>
    <Navbar/>
      <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Schemes</h1>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setShowCreatePopup(true)}
        >
          + Add Scheme
        </button>
      </div>
      <div className="space-y-4">
        {schemes.map((scheme) => (
          <SchemeCard
            key={scheme.scheme_id}
            scheme={scheme}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
      {/* Edit Scheme Popup */}
      {showEditPopup && (
        <EditSchemePopup
          scheme={selectedScheme}
          onClose={() => setShowEditPopup(false)}
          onUpdate={(updatedScheme) => {
            setSchemes(
              schemes.map((scheme) =>
                scheme.scheme_id === updatedScheme.scheme_id ? updatedScheme : scheme
              )
            );
            setShowEditPopup(false);
          }}
        />
      )}
      {showCreatePopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
            <CreateSchemeForm
              onSchemeCreated={handleAddScheme}
            />
            <button
              className="text-red-500 mt-4"
              onClick={() => setShowCreatePopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Schemes;