"use client";

import PageHeader from "@/components/common/page-header";
import useWow from "@/hooks/use-wow";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function OverviewPage() {
    useWow();

    return (
        <div className="wow fadeInDown">
            <PageHeader
                title="General Overview"
                description="Discover who we are, why we exist, and the core focus driving our holistic approach to inclusion."
                className="bg-[url(/assets/img/overview-bg.jpg)]"
            />

            <section className="wow fadeInUp my-20 px-4 sm:px-[30px] lg:px-[50px]">
                <div className="mx-auto max-w-7xl">
                    {/* Who We Are Section */}
                    <div className="mb-24 flex flex-col items-center gap-12 lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-accent mb-6 text-sm font-bold tracking-widest uppercase">
                                Who We Are
                            </h2>
                            <h3 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl font-heading">
                                A dynamic, mission-driven organization.
                            </h3>
                            <p className="mb-4 text-lg leading-relaxed text-gray-600">
                                Inclusive Growth (IG) is a local, non-governmental organization (NGO) established in 2025 and headquartered in Addis Ababa, Ethiopia. The organization has been officially registered and granted legal Identity by the Authority for Civil Society Organizations (ACSO) of the Federal Democratic Republic of Ethiopia.
                            </p>
                            <p className="mb-4 text-lg leading-relaxed text-gray-600">
                                IG is dedicated to building a truly inclusive society where women and persons with disabilities (PWD) are empowered to participate, contribute, and thrive. We believe that the unique strengths and perspectives of these individuals are not just to be accommodated, but are vital catalysts for a more innovative, forward-looking society.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/assets/img/gallery_img_2.jpg"
                                alt="Who We Are - Inclusive Growth"
                                width={800}
                                height={600}
                                className="w-full rounded-2xl object-cover shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Why We Exist Section */}
                    <div className="mb-24 rounded-3xl bg-gray-50 p-10 md:p-16 lg:p-20">
                        <div className="mx-auto max-w-4xl text-center">
                            <h2 className="text-accent mb-6 text-sm font-bold tracking-widest uppercase">
                                Why We Exist
                            </h2>
                            <h3 className="mb-8 text-3xl font-bold md:text-4xl font-heading">
                                Opportunity is not equally distributed — but potential is.
                            </h3>
                            <p className="mb-6 text-lg leading-relaxed text-gray-600">
                                Across communities, women, persons with disabilities, and youth continue to face systemic barriers that limit access to education, employment, leadership, healthcare, and innovation. We were founded to dismantle those barriers and to ensure that inclusion is not a privilege for a few, but a right for all.
                            </p>
                            <p className="text-xl font-medium italic text-gray-800">
                                &quot;Guided by the principle ‘Nothing About Us, Without Us,’ we exist to transform systems so that those historically excluded become central drivers of development.&quot;
                            </p>
                        </div>
                    </div>

                    {/* Our Core Focus Section */}
                    <div className="mx-auto max-w-5xl">
                        <div className="mb-12 text-center">
                            <h2 className="text-accent mb-4 text-sm font-bold tracking-widest uppercase">
                                Our Core Focus
                            </h2>
                            <h3 className="text-3xl font-bold md:text-4xl">
                                Building Inclusive Systems
                            </h3>
                            <p className="mt-4 text-lg text-gray-600">
                                Through locally grounded action and globally informed thinking, IG advances practical, scalable, and sustainable approaches that turn inclusion into measurable impact.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {[
                                "Capacity building and leadership development",
                                "Inclusive economic empowerment",
                                "Policy advocacy",
                                "Research and innovation",
                                "Community-driven solutions"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                                    <CheckCircle2 className="text-accent h-6 w-6 shrink-0" />
                                    <p className="text-lg font-medium text-gray-800">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}