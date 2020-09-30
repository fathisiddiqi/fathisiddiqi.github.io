import { Link } from "gatsby"
import React from "react"

const Service = () => {
  return (
    <div className="container px-4 py-4">
      <div className="flex">
        <Link
          to="/"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Back
        </Link>
      </div>
      <div className="container max-w-full mx-auto py-5 px-6">
        <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
          Harga
        </h1>
        <p className="text-center text-lg text-gray-700 mt-2 px-6">
          Untuk pembuatan setiap website dan web app. saya sediakan harga di
          bawah ini
          <a
            href="https://t.me/fathisiddiqi"
            className="mt-3 text-lg font-semibold 
	bg-indigo-800 w-2/12 text-indigo-100 rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700 mx-auto"
          >
            Hubungi saya
          </a>
        </p>

        <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

        <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
          <div className="relative block flex flex-col md:flex-row items-center">
            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4  pb-8">
              <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    Website
                  </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">
                    Rp. 500.000 - Rp. 3.000.000
                  </h2>
                  Website ini dapat digunakan untuk portofolio pribadi, info
                  lomba, blog dan lain-lain
                </div>

                <div className="flex flex-wrap mt-3 px-6">
                  <ul>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          L="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        Tech: GatsbyJS
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          L="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        Belum termasuk domain dan hosting
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          L="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        Isi menyesuaikan dengan kebutuhan customers
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
              <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                  Aplikasi Berbasis Web
                </h1>
                <h2 className="text-sm text-gray-500 text-center pb-6">
                  <span className="text-3xl"> {">"} Rp. 3.000.0000</span>
                </h2>
                Paket ini tersedia untuk pembuatan aplikasi berbasis web yang
                dapat digunakan untuk kebutuhan kantoran anda.
              </div>
              <div className="flex pl-12 justify-start sm:justify-start mt-3 pb-8">
                <ul>
                  <li className="flex items-center">
                    <div className="rounded-full p-2 fill-current text-green-700">
                      <svg
                        className="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        L="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">
                      Tech: ReactJS, NodeJS, ExpressJS, MongoDB
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <svg
                        className="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        L="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">
                      Belum termasuk domain dan VPS
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <svg
                        className="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        L="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">
                      Gratis monitoring selama 2 minggu
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4  pb-8">
              <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    E-Commerce
                  </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">
                    {">"} Rp. 5.000.000
                  </h2>
                  Paket ini tersedia untuk pembuatan e-commerce dan dapat
                  digunakan untuk UMKM atau bisnis skala kecil
                </div>
                <div className="flex flex-wrap mt-3 px-6">
                  <ul>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          L="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        Tech: Postgre, ExpressJS, ReactJS, Node.js
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          L="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        Belum termasuk domain dan VPS
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        Gratis monitoring selama 2 minggu
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
