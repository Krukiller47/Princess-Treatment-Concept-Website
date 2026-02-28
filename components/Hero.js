export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24 pb-16">
        <p className="inline-block mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 bg-rose-50 border border-rose-200 rounded-full px-4 py-1">
          Luxury Beauty · Addis Ababa
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
          You Deserve the{' '}
          <span className="text-rose-600">Princess</span>{' '}
          Treatment
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl mx-auto">
          Premium hair, nail, and skincare services tailored to make you look and feel your absolute best.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-rose-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="border-2 border-rose-600 text-rose-600 font-semibold px-8 py-3 rounded-full hover:bg-rose-50 transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
