export default function ContactForm() {
    return (
      <form className="w-full font-inter">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">
              Full Name
            </label>
            <input
              type="text"
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
              placeholder="john.deo@abcmotors.com"
              className="border border-brand-smoke px-4 py-3 text-base focus:outline-none focus:border-brand-black"
            />
          </div>
  
          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">
              Phone Number
            </label>
            <input
              type="tel"
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
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="border border-brand-smoke px-4 py-3 text-base resize-none focus:outline-none focus:border-brand-black"
          />
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-full bg-brand-red text-white py-4 text-base font-medium tracking-wide transition-colors duration-300 hover:bg-brand-black flex items-center justify-center gap-3"
        >
          SUBMIT
          <span className="text-xl">→</span>
        </button>
      </form>
    );
  }
  