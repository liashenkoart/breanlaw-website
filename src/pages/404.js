import * as React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  const headings = [
    {
      text_404: "404",
      heading: "Page not found",
      subheading: "Please check the URL in the address bar and try again.",
      button_text: "Go back home",
    },
  ]

  return (
    <Layout>
      <Seo title="404: Not found" />
      <>
        <div className="bg-stone-50 h-[89vh] min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="max-w-max mx-auto">
            <div className="sm:flex">
              {headings.map(item => (
                <>
                  <p className="text-4xl font-extrabold text-lime-500 sm:text-5xl">
                    {item.text_404}
                  </p>
                  <div className="sm:ml-6">
                    <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                        {item.heading}
                      </h1>
                      <p className="mt-1 text-base text-lime-500">
                        {item.subheading}
                      </p>
                    </div>
                    <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                      <Link
                        to="/"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-lime-500 hover:bg-lime-600 focus:outline-none"
                      >
                        {item.button_text}
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default NotFoundPage
