const services = [
  {
    emoji: '💇‍♀️',
    title: 'Hair Styling',
    description: 'Cuts, blowouts, braids, weaves, and color treatments crafted to perfection by our expert stylists.',
  },
  {
    emoji: '💅',
    title: 'Nail Care',
    description: 'Manicures, pedicures, gel nails, and nail art — from classic elegance to bold statement looks.',
  },
  {
    emoji: '✨',
    title: 'Facials & Skincare',
    description: 'Rejuvenating facials, deep cleansing, and skin brightening treatments for a radiant glow.',
  },
  {
    emoji: '🧖‍♀️',
    title: 'Full Body Treatments',
    description: 'Relaxing massages, body scrubs, and waxing services designed for total pampering.',
  },
  {
    emoji: '👰',
    title: 'Bridal Packages',
    description: 'Complete bridal beauty packages — hair, makeup, nails, and skincare for your special day.',
  },
  {
    emoji: '🌸',
    title: 'Makeup Artistry',
    description: 'Professional makeup for events, photoshoots, parties, and everyday glam.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 mb-2">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every service is delivered with care, skill, and the finest products so you leave feeling like royalty.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-rose-50 rounded-2xl p-8 hover:bg-rose-600 transition-colors duration-300 cursor-default"
            >
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-rose-100 text-sm leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-rose-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200"
          >
            Book a Service
          </a>
        </div>
      </div>
    </section>
  );
}