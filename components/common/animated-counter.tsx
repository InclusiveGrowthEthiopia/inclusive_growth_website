"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  config?: {
    start?: number;
    duration?: number;
  };
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = "",
  prefix = "",
  config
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          start={config?.start || 0}
          end={value}
          duration={config?.duration || 2.75}
          suffix={suffix}
          prefix={prefix}
        />
      ) : (
        `${prefix}${value}${suffix}`
      )}
    </div>
  );
};

export default AnimatedCounter;
