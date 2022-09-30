import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 bg-gray-700 mt-5 mb-5">
            <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">Style™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Productos</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Nosotros</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contacto</a>
                </li>
            </ul>
        </footer>
    </>
  )
}

export default Footer