"use client";

import { toast } from "sonner";

const ContactUs = () => {
  // const handleSendMessage = () => {
  //   toast.success("Message sent successfully!");
  // };
  return (
    <div className="px-4 py-10 lg:px-20 bg-default-50">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-default-800">
          Contact Us
        </h1>
        <p className="mt-4 text-default-600">
          Sed semper nulla sed augue aliquam, vel tempor lorem laoreet. Morbi
          sodales eget erat vitae venenatis. Cras ac ultrices turpis, nec
          tristique sem.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid lg:grid-cols-3 gap-10 mb-10">
        {/* United States */}
        <div className="bg-default-200 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-default-800">Dhaka</h2>
          <p className="mt-2 text-default-600">Mirpur-1, Dhaka, Bangladesh</p>
          <p className="mt-2 text-default-600">+8801864668089</p>
          <p className="mt-2 text-default-600">anamulhaque9901@gmail.com</p>
        </div>

        {/* Netherlands */}
        <div className="bg-default-200 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-default-800">Narsingdi</h2>
          <p className="mt-2 text-default-600">Narsingdi, Dhaka, Bangladesh</p>
          <p className="mt-2 text-default-600">+8801864668089</p>
          <p className="mt-2 text-default-600">anamulhaque9901@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="bg-default-200 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-default-800">Follow us</h2>
          <div className="flex mt-4 gap-4">
            <a
              href="https://www.facebook.com/Anamul114"
              className="text-blue-600 hover:text-blue-700"
            >
              Facebook
            </a>
            <a
              href="https://github.com/Anamul9901"
              className="text-blue-500 hover:text-blue-600"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/anamul9901/"
              className="text-blue-700 hover:text-blue-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-default-200 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-default-800 mb-6">
          Send us a message
        </h2>
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-default-700 font-medium mb-2"
            >
              Your name *
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-default-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-default-700 font-medium mb-2"
            >
              Your email *
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-default-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-default-700 font-medium mb-2"
            >
              Subject *
            </label>
            <input
              id="subject"
              type="text"
              className="w-full border border-default-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Enter subject"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-default-700 font-medium mb-2"
            >
              Your message
            </label>
            <textarea
              id="message"
              className="w-full border border-default-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              rows={5}
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
