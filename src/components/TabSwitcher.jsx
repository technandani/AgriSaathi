import React, { useState } from 'react';

const TabSwitcher = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);


  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? 'border-green-700 text-green-800 border-b-2'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div>{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default TabSwitcher;