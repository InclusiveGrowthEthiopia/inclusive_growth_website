import React from "react";
import SectionTitle from "../common/section-title";
import CustomButton from "../common/custom-button";

export default function CtaTwo() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-[5%] py-20 text-center md:space-y-10">
      <SectionTitle title={"MAKE A DIFFERENCE TODAY"} />
      <h2 className="wow fadeInDown mt-2 text-4xl leading-tight font-semibold md:text-5xl lg:text-6xl font-heading">
        Your contribution matters. Support our cause by making a donation.
      </h2>
      <p className="text-muted-foreground md:text-lg">
        Every cent counts and helps us bring hope, joy, and essential resources
        to those in need. Together, we can create a better tomorrow.
      </p>
      <CustomButton label="Donate Today" />
    </div>
  );
}
