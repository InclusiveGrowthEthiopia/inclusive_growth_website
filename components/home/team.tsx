import SectionTitle from "../common/section-title";
import { teamHighlight } from "@/data";
import { TeamCard } from "../common/team-card";
import Link from "next/link";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="relative scroll-mt-20 bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-10 md:mb-20">
          <SectionTitle title="Team" />
          <h2 className="wow fadeInDown mt-2 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl font-heading">
            Meet Our Dedicated Team
          </h2>
        </div>
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap mx-auto justify-around gap-8 md:grid-cols-2 xl:grid-cols-3">
            {teamHighlight.map((member, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <TeamCard
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  social={member.social}
                  variant={member.variant}
                />
                {member.redirect && member.redirectTo && <Link
                  href={member.redirect}
                  className="bg-secondary hover:bg-secondary/80 flex items-center gap-2 rounded-md p-4"
                >
                  {member.redirectTo}
                  <SquareArrowOutUpRightIcon className="h-4 w-4 stroke-1" />
                </Link>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
