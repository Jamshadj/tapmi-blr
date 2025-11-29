// src/app/components/sections/EventVenueSection.tsx

export default function EventVenueSection() {
  return (
    <section className="relative w-full h-[30vh] md:h-[70vh] overflow-hidden">
      {/* MAP BACKGROUND */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.014166189417!2d77.6238321!3d13.0583517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f2b75d27b1%3A0xbdaf683e4c2aacae!2sT%20A%20Pai%20Management%20Institute!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
      ></iframe>

      {/* OVERLAY VENUE CARD */}
      <div
        className="
          absolute top-10 left-6 md:left-12 
          bg-[#0EA5A9] text-white 
          p-8 md:p-10 
          w-[80%] md:w-[360px] 
          rounded-md 
          shadow-lg
        "
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-5">Event Venue</h2>

        <p className="text-[15px] md:text-[16px] leading-7 mb-5">
          T A Pai Management Institute<br />
          Manipal Academy of Higher Education,<br />
          Thanisandra Main Rd, Chokkanahalli,<br />
          Bengaluru, Karnataka 560064
        </p>

        <a
          href="#"
          className="underline font-medium text-[16px] mb-6 inline-block"
        >
          View on Maps
        </a>

        <div className="mt-4">
          <h3 className="text-[17px] font-semibold mb-2">Please Note</h3>

          <ul className="list-disc pl-5 space-y-1 text-[15px] md:text-[16px] leading-6">
            <li>Accommodation and travel arrangements will need to be made by participants.</li>
            <li>A list of recommended places to stay will be provided upon request.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
