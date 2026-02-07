"use client";

export default function SubscribeForm() {
  return (
    <form className="flex flex-col md:flex-row w-full max-w-3xl gap-2 md:gap-0">

      {/* INPUT */}
      <input
        type="email"
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

      {/* BUTTON */}
      <button
        type="submit"
        className="w-max
          flex items-center gap-4
          bg-brand-red
          px-10 py-4
          text-white
          uppercase
          tracking-wide
          transition-colors duration-300
          hover:bg-[#CE0323]
        "
      >
        <span>Enquire</span>

        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
