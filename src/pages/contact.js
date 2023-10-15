/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
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
    <>
      <Layout>
        {/* Add this part for error popup */}
        <div className="w-[90%] max-w-[1240px] mx-auto flex flex-col md:flex-row md:justify-center gap-[40px] pb-[100px] pt-[140px] md:py-[140px]">
          <div className="flex flex-col gap-[24px] md:gap-[56px]">
            <div className="flex flex-col gap-[12px]">
              <p className="p-body-xl text-primary-300">
                Contact Us
              </p>
              <h3 className="h3-bold hidden md:block">{`Let's Collaborate!`}</h3>
              <p className="p-body-md text-grey text-[14px] md:text-black md:text-[16px]">Are you looking to partner with us or learn more about one of our projects? </p>
              <p className="p-body-md text-grey text-[14px] md:text-black md:text-[16px]">Please feel free to leave us a message or contact us via email.</p>
            </div>
            <div className="flex flex-col gap-[32px]">
              {/* Desktop Contact Details */}
              <div className="items-center gap-[32px] hidden md:flex">
                <div
                  className="w-[80px] h-[80px] rounded-[20px]
                  bg-primary-300/[0.12] flex items-center justify-center"
                >
                  <img src="/images/icons/phone.svg" alt="phone" />
                </div>
                <div className="flex flex-col">
                  <h5 className="h5-bold">Phone Number</h5>
                  <p className="p-body-lg text-grey">+1-415-510-0910</p>
                </div>
              </div>
              <div className="items-center gap-[32px] hidden md:flex">
                <div
                  className="w-[80px] h-[80px] rounded-[20px]
                  bg-primary-300/[0.12] flex items-center justify-center"
                >
                  <img src="/images/icons/mail.svg" alt="phone" />
                </div>
                <div className="flex flex-col">
                  <h5 className="h5-bold">Email Address</h5>
                  <p className="p-body-lg text-grey">taylor@tailoredfood.org</p>
                </div>
              </div>
              <div className="items-center gap-[32px] hidden md:flex">
                <div
                  className="w-[80px] h-[80px] rounded-[20px]
                  bg-primary-300/[0.12] flex items-center justify-center"
                >
                  <img src="/images/icons/linkedin-contact.svg" alt="phone" />
                </div>
                <div className="flex flex-col">
                  <h5 className="h5-bold">Follow Us on LinkedIn</h5>
                  <Link
                    href="https://www.linkedin.com/company/tailored-food"
                    className="p-body-lg text-primary-300"
                  >
                    linkedin.com/company/tailored-food
                  </Link>
                </div>
              </div>

              {/* Mobile Contact Details */}
              <div className="flex flex-col gap-[20px] md:hidden">
                <p className="text-[14px] text-black">Phone: <span className="text-primary-300">+1-415-510-0910</span></p>
                <p className="text-[14px] text-black">Email: <span className="text-primary-300">taylor@tailoredfood.com</span></p>
                <p className="text-[14px] text-black">Follow Us on LinkedIn: <a href="https://www.linkedin.com/company/tailored-food" className="text-primary-300">+1-415-510-0910</a></p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="w-full max-w-[638px] py-[24px] md:py-[64px] px-[16px] md:px-[50px] rounded-[6px] bg-greyStroke relative">
            {errorMsg && (
              <div className="absolute top-[8px] left-1/2 -translate-x-1/2 z-50">
                <div className="bg-yellow text-white font-bold px-4 py-2 rounded-lg shadow-md">
                  {errorMsg}
                </div>
              </div>
            )}
            {successMsg && (
              <div className="absolute top-[8px] left-1/2 -translate-x-1/2 z-50">
                <div className="bg-green text-white font-bold px-4 py-2 rounded-lg shadow-md">
                  {successMsg}
                </div>
              </div>
            )}
            <form className="w-full flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <p className="p-body-lg text-grey text-[14px] md:text-[20px]">Enter Name</p>
                <input
                  type="text"
                  className="input"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="p-body-lg text-grey text-[14px] md:text-[20px]">Your Email</p>
                <input
                  type="text"
                  className="input"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="p-body-lg text-grey text-[14px] md:text-[20px]">Message</p>
                <textarea
                  type="text"
                  className="input text-area"
                  rows={4}
                  name="message"
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary mx-auto" onClick={handleSubmit}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact;
