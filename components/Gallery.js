const galleryItems = [
  { emoji: '💇‍♀️', label: 'Hair Styling' },
  { emoji: '💅', label: 'Nail Art' },
  { emoji: '✨', label: 'Facial Glow' },
  { emoji: '👰', label: 'Bridal Look' },
  { emoji: '🌸', label: 'Makeup' },
  { emoji: '🧖‍♀️', label: 'Spa Treatment' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 mb-2">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A glimpse of the transformations and moments of beauty we create every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl overflow-hidden flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-sm cursor-pointer"
            >
              <span className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </span>
              <p className="text-sm font-semibold text-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </p>
              {/* Overlay */}
              <div className="absolute inset-0 bg-rose-600/0 group-hover:bg-rose-600/10 transition-colors duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          Follow us on{' '}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-semibold hover:underline"
          >
            Instagram
          </a>{' '}
          for more inspiration.
        </p>
      </div>
    </section>
  );
}
