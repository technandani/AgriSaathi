import React from 'react'

const SafetyInstraction = () => {
  return (
    <div className=" p-3 w-full h-full rounded-lg">
      <div className="w-full h-full flex flex-col justify-evenly p-3 rounded-lg">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center font-serif">Lightning Safety</h2>
          <p className="mb-1 text-sm text-center">
            Essential tips to stay safe before and during lightning strikes.
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-2 font-serif">Before Lightning</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Stay informed using weather apps or radios.</li>
            <li>Secure loose objects like tools and furniture.</li>
            <li>Unplug electronics to avoid power surges.</li>
            <li>Stay indoors or in a fully enclosed vehicle.</li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-2 font-serif">During Lightning</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Seek shelter immediately; stay in a car or indoors.</li>
            <li>Minimize risks: Avoid windows, doors, and electronics.</li>
            <li>Stay away from water, pools, and lakes.</li>
            <li>Avoid open fields and seek low-lying areas.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SafetyInstraction
