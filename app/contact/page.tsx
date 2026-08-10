"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import PageHeader from "@/components/common/page-header";
import SectionTitle from "@/components/common/section-title";
import CustomButton from "@/components/common/custom-button";
import MapsLocation from "@/components/common/maps-location";
import Link from "next/link";
import useWow from "@/hooks/use-wow";
import { contactInfo, socialLinks } from "@/data"; // Pulling data from your source
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  useWow();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setStatus("Thank you. Your message has been prepared; configure a secure form endpoint before deploying this form.");
  };

  return (
    <div className="wow fadeInDown">
      <PageHeader
        title="Contact Us"
        description="Together, let's promote inclusion, equity, and opportunity for all. Reach out to our team today."
        className="bg-[url(/assets/img/contact-bg.jpg)]"
      />

      <section id="contact" className="relative scroll-mt-20 overflow-hidden">
        <div className="flex w-full flex-col overflow-hidden lg:flex-row">

          {/* Left Column: GPS & Contact Info */}
          <div className="flex w-full flex-col bg-neutral-100 lg:w-1/2">
            {/* Top Half: Map View */}
            <div className="flex h-[350px] lg:h-[450px] w-full items-end justify-end">
              <MapsLocation />
            </div>

            {/* Bottom Half: Contact Details Cards */}
            <div className="font-heading grid flex-1 grid-cols-1 gap-8 border-t p-8 text-black sm:grid-cols-2 lg:p-12">
              <div>
                <span className="text-accent mb-4 flex w-fit items-center gap-4 border-b-2 border-accent/20 text-center text-lg font-extrabold uppercase tracking-widest">
                  Phone
                </span>
                <div className="flex flex-col gap-2">
                  {contactInfo.phones?.map((p, i) => (
                    <Link
                      key={i}
                      href={`tel:${p}`}
                      className="hover:text-accent w-fit text-lg font-bold transition duration-300"
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-accent mb-4 flex w-fit items-center gap-4 border-b-2 border-accent/20 text-center text-lg font-extrabold uppercase tracking-widest">
                  Email
                </span>
                <div className="flex flex-col gap-2">
                  {contactInfo.emails?.map((e, i) => (
                    <Link
                      key={i}
                      href={`mailto:${e}`}
                      className="hover:text-accent break-all text-sm font-bold transition duration-300 md:text-base"
                    >
                      {e}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <span className="text-accent mb-4 flex w-fit items-center gap-4 border-b-2 border-accent/20 text-center text-lg font-extrabold uppercase tracking-widest">
                  Physical Location
                </span>
                <div className="flex flex-col gap-2 text-lg font-semibold leading-relaxed">
                  {contactInfo.locations?.map((l, i) => (
                    <span key={i}>{l}</span>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <span className="text-accent mb-4 flex w-fit items-center gap-4 border-b-2 border-accent/20 text-center text-lg font-extrabold uppercase tracking-widest">
                  Follow Our Movement
                </span>
                <div className="flex w-fit gap-6 pt-2">
                  {socialLinks?.map((s, i) => (
                    <Link
                      key={i}
                      title={s.title}
                      href={s.link}
                      target="_blank"
                      className="text-gray-600 transition-colors hover:text-accent"
                    >
                      <s.icon size={24} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full bg-white p-8 lg:w-1/2 lg:p-20 flex flex-col justify-center">
            <div className="mb-12">
              <SectionTitle title="Get in Touch" />
              <h2 className="wow fadeInDown mt-4 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl font-heading">
                Fearless Advocacy. <br />
                <span className="text-accent">Strategic Action.</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="font-heading space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label htmlFor="contact-fullName" className="sr-only">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  id="contact-fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="focus:border-accent w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-5 py-4 transition duration-300 focus:outline-none focus:bg-white"
                />
                <label htmlFor="contact-email" className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="focus:border-accent w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-5 py-4 transition duration-300 focus:outline-none focus:bg-white"
                />
              </div>

              <label htmlFor="contact-message" className="sr-only">How can we help you make a difference?</label>
              <textarea
                name="message"
                id="contact-message"
                placeholder="How can we help you make a difference? *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="focus:border-accent w-full resize-none rounded-xl border-2 border-gray-100 bg-gray-50 px-5 py-4 transition duration-300 focus:outline-none focus:bg-white"
              ></textarea>

              <div className="pt-4">
                <CustomButton
                  type="submit"
                  label="SEND MESSAGE"
                  className="w-full md:w-auto px-12 py-5 shadow-lg shadow-accent/20"
                />
              </div>
              <p aria-live="polite" className="text-sm">{status}</p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="bg-secondary py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 rounded-[3rem] bg-accent p-10 md:p-16">
            <div className="text-white max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="fill-white w-6 h-6" />
                <span className="font-bold tracking-widest uppercase text-sm">Join the movement</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight mb-6">
                Be the Change Ethiopia Needs
              </h2>
              <p className="text-white/80 text-lg">
                Whether you want to volunteer your skills, partner on a project, or support our causes,
                there is a place for you in the Inclusive Growth story.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/donate">
                <button className="flex items-center justify-center gap-3 bg-white text-accent font-bold px-8 py-4 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-xl group cursor-pointer">
                  DONATE NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/programs">
                <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-accent transition-all duration-300  cursor-pointer">
                  OUR PROGRAMS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
