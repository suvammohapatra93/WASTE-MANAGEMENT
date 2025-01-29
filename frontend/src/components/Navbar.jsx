import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <section className="bg-gray-800 text-white py-4 fixed top-0 w-full">
  <nav className="container mx-auto flex justify-between items-center ">
    <div className="text-2xl font-bold">C&D Waste Management System</div>
    <ul className="flex space-x-6 my-1.5">
      <li className="hover:bg-gray-700 hover:bg-opacity-50 py-2 px-2 rounded">
        <a href="/classifier">Classifier</a>
      </li>
      <li className="hover:bg-gray-700 hover:bg-opacity-50 py-2 px-2 rounded">
        <a href="/marketplace">Marketplace</a>
      </li>
      <li className="hover:bg-gray-700 hover:bg-opacity-50 py-2 px-2 rounded">
        <a href="/recycling-facilities">Recycling Facilities</a>
      </li>
      <li className="hover:bg-gray-700 hover:bg-opacity-50 py-2 px-2 rounded mr-10">
        <a href="/about-us">About Us</a>
      </li>
      <li>
        <div className="flex items-center bg-amber-800 text-white mr-10 px-2 py-1 rounded-full">
          <Link to='/signup'>Signup</Link>
          <img src="/user.png" alt="User Icon" className="ml-2 w-10 h-10 rounded-full"/>
        </div>
      </li>
    </ul>
  </nav>
</section>
    </>
  )
}

export default Navbar
