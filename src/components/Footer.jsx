import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-13 space-x-9">
        {/* Logo and Company info */}
        <img src="/" alt="EllyPix Studios Logo" />
        <p className="font-bold text-lg text-white" style={{ fontFamily: 'sans-serif'}}>
          Capturing every moment through the lens
        </p>

        {/* social media links */}
        <div className="flex flex-col space-y-3 mt-6">
          <p className="mb-8 text-white font-bold">Follow Us </p>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24"
              aria-hidden="true"
            >
              {/* LINKEDIN */}
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {/* TWITTER  */}
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.96a4.48 4.48 0 00-.61 2.27c0 1.56.8 2.93 2.02 3.74A4.48 4.48 0 01.96 6v.06c0 2.18 1.55 4 3.8 4.42a4.52 4.52 0 01-2.04.08c.57 1.78 2.23 3.08 4.2 3.12A9.05 9.05 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.87 12.84-12.84 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" />
            </svg>
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {/* INSTAGRAM  */}
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13-.38a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
            </svg>
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.75 2h2.25a1 1 0 0 1 1 1v2.25a4.75 4.75 0 0 0 4.75 4.75h1a1 1 0 0 1 1 1v2.25a1 1 0 0 1-1 1h-1.25a8.25 8.25 0 1 1-8.25-8.25h1a1 1 0 0 1 1 1v2.25a1 1 0 0 1-1 1h-1a4.75 4.75 0 1 0 4.75 4.75V3a1 1 0 0 1 1-1z" />
            </svg>
          </a>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="/about/"
                className="text-gray-400 hover:text-white text-sm"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact/"
                className="text-gray-400 hover:text-white text-sm"
              >
                Contact Us
              </a>
            </li>
             <li>
              <a
                href="/privacy-policy/"
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </a>
            </li>
             <li>
              <a
                href="/terms-of-service/"
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-5 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} EllyPix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
