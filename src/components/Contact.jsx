import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { LocationEditIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-slate-800/80 py-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mt-15 mb-15">
          <h3 className="mb-5 font-bold text-2xl sm:text-3xl text-white">
            Contact Us
          </h3>
          <h2 className="text-3xl font-extrabold text-gray-400 sm:text-4xl mb-6">
            Visit Our Location
          </h2>
          <p className="text-xl sm:text-2xl">ANY DAY working Hours</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          {/* Email */}
          <div className="flex-1 flex items-start bg-gray-800 px-5 py-10 rounded-3xl">
            <div className="flex-shrink-0 rounded-md">
              <EnvelopeIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-7">
              <h3 className="text-lg font-medium text-gray-300 ml-7">
                Email Us
              </h3>
              <p>
                <a
                  href="mailto:liverpool@example.com"
                  className="text-gray-300 mt-3 hover:text-white"
                >
                  liverpool@example.com
                </a>
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex-1 flex items-start bg-gray-800 px-5 py-10 rounded-3xl">
            <div className="flex-shrink-0 rounded-md">
              <PhoneIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-7">
              <h3 className="text-lg font-medium text-gray-300">Call Us</h3>
              <p>
                <a
                  href="tel:+254123456789"
                  className="text-gray-300 mt-3 hover:text-white"
                >
                  +254 123456789
                </a>
              </p>
            </div>
          </div>

          {/* Headquarters */}
          <div className="flex-1 flex items-start bg-gray-800 px-5 py-10 rounded-3xl">
            <div className="flex-shrink-0 rounded-md">
              <LocationEditIcon className="h-7 w-8 text-white" />
            </div>
            <div className="ml-7">
              <h3 className="text-lg font-medium text-gray-300">
                Headquarters
              </h3>
              <p>
                <a
                  href="Eldoret"
                  className="text-gray-300 mt-3 hover:text-white"
                >
                  Eldoret, Metro Towers
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Area location. Google maps */}
        <div>
          <iframe
            title="Eldoret Metro Towers Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.73976246913!2d35.27279527398349!3d0.5153814636917629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781012cebf1b9f3%3A0x8a9813ce9900b3b5!2sEllypix%20studios!5e1!3m2!1sen!2ske!4v1749471747576!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="mt-7"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
