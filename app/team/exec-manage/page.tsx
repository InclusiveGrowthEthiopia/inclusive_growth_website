"use client";

import PageHeader from "@/components/common/page-header";
import useWow from "@/hooks/use-wow";
import { executiveTeam } from "@/data";
import { TeamCard } from "@/components/common/team-card";
import Link from "next/link";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export default function Page() {
  useWow();

  return (
    <div className="wow fadeInDown">
      <PageHeader
        title="Executive Managers"
        description=""
        className="bg-[url(/assets/img/team-exec-bg.jpg)]"
      />
      <section className="wow fadeInUp g:px-[50px] mb-20 px-4 pt-20 sm:px-[30px] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-16 xl:gap-20 md:grid-cols-2 xl:grid-cols-3">
          {executiveTeam.map((member, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <TeamCard
                name={member.name}
                position={member.position}
                image={member.image}
                social={member.social}
                variant={member.variant}
              />
            </div>
          ))}
        </div>
        <div className="py-5 md:py-10 flex justify-center mt-10 md:mt-20">
          <Link
            href={'/team/bod'}
            className="bg-secondary w-fit hover:bg-secondary/80 flex items-center gap-2 rounded-md p-4"
          >
            See all Board Members
            <SquareArrowOutUpRightIcon className="h-4 w-4 stroke-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
