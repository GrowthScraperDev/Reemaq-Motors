"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meelalzz"); // replace if different form ID

  // If successful → show only thank you message
  if (state.succeeded) {
    return (
      <div className="w-full font-inter text-center py-16">
        <h3 className="text-2xl font-semibold text-brand-black">
          Thank You!
        </h3>
        <p className="mt-3 text-text-primary">
          Your enquiry has been submitted successfully.  
          Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full font-inter">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-primary">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="John Deo"
            className="border border-brand-smoke px-4 py-3 text-base focus:outline-none focus:border-brand-black"
          />
        </div>

        {/* Organization Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-primary">
            Organization Name
          </label>
          <input
            type="text"
            name="organization"
            required
            placeholder="ABC Motors"
            className="border border-brand-smoke px-4 py-3 text-base focus:outline-none focus:border-brand-black"
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-primary">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="john.deo@abcmotors.com"
            className="border border-brand-smoke px-4 py-3 text-base focus:outline-none focus:border-brand-black"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-primary">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 98765 43210"
            className="border border-brand-smoke px-4 py-3 text-base focus:outline-none focus:border-brand-black"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 mt-6">
        <label className="text-sm font-medium text-text-primary">
          Message (Your Enquiry)
        </label>
        <textarea
          rows={6}
          name="message"
          placeholder="Your Message"
          className="border border-brand-smoke px-4 py-3 text-base resize-none focus:outline-none focus:border-brand-black"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>

      {/* Global Errors */}
      <ValidationError
        errors={state.errors}
        className="text-red-500 text-sm mt-4"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="mt-8 w-full bg-brand-red text-white py-4 text-base font-medium tracking-wide transition-colors duration-300 hover:bg-brand-black disabled:opacity-60 flex items-center justify-center gap-3"
      >
        {state.submitting ? "Submitting..." : "SUBMIT"}
        <span className="text-xl">→</span>
      </button>
    </form>
  );
}
