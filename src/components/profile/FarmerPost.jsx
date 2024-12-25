import React from 'react'

const FarmerPost = () => {
  return (
    <>
      <div className="px-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-900 dark:text-green-400">
            Posts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6,7,8,9,10].map((post) => (
              <div
                key={post}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src="https://via.placeholder.com/400x200"
                  alt={`Post ${post}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Organic farming techniques yielding high-quality produce.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default FarmerPost
