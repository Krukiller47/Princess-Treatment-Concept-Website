import { useState } from 'react';

const INITIAL_FORM_STATE = { name: '', email: '', phone: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-rose-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 mb-2">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ready for your transformation? Fill out the form below and we will get back to you to confirm your booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            {[
              { icon: '📍', label: 'Location', value: 'Bole, Addis Ababa, Ethiopia' },
              { icon: '📞', label: 'Phone', value: '+251 91 234 5678' },
              { icon: '📧', label: 'Email', value: 'hello@princess-treatment.com' },
              { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 9 AM – 7 PM\nSun: 10 AM – 5 PM' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="text-2xl mt-1">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-800">{item.label}</p>
                  <p className="text-gray-500 text-sm whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Booking form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🌸</div>
                <h3 className="text-2xl font-bold text-rose-600 mb-2">Thank You!</h3>
                <p className="text-gray-500">
                  We have received your request and will contact you shortly to confirm your appointment.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL_FORM_STATE); }}
                  className="mt-6 text-sm text-rose-600 hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+251 9XX XXX XXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 transition bg-white"
                  >
                    <option value="">Select a service…</option>
                    <option>Hair Styling</option>
                    <option>Nail Care</option>
                    <option>Facials &amp; Skincare</option>
                    <option>Full Body Treatment</option>
                    <option>Bridal Package</option>
                    <option>Makeup Artistry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any preferences or questions?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white font-semibold py-3 rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200"
                >
                  Request Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
