"use client";
import React from "react";

export default function MapsLocation() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572.8627669403213!2d38.762595476932674!3d9.032435677180825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858a20bd2b09%3A0x9b593f7d0a324bfb!2sMinistry%20of%20Education%20of%20Ethiopia!5e1!3m2!1sen!2set!4v1772632198398!5m2!1sen!2set"
      width="1000"
      height="400"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
