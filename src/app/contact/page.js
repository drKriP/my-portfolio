"use client";
import React from "react";
import config from "../../config";
import Navbar from "../../components/Navbar";

const Contact = () => {
  const { email, phone, address } = config.contactInfo;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto mt-12 p-6 bg-gray-800 text-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>
        <div className="space-y-3">
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {phone}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
