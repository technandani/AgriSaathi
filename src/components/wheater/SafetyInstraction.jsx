import React from 'react'

const SafetyInstraction = () => {
  return (
    <>
       <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-green-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Lightning Safety</h2>
          <p className="mb-4 text-sm text-gray-300 text-center">
            Essential tips to stay safe before and during lightning strikes.
          </p>
          <h3 className="text-lg font-semibold mb-2">Before Lightning</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Stay informed using weather apps or radios.</li>
            <li>Secure loose objects like tools and furniture.</li>
            <li>Unplug electronics to avoid power surges.</li>
            <li>Stay indoors or in a fully enclosed vehicle.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">During Lightning</h3>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            <li>Seek shelter immediately; stay in a car or indoors.</li>
            <li>Minimize risks: Avoid windows, doors, and electronics.</li>
            <li>Stay away from water, pools, and lakes.</li>
            <li>Avoid open fields and seek low-lying areas.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SafetyInstraction
