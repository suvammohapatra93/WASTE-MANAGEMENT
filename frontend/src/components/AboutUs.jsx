import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* About Us Content */}
            <section className="bg-gray-200 text-gray-900 pt-24 pb-10 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl bg-white p-8 rounded-2xl shadow-lg mx-auto">
                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            About Us
                        </h1>
                        <p className="text-gray-600 text-lg mb-4">
                            At C&D Waste Connect, we are dedicated to revolutionizing construction waste management with smart, AI-powered solutions. Our mission is to minimize environmental impact by promoting efficient recycling and reuse of construction and demolition materials.
                        </p>

                        {/* Our Vision Section */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Our Vision</h2>
                        <p className="text-gray-600 text-lg mt-2">
                            Our vision is to lead the construction industry towards zero waste by leveraging AI-driven solutions for a greener, more sustainable future.
                        </p>

                        {/* Why Choose Us Section */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Why Choose Us</h2>
                        <p className="text-gray-600 text-lg mt-2">
                            We combine AI-driven innovation with sustainable practices to help construction companies reduce waste, cut costs, and build a greener future.
                        </p>

                        {/* Our Commitment Section */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Our Commitment</h2>
                        <p className="text-gray-600 text-lg mt-2">
                            We are committed to driving a zero-waste future by empowering businesses with smart, sustainable waste management solutions.
                        </p>

                        {/* Join Our Mission Section */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Join Our Mission</h2>
                        <p className="text-gray-600 text-lg mt-2">
                            Be a part of the movement towards a cleaner planet—partner with us to make sustainable construction the new industry standard.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Our Target</h2>
                        <p className="text-gray-600 text-lg mt-2">
                            We aim to empower small and medium-sized construction companies with cutting-edge tools to manage their waste effectively, reduce landfill use, and foster a sustainable circular economy.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Waste Recycled</h2>
                        <p className="text-gray-600 text-lg mt-2">
                            Our platform has successfully facilitated the recycling of thousands of tons of construction waste, significantly reducing carbon emissions and paving the way for a greener future.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Contact Us</h2>
                        <p className="text-gray-600 text-lg mt-2">
                            For inquiries or partnerships, please reach out to us. Together, we can build a sustainable future.
                        </p>
                        <div className="mt-4 text-center">
                            <a
                                href="mailto:info@cdwasteconnect.com"
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                info@cdwasteconnect.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-10">
                <div className="container mx-auto text-center">
                    <ul className="flex justify-center space-x-6 mb-4">
                        <li>
                            <a href="/classifier" className="hover:underline">
                                Classifier
                            </a>
                        </li>
                        <li>
                            <a href="/marketplace" className="hover:underline">
                                Marketplace
                            </a>
                        </li>
                        <li>
                            <a href="/recycling-facilities" className="hover:underline">
                                Recycling Facilities
                            </a>
                        </li>
                        <li>
                            <a href="/about-us" className="hover:underline">
                                About Us
                            </a>
                        </li>
                    </ul>
                    <div className="mb-4">
                        <p>Contact us: info@cdwastemanagement.com</p>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:underline">
                            Facebook
                        </a>
                        <a href="#" className="hover:underline">
                            Twitter
                        </a>
                        <a href="#" className="hover:underline">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default AboutUs;
