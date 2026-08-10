import { GoalIcon, HandHeart, HeartHandshake, LightbulbIcon } from "lucide-react";
import SectionTitle from "../common/section-title";

export default function MissionVision() {
  return (
    <section
      id="mission"
      className="relative scroll-mt-10 bg-linear-to-b from-gray-100 to-transparent py-30"
    >
      <div className="mb-20 text-center">
        <SectionTitle title="Our Mission, Vision & Values" />
        <h2 className="wow fadeInDown mt-2 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl font-heading">
          How We Make a Difference
        </h2>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 gap-y-20 px-6 text-center md:gap-12">
        <div className="border-accent relative w-fit max-w-xl space-y-10 rounded-xl border bg-white p-6 pt-16 shadow-md">
          <div className="bg-accent absolute -top-8 left-1/2 flex -translate-x-1/2 justify-center rounded-full p-2 shadow-md">
            <GoalIcon className="h-16 w-16 stroke-1 text-center text-white" />
          </div>
          <h2 className="wow fadeInDown mt-2 text-2xl leading-tight font-bold md:text-3xl lg:text-4xl">
            Our Mission
          </h2>
          <p className="font-sans mx-auto max-w-xl text-justify">
            We are dedicated to building an inclusive Ethiopian society by dismantling barriers and empowering women and Youth with disabilities through ensuring equitable access to healthcare, education, technology, economy, skill development, and creative platforms. Through the 7-I-CHESTE Pillars and I-CREATE S³ Implementation Engine, we foster partnerships and community action so people can participate, contribute, and thrive.
          </p>
        </div>

        <div className="border-secondary relative w-fit max-w-xl space-y-10 rounded-xl border bg-white p-6 pt-16 shadow-md">
          <div className="bg-secondary absolute -top-8 left-1/2 flex -translate-x-1/2 justify-center rounded-full p-2 shadow-md">
            <LightbulbIcon className="h-16 w-16 stroke-1 text-center text-white" />
          </div>
          <h2 className="wow fadeInDown mt-2 text-2xl leading-tight font-bold md:text-3xl lg:text-4xl">
            Our Vision
          </h2>
          <p className="font-sans mx-auto max-w-xl text-justify">
            To see a truly inclusive society where the unique strengths of women and Youth with disabilities are recognized as catalysts for a more equitable and innovative nation.
          </p>
        </div>

        <div className="border-red-400 relative w-fit max-w-xl space-y-10 rounded-xl border bg-white p-6 pt-16 shadow-md">
          <div className="bg-red-400 absolute -top-8 left-1/2 flex -translate-x-1/2 justify-center rounded-full p-2 shadow-md">
            <HandHeart className="h-16 w-16 stroke-1 text-center text-white" />
          </div>
          <h2 className="wow fadeInDown mt-2 text-2xl leading-tight font-bold md:text-3xl lg:text-4xl">
            Our Values
          </h2>
          <p className="font-sans mx-auto max-w-2xl text-justify">
            We are committed to inclusion, equity, and intersectionality — ensuring every individual, especially women and persons with disabilities, has fair access to opportunities and a meaningful place in society. Through integrity, partnership, innovation, sustainability, empowerment, and self-initiative, we work collaboratively and responsibly to dismantle barriers and create lasting, accessible impact.
          </p>
        </div>
      </div>
    </section>
  );
}
