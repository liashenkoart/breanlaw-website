import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import $ from 'jquery';

const Homepage = () => {
  const [success, setSuccess] = useState(false)

  const [mailerState, setMailerState] = useState({
    FName: "",
    LName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  function handleStateChange(e) {
    setMailerState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const headings = [
    {
      h1_heading: "Get in touch",
      h1_desc:
        "If you’re looking for assistance with a trademark reach out and we can get you connect you with someone who can help.",
      h3_heading: "Describe what you need",
      h3_desc:
        "Give us an overview of who you are and what you need help with someone will be in touch within a business day or two.",
      success_message:
        "Your message has been received and we will be in touch shortly.",
    },
  ]

  const submitHandler = async (e) => {
    e.preventDefault();
    $.ajax({
      url: "https://hooks.zapier.com/hooks/catch/137948/brrfyst/",
      type: "post",
      data: $("#contactForm").serialize(),
      success: function () {
        setSuccess(true)
      }
    });
  };

  return (
    <Layout>
      <Seo title="Home" />
      <div className="bg-stone-50 overflow-hidden">
        <div className="bg-stone-50">
          <div className="py-4 lg:py-11">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              {headings.map(item => (
                <>
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-900 font-sans sm:text-5xl lg:text-6xl">
                    {item.h1_heading}
                  </h1>
                  <p className="mt-6 text-lg text-zinc-400 font-sans max-w-3xl">
                    {item.h1_desc}
                  </p>
                </>
              ))}
            </div>
          </div>
        </div>

        <section
          className="relative bg-stone-50 py-1"
          aria-labelledby="contact-heading"
        >
          <div
            className="absolute w-full h-1/2 bg-warm-gray-50"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-zinc-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div className="max-w-7xl pb-3 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-lime-500 to-lime-600 sm:px-10 xl:px-12 xl:py-6">
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {headings.map(item => (
                    <>
                      <h3 className="text-lg font-semibold text-stone-100 pt-6">
                        {item.h3_heading}
                      </h3>
                      <p className="text-base text-stone-100 font-sans max-w-3xl">
                        {item.h3_desc}
                      </p>
                    </>
                  ))}
                </div>

                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 shadow-md">
                  <h3 className="text-lg text-warm-gray-900 font-medium">
                    Send us a message
                  </h3>
                  <form
                    id="contactForm"
                    onSubmit={submitHandler}
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium font-sans text-warm-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          onChange={handleStateChange}
                          name="FName"
                          value={mailerState.FName}
                          autoComplete="given-name"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 font-sans border-2 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium font-sans text-warm-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          onChange={handleStateChange}
                          name="LName"
                          value={mailerState.LName}
                          autoComplete="family-name"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 font-sans border-2 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium font-sans text-warm-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          onChange={handleStateChange}
                          name="email"
                          value={mailerState.email}
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 font-sans border-2 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium font-sans text-warm-gray-900"
                        >
                          Phone
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm font-sans text-zinc-400"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          onChange={handleStateChange}
                          name="phone"
                          value={mailerState.phone}
                          type="tel"
                          autoComplete="phone"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 font-sans border-2 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium font-sans text-warm-gray-900"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          onChange={handleStateChange}
                          name="subject"
                          value={mailerState.subject}
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 font-sans border-2 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium font-sans text-warm-gray-900"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-sm font-sans text-zinc-400"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          onChange={handleStateChange}
                          name="message"
                          value={mailerState.message}
                          rows={4}
                          className="py-3 px-4 block w-full shadow text-warm-gray-900 font-sans border-2 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                          aria-describedby="message-max"

                          maxLength="500"
                          required
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        value="Send"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium font-sans text-white bg-lime-500 hover:bg-lime-600 focus:outline-none sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                    {success
                      ? headings.map(item => (
                        <p className="md:w-[30rem] sm:w-[25rem] w-[70vw] m-auto bg-lime-500 text-center sm:text-left  p-3 rounded-md text-sm font-bold tracking-tight text-white font-sans sm:text-base">
                          {item.success_message}
                        </p>
                      ))
                      : ""}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Homepage