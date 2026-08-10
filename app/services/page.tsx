"use client";

import PageHeader from "@/components/common/page-header";
import React from "react";
import useWow from "@/hooks/use-wow";
import ServiceCard from "@/components/common/service-card";
import CustomButton from "@/components/common/custom-button";
import Link from "next/link";
import {
  Lightbulb,
  Palette,
  LifeBuoy,
  GraduationCap,
  UserPlus,
  MonitorSmartphone,
  TrendingUp,
  HeartPulse,
  Settings,
  Scale
} from "lucide-react";

// Pulling directly from the 10-I-CREATE S³ framework
const thematicServices = [
  {
    title: "Innovation & Research",
    description: "We believe inclusion requires innovation. IG generates evidence, pilots transformative solutions, and advances inclusive technologies that turn bold ideas into real, scalable impact for communities across Ethiopia and beyond.",
    icon: Lightbulb,
  },
  {
    title: "Creative Expression & Arts",
    description: "Women and persons with disabilities possess unique talents in arts. IG creates inclusive platforms for creative expression through music, visual arts, performance, and storytelling to promote empowerment and shift narratives.",
    icon: Palette,
  },
  {
    title: "Response (IEPR)",
    description: "Inclusive Emergency Preparedness and Response is an all-hazards, adaptive framework that ensures women and PWDs are prepared for, protected during, and supported after emergencies through rapid response and recovery interventions.",
    icon: LifeBuoy,
  },
  {
    title: "Education System",
    description: "Education is the foundation of empowerment. IG advocates for accessible, inclusive, and equitable education systems by promoting accessible teaching materials, supporting rural education, and integrating assistive technologies.",
    icon: GraduationCap,
  },
  {
    title: "Awareness & Skill Development",
    description: "We focus on building practical and employable skills. This includes vocational training, entrepreneurship development, leadership skills, and digital literacy to help individuals access opportunities and build self-reliance.",
    icon: UserPlus,
  },
  {
    title: "Technology & Digitalization",
    description: "We harness the power of technology and innovation to break barriers. This includes promoting assistive technologies, digital transformation, and bridging the digital divide so technology becomes a tool for connectivity.",
    icon: MonitorSmartphone,
  },
  {
    title: "Economy (Economic Empowerment)",
    description: "True inclusion requires economic independence. IG supports women and PWD in creating and sustaining livelihoods, building small enterprises, accessing finance, and participating in local and national markets.",
    icon: TrendingUp,
  },
  {
    title: "Sustainability (Healthcare)",
    description: "Accessible healthcare is a human right. IG advocates for inclusive health policies and works to ensure persons with disabilities and women receive adequate, affordable, and quality healthcare through capacity building.",
    icon: HeartPulse,
  },
  {
    title: "Skills (Capacity Building)",
    description: "At Inclusive Growth, we invest in people. We equip women, persons with disabilities, and youth with the skills, confidence, and leadership capacity to break barriers, drive innovation, and shape their own economic futures.",
    icon: Settings,
  },
  {
    title: "Systems (Policy Development)",
    description: "IG champions inclusive systems. We work to influence policies and decision-making processes so that gender equality, disability rights, and equitable opportunity are not optional — but foundational to national development.",
    icon: Scale,
  }
];

export default function ServicesPage() {
  useWow();

  return (
    <div className="wow fadeInDown">
      <PageHeader
        title="Our Services"
        description="We take a holistic approach to building an inclusive world through the 10-I-CREATE S³ methodology."
        className="bg-[url(/assets/img/service-bg.jpg)]"
      />

      <section className="wow fadeInUp mx-auto mb-20 max-w-7xl px-4 pt-20 sm:px-[30px] lg:px-[50px]">
        {/* Framework Intro Header */}
        <div className="mb-16 flex flex-col justify-between gap-10 md:flex-row md:items-center md:gap-4 text-center md:text-left">
          <div className="md:w-1/2">
            <span className="text-accent mb-2 block font-bold tracking-widest uppercase">10-I-CREATE S³</span>
            <h2 className="wow fadeInDown text-3xl leading-tight font-bold md:text-4xl lg:text-5xl font-heading">
              Pronounced: <br />
              <span className="text-accent">&quot;I Create Success&quot;</span>
            </h2>
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-lg leading-relaxed text-gray-600">
              Our services are built on the belief that everyone deserves the
              opportunity to thrive. By focusing on key areas like education,
              economic empowerment, and accessible technology, we provide holistic
              support that addresses the specific needs of women and persons with
              disabilities.
            </p>
            <p className="text-lg font-medium text-gray-900 border-l-4 border-accent pl-4 italic bg-gray-50 py-2">
              &quot;Where others see limitation, we see leadership. Where systems exclude, we redesign them.&quot;
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {thematicServices.map((s, i) => (
            <ServiceCard
              key={i}
              title={s.title}
              content={s.description}
              icon={<s.icon className="h-10 w-10 text-white" />}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="wow fadeInUp bg-linear-to-b from-white from-50% to-neutral-900 to-50% md:px-[5%] md:py-5">
        <div className="bg-secondary grid w-full items-center justify-between gap-6 p-8 md:grid-cols-2 md:rounded-4xl md:p-14 shadow-2xl">
          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Empowering Lives, Building Futures
            </h2>
            <p className="max-w-2xl text-lg text-white/90 md:text-xl leading-relaxed">
              Your support directly fuels our services, providing educational
              support, economic opportunities, and access to healthcare and
              technology for women and people with disabilities.
            </p>
          </div>
          <div className="flex w-full justify-center md:justify-end">
            <Link href="/donate">
              <CustomButton
                variant="secondary"
                label="Ready to make an impact?"
                className="bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 transition-colors"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}