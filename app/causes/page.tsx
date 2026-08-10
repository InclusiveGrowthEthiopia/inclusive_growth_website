"use client";

import PageHeader from "@/components/common/page-header";
import useWow from "@/hooks/use-wow";
import Image from "next/image";
import CustomButton from "@/components/common/custom-button";
import SectionTitle from "@/components/common/section-title";
import { Heart, ShieldAlert, Rocket, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CausesPage() {
    useWow();

    const causes = [
        {
            title: "Empowering Persons with Disabilities (PWDs)",
            problem: "PWDs in Ethiopia often face systemic barriers in education, employment, and social participation, leading to cycles of poverty and exclusion.",
            solution: "We provide assistive technologies, vocational training, and leadership development while advocating for policy changes that ensure 'Nothing About Us, Without Us' becomes a reality.",
            icon: ShieldAlert,
            tag: "Disability Rights",
            image: "/assets/img/cause_img_1.jpg",
            bg: "bg-blue-50",
            text: "text-blue-500"
        },
        {
            title: "Gender Equality & Women’s Leadership",
            problem: "Women continue to be underrepresented in decision-making roles and face disproportionate economic challenges, particularly in rural and semi-urban areas.",
            solution: "IG creates pathways for women through inclusive economic empowerment programs, entrepreneurship support, and leadership mentorship designed to shatter glass ceilings.",
            icon: Heart,
            tag: "Gender Equity",
            image: "/assets/img/cause_img_2.jpg",
            bg: "bg-rose-50",
            text: "text-rose-500"
        },
        {
            title: "Inclusive Emergency Preparedness (IEPR)",
            problem: "During crises and hazards, women and PWDs are often the last to be reached by communication systems and response efforts, leaving them uniquely vulnerable.",
            solution: "Our all-hazards framework ensures emergency response is adaptive and inclusive, protecting the most vulnerable during national or local crises.",
            icon: Globe,
            tag: "Crisis Response",
            image: "/assets/img/cause_img_3.jpg",
            bg: "bg-amber-50",
            text: "text-amber-500"
        }
    ];

    return (
        <div className="wow fadeInDown">
            <PageHeader
                title="Our Causes"
                description="We don't just see problems; we design structural solutions to build a society where barriers are challenged and voices are amplified."
                className="bg-[url(/assets/img/causes-bg.jpg)]"
            />

            {/* Philosophy Section */}
            <section className="py-20 px-4 sm:px-[30px] lg:px-[50px]">
                <div className="mx-auto max-w-4xl text-center">
                    <SectionTitle title="The Why" />
                    <h2 className="mt-4 text-3xl font-bold md:text-5xl font-heading">Where others see limitation, we see leadership.</h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Inclusive Growth was established to address the structural gaps that keep
                        talented individuals on the sidelines of development. Our causes are rooted in
                        the belief that inclusion is not charity—it is justice and sustainable development.
                    </p>
                </div>
            </section>

            {/* Main Causes List */}
            <section className="pb-24 px-4 sm:px-[30px] lg:px-[50px]">
                <div className="mx-auto max-w-7xl space-y-20">
                    {causes.map((cause, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-12 items-center lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image side with decorative element */}
                            <div className="w-full lg:w-1/2 relative">
                                <div className={`absolute -inset-4 ${cause.bg} rounded-3xl -z-10`} />
                                <Image
                                    src={cause.image}
                                    alt={cause.title}
                                    width={800}
                                    height={600}
                                    className="rounded-2xl shadow-xl w-full object-cover aspect-4/3"
                                />
                                <div className={cn("absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1 rounded-sm text-sm font-bold shadow-sm uppercase tracking-wider", cause.text)}>
                                    {cause.tag}
                                </div>
                            </div>

                            {/* Text side */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className={cn("bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center", cause.bg)}>
                                    <cause.icon className={cn("w-8 h-8", cause.text)} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold leading-tight">{cause.title}</h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2 italic">
                                            <span className="w-8 h-[2px] bg-red-400"></span> The Challenge
                                        </h4>
                                        <p className="mt-2 text-gray-600 text-lg">{cause.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2 italic">
                                            <span className="w-8 h-[2px] bg-green-500"></span> Our Approach
                                        </h4>
                                        <p className="mt-2 text-gray-600 text-lg">{cause.solution}</p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Link href="/contact">
                                        <button className="group flex items-center gap-3 font-bold text-accent transition-all hover:gap-5">
                                            SUPPORT THIS CAUSE <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Banner */}
            <section className="bg-neutral-900 py-20 px-4">
                <div className="mx-auto max-w-5xl text-center space-y-8">
                    <Rocket className="w-16 h-16 text-accent mx-auto" />
                    <h2 className="text-white text-3xl md:text-5xl font-bold">Ready to turn barriers into bridges?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Your support provides the resources needed to scale these programs and reach
                        underserved communities across the nation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={'/donate'}>
                            <CustomButton label="DONATE TO A CAUSE" variant="default" />
                        </Link>
                        <Link href={'/contact'}>
                            <CustomButton label="BECOME A VOLUNTEER" variant="secondary" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}