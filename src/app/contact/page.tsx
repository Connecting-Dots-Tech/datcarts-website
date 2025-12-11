"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import PageTop from "../../components/PageTop";

interface FormData {
  name: string;
  number: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: GrLocation,
    title: "Our Location",
    content: "3/494G, Mettungal, Manakkapady, Ernakulam 683520",
    textColor: "text-gray-300",
    iconSize: "text-5xl", // Larger for location pin
  },
  {
    icon: BsTelephone,
    title: "Phone Number",
    content: (
      <>
        +91 987 144 4710
        <br />
        +91 954 405 6839
      </>
    ),
    textColor: "text-white",
    iconSize: "text-4xl",
  },
  {
    icon: MdOutlineEmail,
    title: "Email Us",
    content: "info@datcarts.com",
    textColor: "text-white",
    iconSize: "text-4xl",
  },
] as const;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, number, email, subject, message } = formData;

    if (!name || !number || !email || !subject || !message) {
      alert("Please fill out all fields before sending the message.");
      return;
    }

    const phoneNumber = "+919544056839";
    const text = `Name: ${name}%0AContact Number: ${number}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");

    // Reset form after submission
    setFormData({
      name: "",
      number: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <PageTop pageName="Contact Us" />

      <div className="flex w-full flex-col items-center gap-20 bg-[url('/assets/bgherodesk.svg')] bg-cover bg-center py-8 max-md:gap-8 max-md:py-4">
        {/* Header Section */}
        <div className="flex flex-col items-center px-4 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-lighter max-md:text-xl">
            Drop us a line!
          </h2>
          <p className="max-w-lg font-light leading-relaxed text-gray-light max-md:text-sm">
            Get in touch with us effortlessly through our Contact page! Whether
            you have questions, feedback, or need assistance, we're here to
            help. Reach out to us via the form or email.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-wrap items-center justify-center gap-8 px-4 max-md:gap-4">
          {CONTACT_INFO.map((info, idx) => (
            <div
              key={idx}
              className="flex h-50 w-60 flex-col items-center justify-center gap-3 rounded-lg border border-green/40 bg-[url('/assets/bgherodesk.svg')] bg-cover bg-center p-6 backdrop-blur-sm transition-all hover:border-green/60 hover:shadow-lg max-md:w-72"
            >
              <info.icon className={`${info.iconSize} text-gray-400`} />
              <h3 className="text-lg font-semibold text-white">{info.title}</h3>
              <p className={`text-center text-sm ${info.textColor}`}>
                {info.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-2xl rounded-xl border border-green/40 bg-[url('/assets/bgherodesk.svg')] bg-cover bg-center p-8 backdrop-blur-sm max-md:mx-4 max-md:w-[95%] max-md:p-6">
          {/* Form Header - Hidden on mobile */}
          <div className="mb-8 hidden items-center justify-center gap-6 bg-gray-700/50 p-4 md:flex">
            <div className="flex h-16 w-16 items-center justify-center">
              <MdOutlineEmail className="text-5xl text-white" />
            </div>
            <p className="text-sm font-light text-white">
              Reach out to us easily through the form! Share your inquiries,
              feedback, or requests, and we'll get back to you promptly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="flex-1 rounded border-none bg-white px-4 py-3 font-light text-gray-900 shadow-md outline-none transition-shadow focus:shadow-lg focus:ring-2 focus:ring-green"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="flex-1 rounded border-none bg-white px-4 py-3 font-light text-gray-900 shadow-md outline-none transition-shadow focus:shadow-lg focus:ring-2 focus:ring-green"
              />
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="flex-1 rounded border-none bg-white px-4 py-3 font-light text-gray-900 shadow-md outline-none transition-shadow focus:shadow-lg focus:ring-2 focus:ring-green"
              />
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Your Number"
                required
                className="flex-1 rounded border-none bg-white px-4 py-3 font-light text-gray-900 shadow-md outline-none transition-shadow focus:shadow-lg focus:ring-2 focus:ring-green"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
              required
              className="w-full resize-none rounded border-none bg-white px-4 py-3 font-light text-gray-900 shadow-md outline-none transition-shadow focus:shadow-lg focus:ring-2 focus:ring-green"
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-green px-4 py-3 font-medium text-white transition-all hover:bg-green/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-black"
            >
              Send your message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
