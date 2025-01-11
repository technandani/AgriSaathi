import React from 'react'

const TabSwitcher = () => {
  return (
    <>
       <div className="mt-14 px-8 border-gray-300 dark:border-gray-700">
          <ul className="flex space-x-8 text-gray-600 dark:text-gray-300 text-lg">
            <li className="pb-2 border-b-2 border-green-600 text-green-600 dark:text-green-400 cursor-pointer">
              Bio
            </li>
            <li className="hover:text-green-600 dark:hover:text-green-400 cursor-pointer">
              Crops
            </li>
            <li className="hover:text-green-600 dark:hover:text-green-400 cursor-pointer">
              Communities
            </li>
            <li className="hover:text-green-600 dark:hover:text-green-400 cursor-pointer">
              Posts
            </li>
            <li className="hover:text-green-600 dark:hover:text-green-400 cursor-pointer">
              Market Place
            </li>
          </ul>
        </div>
    </>
  )
}

export default TabSwitcher
