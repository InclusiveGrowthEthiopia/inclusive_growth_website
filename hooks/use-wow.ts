import { useEffect } from "react";

const useWow = () => {
  useEffect(() => {
    // Dynamically import WOW.js as it needs to run in the browser
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      new WOW.WOW({
        live: false
      }).init();
    }
  }, []);
};

export default useWow;
