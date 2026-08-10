"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import SectionTitle from "../common/section-title";
import CustomButton from "../common/custom-button";
import MapsLocation from "../common/maps-location";
import Link from "next/link";
import { contactInfo, socialLinks } from "@/data";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setStatus("Thank you. Your message has been prepared; configure a secure form endpoint before deploying this form.");
  };

  return (
    <section id="contact" className="relative scroll-mt-20">
      <div className="flex w-full flex-col overflow-hidden lg:flex-row">
        {/* Left Column: Contact Info & GPS */}
        <div className="flex w-full flex-col bg-neutral-100 lg:w-1/2">
          {/* Top Half: GPS Location */}
          <div className="flex justify-end">
            <MapsLocation />
          </div>

          {/* Bottom Half: Contact Details */}
          <div className="font-heading grid flex-1 grid-cols-1 gap-10 border-t p-8 text-black lg:grid-cols-2 lg:flex-row lg:p-12">
            <div>
              <span className="text-accent mb-6 flex w-fit items-center gap-4 border-b text-center text-xl font-extrabold uppercase">
                Phone
              </span>
              <div className="flex flex-col gap-2 text-lg">
                {contactInfo.phones?.map((p, i) => (
                  <Link
                    key={i}
                    href={`tel:${p}`}
                    className="hover-underline-anim hover:text-accent w-fit text-lg font-semibold transition duration-300"
                  >
                    {p}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-accent mb-6 flex w-fit items-center gap-4 border-b text-center text-xl font-extrabold uppercase">
                Email
              </span>
              <div className="flex flex-col gap-2 text-lg">
                {contactInfo.emails?.map((e, i) => (
                  <Link
                    key={i}
                    href={`mailto:${e}`}
                    className="hover-underline-anim hover:text-accent w-fit text-lg font-semibold transition duration-300"
                  >
                    {e}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-accent mb-6 flex w-fit items-center gap-4 border-b text-center text-xl font-extrabold uppercase">
                Location
              </span>
              <div className="flex flex-col gap-2 text-lg">
                {contactInfo.locations?.map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-accent mb-6 flex w-fit items-center gap-4 border-b text-center text-xl font-extrabold uppercase">
                Social
              </span>
              <div className="grid w-fit grid-cols-5 gap-4">
                {socialLinks?.map((s, i) => (
                  <Link key={i} title={s.title} href={s.link} target="_blank" className="hover:text-accent">
                    <s.icon className="md:text-lg" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full p-8 lg:w-1/2 lg:p-12">
          <div className="mb-10">
            <SectionTitle title="Contact Us" />
            <h2 className="wow fadeInDown mt-2 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl font-heading">
              Get in Touch with Our Team
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="font-heading space-y-6">
            {/* Full Name Field */}
            <div>
              <label htmlFor="home-fullName" className="sr-only">Full name</label>
              <input
                type="text"
                id="home-fullName"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="focus:border-accent w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition duration-300 focus:outline-none"
              />
            </div>

            {/* Email Address Field */}
            <div>
              <label htmlFor="home-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="home-email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="focus:border-accent w-full rounded-lg border-2 border-gray-300 px-4 py-3 transition duration-300 focus:outline-none"
              />
            </div>

            {/* message Textarea */}
            <div>
              <label htmlFor="home-message" className="sr-only">Your message</label>
              <textarea
                id="home-message"
                name="message"
                placeholder="Write your message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="focus:border-accent w-full resize-none rounded-lg border-2 border-gray-300 px-4 py-3 transition duration-300 focus:outline-none"
              ></textarea>
            </div>

            <CustomButton type="submit" label={"Send Message"} />
            <p aria-live="polite" className="text-sm">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
