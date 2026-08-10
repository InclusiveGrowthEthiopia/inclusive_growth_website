"use client";

import PageHeader from "@/components/common/page-header";
import React from "react";
import useWow from "@/hooks/use-wow";
import SectionTitle from "@/components/common/section-title";
import {
    Banknote,
    Globe,
    HeartHandshake,
    ShieldCheck,
    Copy,
    CheckCircle2
} from "lucide-react";
import { useState } from "react";
import { accountDetails } from "@/data";

export default function DonationPage() {
    useWow();
    const [copied, setCopied] = useState(false);



    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="wow fadeInDown">
            <PageHeader
                title="Support Our Mission"
                description="Your contribution is more than a donation—it is an investment in a world where barriers are challenged and dignity rises."
                className="bg-[url(/assets/img/donation-bg.jpg)]"
            />

            <section className="py-20 px-4 sm:px-[30px] lg:px-[50px]">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

                        {/* Left Side: Emotional Appeal & Phrases */}
                        <div className="space-y-8">
                            <SectionTitle title="Make an Impact" />
                            <h2 className="text-3xl font-bold md:text-5xl leading-tight font-heading">
                                Opportunity for All, <br />
                                <span className="text-accent">Barriers to None.</span>
                            </h2>

                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    At Inclusive Growth, we believe that inclusion is not charity — it is justice.
                                    Every contribution you make helps us provide assistive technologies,
                                    vocational training, and leadership mentorship for women and persons with disabilities.
                                </p>
                                <p className="font-medium italic text-gray-900 border-l-4 border-accent pl-6">
                                    &quot;Hope is not a slogan here — it is structured, measured, and scaled.
                                    Help us turn barriers into bridges.&quot;
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-lg">
                                        <ShieldCheck className="text-green-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Transparent</h4>
                                        <p className="text-sm text-gray-500">100% of funds go directly to community programs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <HeartHandshake className="text-blue-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Impactful</h4>
                                        <p className="text-sm text-gray-500">Empowering individuals to become drivers of change.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Banking Details Card */}
                        <div className="relative">
                            <div className="sticky top-24 rounded-3xl bg-neutral-900 p-8 md:p-12 text-white shadow-2xl">
                                <div className="mb-8 flex items-center justify-between">
                                    <Banknote className="text-accent h-12 w-12" />
                                    <span className="rounded-full bg-accent/20 px-4 py-1 text-xs font-bold tracking-widest text-accent uppercase">
                                        Direct Bank Transfer
                                    </span>
                                </div>

                                <h3 className="mb-6 text-2xl font-bold">Banking Details</h3>

                                <div className="space-y-6">
                                    <div className="group border-b border-white/10 pb-4">
                                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Account Name</p>
                                        <p className="text-xl font-medium tracking-wide">{accountDetails.accountName}</p>
                                    </div>

                                    <div className="group border-b border-white/10 pb-4">
                                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Account Number</p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-2xl font-mono font-bold text-accent">{accountDetails.accountNumber}</p>
                                            <button
                                                onClick={() => copyToClipboard(accountDetails.accountNumber)}
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                {copied ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="group border-b border-white/10 pb-4">
                                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Bank Name</p>
                                        <div className="flex items-center gap-3">
                                            <p className="text-lg font-medium">{accountDetails.bankName}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Branch</p>
                                            <p className="font-medium text-sm">{accountDetails.branch}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">SWIFT Code</p>
                                            <p className="font-medium text-sm">{accountDetails.swiftCode}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 rounded-2xl bg-white/5 p-4 text-center">
                                    <p className="text-sm text-gray-400">
                                        Please send a copy of your transfer receipt to <br />
                                        <span className="text-white font-medium">inclusivgrowth@gmail.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Global Impact Section */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="mx-auto max-w-4xl text-center space-y-6">
                    <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h2 className="text-3xl font-bold">International Donors</h2>
                    <p className="text-lg text-gray-600">
                        For international wire transfers, please ensure you include the SWIFT code provided above.
                        If you require further documentation for tax purposes or corporate matching,
                        please contact our finance team.
                    </p>
                </div>
            </section>
        </div>
    );
}