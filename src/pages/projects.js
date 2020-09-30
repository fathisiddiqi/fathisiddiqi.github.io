import { Link } from "gatsby"
import React from "react"

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex">
        <Link
          to="/"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Back
        </Link>
      </div>
      <div className="flex mt-5">
        <div
          class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="font-semibold ml-2 mr-2 text-left flex-auto">
            The Real World Projects
          </span>
        </div>
      </div>
      <div className="flex mt-5 justify-around flex-wrap">
        <div className="flex mt-5">
          <div className="w-full max-w-xs rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Sistem PMB S2 Teknik Infomatika UII
              </div>
              <p className="text-gray-700 text-base">
                Sistem yang digunakan untuk proses penerimaan mahasiswa baru S2
                Informatika UII
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #backend-engineer
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #codeigniter
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #mysql
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-full max-w-xs rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Sistem Tesis S2 Teknik Infomatika UII
              </div>
              <p className="text-gray-700 text-base">
                Sistem yang digunakan untuk proses tesis mahasiswa S2
                Informatika UII
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #backend-engineer
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #codeigniter
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #mysql
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-full max-w-xs rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Sistem Data S2 Teknik Infomatika UII
              </div>
              <p className="text-gray-700 text-base">
                Sistem yang digunakan untuk manajemen users
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #backend-engineer
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #codeigniter
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #mysql
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #restfulApi
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-full max-w-xs rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Sistem Surat Disposisi FMIPA UII
              </div>
              <p className="text-gray-700 text-base">
                Aplikasi berbasis web yang digunakan untuk kepentingan surat
                disposisi
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #fullstack-engineer
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #codeigniter
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #mysql
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #bootstrap
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #jquery
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-full max-w-xs rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Muhammad Fitrah's Blog
              </div>
              <p className="text-gray-700 text-base">Website portofolio</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #wordpress
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #elementor
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-5 justify-between flex-wrap"></div>
    </div>
  )
}

export default Projects
