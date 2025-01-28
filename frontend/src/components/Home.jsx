import React from 'react'

const Home = () => {
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
          <span>Sign in</span>
          <img src="/user.png" alt="User Icon" className="ml-2 w-10 h-10 rounded-full"/>
        </div>
      </li>
    </ul>
  </nav>
</section>

   
    <section className="bg-gray-200 text-gray-900 pt-40 pb-10">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">Transforming Construction Waste into Sustainable Solutions</h1>
        <h2 className="text-2xl mb-20">AI-powered waste categorization, recycling solutions, and digital marketplace</h2>
        <a href="#abstract" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-xl">Get Started</a>
      </div>
    </section>  
    <section id="abstract" className="bg-amber-50 text-gray-950 font-bold py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Abstract</h2>
        <p className="text-xl mb-4">
          Discover how we are solving the waste management problem in construction. Our platform leverages AI technology to categorize construction waste, provide recycling solutions, and create a digital marketplace for buying and selling recycled materials. By integrating advanced recycling methods and geolocation-based services, we help locate nearby recycling centers for proper waste disposal and management. Join us in our mission to create a sustainable future in the construction industry.
        </p>
        <a href="https://drive.google.com/drive/folders/YOUR_DRIVE_LINK" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read Full Abstract</a>
      </div>
    </section>
    
    <section id="features" className="bg-gray-100 text-gray-800 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
        <div className="space-y-10">

          {/* Waste Classifier - Center Aligned, Left Aligned Image */}
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
            <img src="https://static.vecteezy.com/system/resources/previews/000/354/597/original/waste-vector-icon.jpg" alt="Waste Classifier" className="w-16 h-16 mr-4 md:mr-8"/>
            <div>
              <h3 className="text-2xl font-bold">Waste Classifier</h3>
              <p className="text-lg">Our AI-powered waste classifier accurately categorizes various types of construction waste, enabling efficient sorting and recycling.</p>
            </div>
          </div>

          {/* Digital Marketplace - Center Aligned, Right Aligned Image */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-right">
            <img src="https://static.vecteezy.com/system/resources/previews/000/354/597/original/waste-vector-icon.jpg" alt="Digital Marketplace" className="w-16 h-16 ml-4 md:ml-8"/>
            <div>
              <h3 className="text-2xl font-bold">Digital Marketplace</h3>
              <p className="text-lg">Buy and sell recycled construction materials through our structured digital marketplace, promoting sustainable practices.</p>
            </div>
          </div>

          {/* Recycling Facility Finder - Center Aligned, Left Aligned Image */}
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
            <img src="https://static.vecteezy.com/system/resources/previews/000/354/597/original/waste-vector-icon.jpg" alt="Recycling Facility Finder" className="w-16 h-16 mr-4 md:mr-8"/>
            <div>
              <h3 className="text-2xl font-bold">Recycling Facility Finder</h3>
              <p className="text-lg">Locate nearby recycling centers using our geolocation-based service, ensuring proper waste disposal and management.</p>
            </div>
          </div>

          {/* Environmental Impact Tracker - Center Aligned, Right Aligned Image */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-right">
            <img src="https://static.vecteezy.com/system/resources/previews/000/354/597/original/waste-vector-icon.jpg" alt="Environmental Impact Tracker" className="w-16 h-16 ml-4 md:ml-8"/>
            <div>
              <h3 className="text-2xl font-bold">Environmental Impact Tracker</h3>
              <p className="text-lg">Track the environmental impact of your waste management efforts, including metrics like tons of waste recycled and carbon emissions reduced.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="statistics" className="bg-white text-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-5xl font-bold text-blue-500 mr-4 md:mr-8">123,456</div>
            <div className="text-xl">Tons of Waste Recycled</div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-5xl font-bold text-blue-500 mr-4 md:mr-8">789,000 kg</div>
            <div className="text-xl">Carbon Emissions Reduced</div>
          </div>
        </div>
      </div>
    </section>


    <section id="testimonials" className="bg-gray-100 text-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-xl italic">"Using this platform, we've significantly improved our waste management practices. It's a game-changer!"</p>
            <p className="mt-4 text-lg font-bold">- ABC Constructions</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-xl italic">"The AI-powered waste categorization has made our recycling process so much more efficient."</p>
            <p className="mt-4 text-lg font-bold">- XYZ Industries</p>
          </div>
        </div>
      </div>
    </section>

   
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-6 mb-4">
          <li><a href="/classifier" className="hover:underline">Classifier</a></li>
          <li><a href="/marketplace" className="hover:underline">Marketplace</a></li>
          <li><a href="/recycling-facilities" className="hover:underline">Recycling Facilities</a></li>
          <li><a href="/about-us" className="hover:underline">About Us</a></li>
        </ul>
        <div className="mb-4">
          <p>Contact us: info@cdwastemanagement.com</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Home
