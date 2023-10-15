/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Layout from '@/components/layout'
import Link from "next/link";

const Contact = () => {

  return (
    <>
      <Layout>
        <div className="w-full max-w-[1240px] mx-auto flex justify-center gap-[40px] py-[140px]">
          <div className="flex flex-col gap-[56px]">
            <div className="flex flex-col gap-[12px]">
              <p className="p-body-xl text-primary-300">
                Contact Us
              </p>
              <h3 className="h3-bold">{`Let's Collaborate!`}</h3> 
              <p className="p-body-md">Are you looking to partner with us or learn more about one of our projects? </p>
              <p className="p-body-md">Please feel free to leave us a message or contact us via email.</p>
            </div>
            <div className="flex flex-col gap-[32px]">
              <div className="flex items-center gap-[32px]">
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
              <div className="flex items-center gap-[32px]">
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
              <div className="flex items-center gap-[32px]">
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
            </div>
          </div>
          {/* Contact Form */}
          <div className="w-full max-w-[638px] py-[64px] px-[50px] rounded-[6px] bg-greyStroke">
            <form className="w-full flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <p className="p-body-lg text-grey">Enter Name</p>
                <input 
                  type="text"
                  className="input"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="p-body-lg text-grey">Your Email</p>
                <input 
                  type="text"
                  className="input"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="p-body-lg text-grey">Message</p>
                <textarea 
                  type="text"
                  className="input text-area"
                  rows={4}
                />
              </div>
              <button className="btn btn-outline-primary mx-auto">
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
