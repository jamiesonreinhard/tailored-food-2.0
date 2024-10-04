/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Layout from '@/components/layout'
import Link from "next/link";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [inquiry, setInquiry] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInquiry(Object.assign({}, inquiry, { [name]: value }));
  }

  const isEmailValid = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  const showError = (message) => {
    setErrorMsg(message);
    setTimeout(() => {
      setErrorMsg('');
    }, 5000);
  }

  const showSuccess = (message) => {
    setSuccessMsg(message);
    setTimeout(() => {
      setSuccessMsg('');
    }, 5000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = inquiry;

    if (!name || !email || !message) {
      showError("All fields are required!");
      return;
    }

    if (!isEmailValid(email)) {
      showError("Please enter a valid email!");
      return;
    }

    let templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }

    setInquiry({});
    if (emailjs.send('jamiesongmail', 'template_c1bv88l', templateParams, 'user_4zNk2mQBDz0bycg2XAfpw')) {
      showSuccess("Inquiry sent!")
    }
  }

  return (
    <Layout>
      <div className="flex flex-col min-h-screen pt-[80px] sm:pt-[140px]">
        <div className="flex-grow w-full py-16 sm:pb-24 bg-gradient-to-b from-white to-primary-50">
          <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between gap-[40px]">
            <div className="flex flex-col gap-[24px] md:gap-[56px] md:w-[45%]">
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-6 text-primary-500 leading-tight">Contact Us</h2>
                <h3 className="h3-bold hidden md:block text-primary-700">{`Let's Collaborate!`}</h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600">Are you looking to partner with us or learn more about one of our projects?</p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600">Please feel free to leave us a message or contact us via email.</p>
              </div>
              <div className="flex flex-col gap-[32px]">
                {/* Desktop Contact Details */}
                <div className="items-center gap-[32px] hidden md:flex">
                  <div className="w-[80px] h-[80px] rounded-[20px] bg-primary-300/[0.12] flex items-center justify-center">
                    <img src="/images/icons/phone.svg" alt="phone" />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-xl font-bold text-primary-500">Phone Number</h5>
                    <p className="text-lg text-gray-600">+1-415-510-0910</p>
                  </div>
                </div>
                <div className="items-center gap-[32px] hidden md:flex">
                  <div className="w-[80px] h-[80px] rounded-[20px] bg-primary-300/[0.12] flex items-center justify-center">
                    <img src="/images/icons/mail.svg" alt="email" />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-xl font-bold text-primary-500">Email Address</h5>
                    <p className="text-lg text-gray-600">taylor@tailoredfood.org</p>
                  </div>
                </div>
                <div className="items-center gap-[32px] hidden md:flex">
                  <div className="w-[80px] h-[80px] rounded-[20px] bg-primary-300/[0.12] flex items-center justify-center">
                    <img src="/images/icons/linkedin-contact.svg" alt="linkedin" />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-xl font-bold text-primary-500">Follow Us on LinkedIn</h5>
                    <Link
                      href="https://www.linkedin.com/company/tailored-food"
                      target="_blank"
                      className="text-lg text-primary-300 hover:underline"
                    >
                      linkedin.com/company/tailored-food
                    </Link>
                  </div>
                </div>

                {/* Mobile Contact Details */}
                <div className="flex flex-col gap-[20px] md:hidden">
                  <p className="text-base text-gray-600">Phone: <span className="text-primary-300">+1-415-510-0910</span></p>
                  <p className="text-base text-gray-600">Email: <span className="text-primary-300">taylor@tailoredfood.com</span></p>
                  <p className="text-base text-gray-600">Follow Us on LinkedIn: <a href="https://www.linkedin.com/company/tailored-food" className="text-primary-300 hover:underline">linkedin.com/company/tailored-food</a></p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="w-full md:w-[50%] py-[24px] md:py-[64px] px-[16px] md:px-[50px] rounded-[6px] bg-white shadow-md relative">
              {errorMsg && (
                <div className="absolute top-[8px] left-1/2 -translate-x-1/2 z-50">
                  <div className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg shadow-md">
                    {errorMsg}
                  </div>
                </div>
              )}
              {successMsg && (
                <div className="absolute top-[8px] left-1/2 -translate-x-1/2 z-50">
                  <div className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-md">
                    {successMsg}
                  </div>
                </div>
              )}
              <form className="w-full flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-lg text-gray-600">Enter Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-lg text-gray-600">Your Email</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-lg text-gray-600">Message</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
                    rows={4}
                    name="message"
                    onChange={handleChange}
                  />
                </div>
                <button 
                  className="btn bg-primary-500 text-white font-bold py-2 px-4 rounded-md hover:bg-primary-600 transition duration-300 mx-auto"
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;
