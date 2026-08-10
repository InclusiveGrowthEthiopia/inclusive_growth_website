"use client";

import PageHeader from "@/components/common/page-header";
import useWow from "@/hooks/use-wow";
import {
    Eye,
    Target,
    Users,
    Zap,
    Scale,
    Lightbulb,
    Handshake,
    ShieldCheck,
    Leaf,
    PersonStanding,
    DoorOpen,
    Layers
} from "lucide-react";

export default function MVVPage() {
    useWow();

    const coreValues = [
        { icon: Users, title: "Inclusion", text: "Every individual deserves a place at the table; diversity enriches society." },
        { icon: Zap, title: "Empowerment", text: "Building confidence, skills, and opportunities to thrive independently." },
        { icon: Scale, title: "Equity & Justice", text: "Ensuring fairness by dismantling systemic barriers and addressing inequalities." },
        { icon: Lightbulb, title: "Innovation", text: "Using creativity and technology to find solutions for accessibility and participation." },
        { icon: Handshake, title: "Partnership", text: "Working with communities, government, the private sector, and international allies." },
        { icon: ShieldCheck, title: "Integrity", text: "Acting with honesty, transparency, and accountability in all our work." },
        { icon: Leaf, title: "Sustainability", text: "Building lasting impact through resilient and environmentally responsible approaches." },
        { icon: PersonStanding, title: "Self-Initiative", text: "It is the inherent drive within IG to act responsibly and embody readiness." },
        { icon: DoorOpen, title: "Accessibility", text: "Work relentlessly and collaboratively to create environments and services that are accessible." },
        { icon: Layers, title: "Intersectionality", text: "IG acknowledges and addresses the intersections of disability with gender, age, socioeconomic status, etc. " }
    ];

    return (
        <div className="wow fadeInDown">
            <PageHeader
                title="Mission, Vision & Values"
                description="The fundamental beliefs that guide our culture, our actions, and our commitment to a truly inclusive Ethiopian society."
                className="bg-[url(/assets/img/mvv_bg.jpg)]"
            />

            <section className="wow fadeInUp my-20 px-4 sm:px-[30px] lg:px-[50px]">
                <div className="mx-auto max-w-7xl">

                    {/* Mission & Vision Cards */}
                    <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="group relative overflow-hidden rounded-3xl bg-gray-50 p-10 transition-shadow md:p-14">
                            <div className="bg-accent/10 text-accent mb-8 inline-flex rounded-2xl p-4">
                                <Target className="h-12 w-12 stroke-[1.5]" />
                            </div>
                            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
                            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
                                We are dedicated to building an inclusive Ethiopian society by dismantling barriers and empowering women and Youth with disabilities through ensuring equitable access to healthcare, education, technology, economy, skill development, and creative platforms. Our 7-I-CHESTE Pillars are implemented through the I-CREATE S³ Engine to turn inclusion into lasting community change.
                            </p>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-gray-50 p-10 transition-shadow md:p-14">
                            <div className="text-secondary bg-secondary/10 mb-8 inline-flex rounded-2xl p-4">
                                <Eye className="h-12 w-12 stroke-[1.5]" />
                            </div>
                            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Vision</h2>
                            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
                                To see a truly inclusive society where the unique strengths of women and Youth with disabilities are recognized as catalysts for a more equitable and innovative nation.
                            </p>
                        </div>
                    </div>

                    {/* Core Values Section */}
                    <div className="text-center">
                        <h2 className="text-accent mb-4 text-sm font-bold tracking-widest uppercase">Our DNA</h2>
                        <h3 className="mb-16 text-3xl font-bold md:text-4xl lg:text-5xl">
                            10 Core Values that Guide Us
                        </h3>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            {coreValues.map((value, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-100 transition-transform duration-300 hover:-translate-y-2">
                                        <value.icon className="text-accent h-8 w-8 stroke-[1.5]" />
                                    </div>
                                    <h4 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h4>
                                    <p className="text-sm leading-relaxed text-gray-600">{value.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
