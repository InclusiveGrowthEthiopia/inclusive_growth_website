"use client";

import PageHeader from "@/components/common/page-header";
import useWow from "@/hooks/use-wow";
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";
import {
    Palette,
    ShieldAlert,
    BookOpen,
    Cpu,
    LineChart,
    Hospital
} from "lucide-react";
import { FaToolbox } from "react-icons/fa";

export default function ProgramsPage() {
    useWow();

    const programs = [
        {
            title: "Inclusive - Creative Arts & Expression",
            description: "Using music, visual arts, performance, and storytelling to promote empowerment, challenge stigma, and shift narratives by showcasing ability over disability.",
            icon: Palette,
            image: "/assets/img/program_img_2.jpg"
        },
        {
            title: "Inclusive - Health Care",
            description: "Advocating for inclusive health policies and ensuring persons with disabilities and women receive adequate, affordable, and quality healthcare through capacity building and community services.",
            icon: Hospital,
            image: "/assets/img/program_img_3.jpg"
        },
        {
            title: "Inclusive - Education Systems",
            description: "Advocating for accessible, inclusive, and equitable education systems by promoting accessible teaching materials, supporting rural education, and integrating assistive technologies.",
            icon: BookOpen,
            image: "/assets/img/program_img_4.jpg"
        },
        {
            title: "Inclusive - Skill Development and Awareness Creation",
            description: "Building practical and employable skills through vocational training, entrepreneurship development, leadership skills, and digital literacy to build self-reliance.",
            icon: FaToolbox,
            image: "/assets/img/program_img_1.jpg"
        },
        {
            title: "Inclusive - Emergency Preparedness & Response (IEPR)",
            description: "An all-hazards, adaptive framework ensuring that women and PWDs are prepared for, protected during, and supported after emergencies.",
            icon: ShieldAlert,
            image: "/assets/img/program_img_7.jpg"
        },
        {
            title: "Inclusive - Technology & Digitalization",
            description: "Harnessing the power of technology and innovation to break barriers by promoting assistive technologies and bridging the digital divide.",
            icon: Cpu,
            image: "/assets/img/program_img_5.jpg"
        },
        {
            title: "Inclusive - Economic Empowerment",
            description: "Supporting women and PWD in creating and sustaining livelihoods, building small enterprises, accessing finance, and participating in local and national markets.",
            icon: LineChart,
            image: "/assets/img/program_img_6.jpg"
        }
    ];

    return (
        <div className="wow fadeInDown">
            <PageHeader
                title="Thematic Program Areas"
                description="Our operations are driven by our core 7-I-CHESTE methodology, designed to address the root causes of exclusion."
                className="bg-[url(/assets/img/programs-bg.jpg)]"
            />

            <section className="py-20 px-4 sm:px-[30px] lg:px-[50px]">
                <div className="mx-auto max-w-7xl">
                    {/* Methodology Introduction */}
                    <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <SectionTitle title="Strategic Framework" />
                            <h2 className="text-4xl font-bold font-heading leading-tight">
                                The 7-I-CHESTE <br />
                                <span className="text-accent">Methodology</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Inclusive Growth takes a holistic and interconnected approach by focusing on seven key programs. We address the immediate needs of individuals while simultaneously influencing the systems that govern their lives.
                            </p>
                            <div className="p-6 bg-accent/5 rounded-md border-l-4 border-accent">
                                <p className="italic text-gray-800 font-medium">
                                    &quot;Inclusion is not a single act; it is the result of intentional,
                                    strategic, and continuous systemic redesign.&quot;
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/img/programs-bg.jpg"
                                alt="7-I-CHESTE Framework"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Programs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                            >
                                <div className="relative h-60 w-full overflow-hidden">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-sm">
                                        <program.icon className="w-6 h-6 text-accent" />
                                    </div>
                                </div>
                                <div className="p-8 grow">
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {program.description}
                                    </p>
                                </div>
                                <div className="px-8 pb-8">
                                    <div className="h-1 w-12 bg-accent/20 group-hover:w-full transition-all duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}