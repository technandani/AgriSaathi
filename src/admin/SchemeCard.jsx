import React, { useState } from "react";

const SchemeCard = ({ scheme, onDelete, onEdit }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-green-100 p-4 rounded shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {scheme.logo ? (
            <img src={scheme.logo} alt="Logo" className="w-16 h-16 rounded" />
          ) : (
            <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
              No Logo
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold">{scheme.scheme_name}</h3>
            <p className="text-gray-600">{scheme.short_description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => onEdit(scheme)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => onDelete(scheme.scheme_id)}
          >
            Delete
          </button>
        </div>
      </div>
      {expanded && (
        <div className="mt-4">
          <p><strong>Type:</strong> {scheme.scheme_type}</p>
          <p><strong>Eligibility:</strong> {scheme.eligibility_criteria}</p>
          <p><strong>Benefits:</strong> {scheme.benefits_of_scheme}</p>
          <p><strong>Application Process:</strong> {scheme.application_process}</p>
          <p><strong>Applicable States:</strong> {scheme.applicable_states.join(", ")}</p>
          <p><strong>Start Date:</strong> {new Date(scheme.start_date).toLocaleDateString()}</p>
          <p><strong>End Date:</strong> {new Date(scheme.end_date).toLocaleDateString()}</p>
          {scheme.images.length > 0 && (
            <div className="flex gap-2 mt-2">
              {scheme.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Scheme Image ${index + 1}`}
                  className="w-20 h-20 rounded"
                />
              ))}
            </div>
          )}
        </div>
      )}
      <button
        className="mt-2 text-blue-500 underline"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default SchemeCard;