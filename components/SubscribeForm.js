"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function SubscribeForm() {
  const [state, handleSubmit] = useForm("mbdagayv");

  // Show only thank you message after success
  if (state.succeeded) {
    return (
      <p className="text-green-400 text-sm">
        Thank you! We'll get back to you shortly.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row w-[80%] max-w-3xl gap-2 md:gap-0"
    >
      <div className="flex-1 flex flex-col">
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Enter your email address"
          className="
            flex-1
            bg-transparent
            border border-white/30
            px-6 py-4
            text-white
            placeholder-white/40
            focus:outline-none
            focus:border-white
          "
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 text-sm mt-2"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="
          w-max
          flex items-center gap-4
          bg-brand-red
          px-10 py-4
          text-white
          uppercase
          tracking-wide
          transition-colors duration-300
          hover:bg-[#CE0323]
          disabled:opacity-60
        "
      >
        {state.submitting ? "Sending..." : "Enquire"}
      </button>

      <ValidationError
        errors={state.errors}
        className="text-red-400 text-sm mt-2"
      />
    </form>
  );
}
