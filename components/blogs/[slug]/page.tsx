"use client";

import PageHeader from "@/components/common/page-header";
import React from "react";
import useWow from "@/hooks/use-wow";
import { Calendar, TimerIcon, User } from "lucide-react";
import { MarkdownPreview } from "@/components/common/markdown-preview";
import { extractHeaders } from "@/lib/text";
import { TableOfContents } from "@/components/common/table-of-contents";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/common/custom-button";

export default function Page() {
  useWow();
  const content = `
# The Cruciality of Inclusive Growth for PWD and Women in Ethiopia

## Introduction
Inclusive growth is a vital development model that ensures all members of society can participate in and benefit from economic progress. In Ethiopia, achieving sustainable development hinges on the full participation of Persons with Disabilities (PWD) and women, two groups whose historical marginalization presents a significant barrier to national prosperity. This essay argues that empowering these communities is not just a moral obligation but an economic imperative for the nation's future.  


![Inclusive Growth in Ethiopia](/assets/img/blog-img.jpg)  

## The Economic Imperative for Inclusion
The exclusion of PWD and women from economic life represents a major loss of human capital. An estimated **17.6% of Ethiopians live with a disability**, and a vast majority are trapped in poverty due to physical and attitudinal barriers. Similarly, women face significant challenges, including gender-based violence, social norms, and the burden of unpaid care work, which limit their economic roles.  

By failing to integrate these groups, Ethiopia's economy cannot reach its full potential, perpetuating poverty and inequality.  

> *“There can be no sustainable development without the inclusion of women and persons with disabilities.”* - UNDP  

## Key Barriers to Empowerment
Both PWD and women face unique and intersecting challenges:  

- **For PWD**: lack of accessible transportation and infrastructure, limited access to assistive devices, and pervasive discrimination in education and employment.  
- **For Women**: patriarchal cultural norms that limit their access to resources and decision-making power.  
- **For Women with Disabilities**: a *triple layer of discrimination* based on gender, disability, and poverty, making them particularly vulnerable.  

## Policy and Implementation
The Ethiopian government and its international partners have initiated policies to promote inclusion. The Ministry of Labour and Social Affairs (MoLSA) and organizations like the Ethiopian Center for Disability and Development (ECDD) work on vocational rehabilitation and skill development guidelines. National development plans and international support from the World Bank and African Development Bank also emphasize inclusive growth.  

However, policy must be matched by effective implementation at the grassroots level, which requires:  

1. **Universal Design**: Building accessible infrastructure for all.  
2. **Economic Empowerment**: Providing targeted support for micro-finance and small businesses.  
3. **Legal Enforcement**: Strengthening and enforcing anti-discrimination laws.  
4. **Awareness**: Challenging negative attitudes through public campaigns.  

## The Broader Impact
Successfully including PWD and women would yield profound benefits.  

- **Economically**: expand the labor force, boost productivity, and diversify the economy.  
- **Socially**: improve human development outcomes, foster social cohesion, and enhance governance by ensuring all voices are heard.  

## Conclusion
The empowerment of PWD and women is a fundamental prerequisite for inclusive growth in Ethiopia. By prioritizing accessibility, economic support, and attitudinal change, the nation can unlock its full human capital potential. The path to a just, equitable, and prosperous Ethiopia lies in ensuring that **no one is left behind**.  

`;

  const headers = extractHeaders(content ?? "");

  const latestPosts = [
    {
      image: "/assets/img/post_img_1.jpg",
      title: "Lorem ipsum, dolor sit amet",
      postedAt: "Sep 4, 2025"
    },
    {
      image: "/assets/img/post_img_1.jpg",
      title: "Beatae repellendus quasi ea voluptatem aspernatur",
      postedAt: "August 13, 2025"
    }
  ];
  return (
    <div className="wow fadeInDown">
      <PageHeader
        title="Blog Detail"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit
          numquam assumenda nulla."
        className="bg-[url(/assets/img/blogs-bg.jpg)]"
      />
      <section className="wow fadeInUp relative container mx-auto mb-20 max-w-7xl space-y-10 px-4 pt-20 sm:px-[30px] lg:px-[50px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-full min-h-screen space-y-10 lg:col-span-8">
            <div className="">
              <h1 className="font-heading mt-4 inline-block text-center text-4xl font-bold">
                Blog Title
              </h1>
              <span className="text-muted-foreground flex items-center gap-1">
                Published <Calendar className="mld-2 h-4 w-4" /> 3 days ago by{" "}
                <User className="mld-2 h-4 w-4" />
                Mikias Wondim.
              </span>
            </div>
            <MarkdownPreview content={content} />
          </div>
          <div className="bg-muted sticky top-28 col-span-full h-fit space-y-4 rounded-md p-4 lg:col-span-4">
            <div className="hidden lg:block">
              <TableOfContents headers={headers} />
            </div>
            {latestPosts && latestPosts.length > 0 && (
              <div className="">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <TimerIcon className="h-5 w-5" /> Latest Posts
                </h3>
                <div className="flex flex-col gap-4">
                  {latestPosts?.map((p, i) => (
                    <div key={i} className="flex h-full gap-2">
                      <Image
                        src={p.image}
                        alt=""
                        width={70}
                        height={70}
                        className="h-[70px] w-[70px] rounded-md"
                      />
                      <div className="flex h-full flex-col justify-between gap-3">
                        <Link
                          href={`/blogs/slug`}
                          className="hover:text-accent line-clamp-1 text-lg font-semibold underline-offset-4 hover:underline"
                        >
                          {p.title}
                        </Link>
                        <span className="text-muted-foreground text-sm">
                          {p.postedAt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="wow fadeInUp bg-gradient-to-b from-white from-50% to-black to-50% md:px-[5%] md:py-5">
        <div className="bg-secondary grid w-full items-center justify-between gap-6 p-4 md:grid-cols-2 md:rounded-xl md:p-10">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl font-bold text-black md:text-3xl">
              Empowering Lives, Building Futures
            </h2>
            <p className="max-w-2xl text-lg text-black/80 md:text-xl">
              Your support directly fuels our services, providing educational
              support, economic opportunities, and access to healthcare and
              technology for women and people with disabilities.
            </p>
          </div>
          <div className="flex w-full justify-center md:justify-end">
            <CustomButton
              variant="secondary"
              label="Ready to make an impact?"
              className="bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
