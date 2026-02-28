export default function About() {
  return (
    <section id="about" className="py-24 bg-rose-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        {/* Visual block */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-rose-200 rounded-3xl rotate-6" />
            <div className="absolute inset-0 bg-rose-100 rounded-3xl -rotate-3" />
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center rounded-3xl bg-white shadow-xl p-8 text-center">
              <span className="text-7xl mb-4">👑</span>
              <p className="text-rose-700 font-bold text-lg">Since 2015</p>
              <p className="text-gray-400 text-sm mt-1">Serving Addis Ababa</p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 mb-2">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where Beauty Meets Luxury
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Princess Treatment was founded with a single vision: to give every client an experience that makes them feel truly special. Nestled in the heart of Addis Ababa, our salon combines world-class techniques with warm, personalized care.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our team of certified beauty professionals stays at the cutting edge of trends while honoring the timeless art of beauty. Whether you are preparing for a wedding, a special event, or simply treating yourself — you are in expert hands.
          </p>

          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: '10+', label: 'Years of Experience' },
              { value: '5,000+', label: 'Happy Clients' },
              { value: '15+', label: 'Expert Stylists' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-sm">
                <p className="text-2xl font-bold text-rose-600">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
