import Link from "next/link";
import { Check, X, Smartphone, MapPin, Music, Calendar } from "lucide-react";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3B3A36] font-sans selection:bg-[#C5A059]/30">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <h1 className="font-display text-5xl md:text-7xl mb-6 text-[#3E171B]">Living Invitations</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Luxury, interactive digital stationery tailored to match your event's bespoke decor. Don't just send a PDF—send an experience.
        </p>
        <Link 
          href="#inquiry" 
          className="inline-block bg-[#C5A059] text-white px-8 py-4 rounded-full font-semibold tracking-wide uppercase text-sm hover:bg-[#a38244] transition-colors shadow-lg"
        >
          Request a Custom Invite
        </Link>
      </section>

      {/* Demos Section */}
      <section className="py-20 px-6 bg-[#FAF4ED]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl mb-4 text-[#3E171B]">The Collection</h2>
            <p className="text-gray-600">Experience our signature tactile aesthetics on your device.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Christian Demo */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-full aspect-[9/16] bg-[#F7F5EE] rounded-2xl mb-6 overflow-hidden relative shadow-inner border border-gray-200">
                <img src="/hero-image.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Christian Wedding" />
              </div>
              <h3 className="font-display text-2xl mb-2">Christian Edition</h3>
              <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">Ivory, Arched Parallax</p>
              <Link href="/demo/christianity" className="w-full py-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors text-sm font-semibold">
                View Live Demo
              </Link>
            </div>

            {/* Hindu Demo */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-full aspect-[9/16] bg-[#F1E5D8] rounded-2xl mb-6 overflow-hidden relative shadow-inner border border-gray-200">
                <img src="/temple-sky.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Hindu Wedding" />
              </div>
              <h3 className="font-display text-2xl mb-2">Hindu Edition</h3>
              <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">Temple Cutout, Rich Text</p>
              <Link href="/demo/hindu" className="w-full py-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors text-sm font-semibold">
                View Live Demo
              </Link>
            </div>

            {/* Coastal Minimal */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-full aspect-[9/16] bg-[#F1F5F9] rounded-2xl mb-6 overflow-hidden relative shadow-inner border border-gray-200">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Coastal Minimal" />
              </div>
              <h3 className="font-display text-2xl mb-2">Coastal Minimal</h3>
              <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">Sea Salt & Linen</p>
              <Link href="/demo/modern-minimalist" className="w-full py-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors text-sm font-semibold">
                View Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl mb-4 text-[#3E171B]">Why Web Invites?</h2>
          <p className="text-gray-600">Upgrade from static files to a frictionless guest experience.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-6 font-display text-xl font-normal text-gray-400">Feature</th>
                <th className="p-6 font-display text-xl font-normal text-gray-500">PDF / Video</th>
                <th className="p-6 font-display text-xl font-normal text-[#C5A059] bg-[#C5A059]/5">Living Web Invite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-6 text-gray-600 flex items-center gap-3"><Smartphone size={18} /> High-Resolution on all devices</td>
                <td className="p-6 text-gray-400"><X size={20} className="text-red-400" /></td>
                <td className="p-6 bg-[#C5A059]/5"><Check size={20} className="text-[#C5A059]" /></td>
              </tr>
              <tr>
                <td className="p-6 text-gray-600 flex items-center gap-3"><MapPin size={18} /> 1-Tap Google Maps Navigation</td>
                <td className="p-6 text-gray-400"><X size={20} className="text-red-400" /></td>
                <td className="p-6 bg-[#C5A059]/5"><Check size={20} className="text-[#C5A059]" /></td>
              </tr>
              <tr>
                <td className="p-6 text-gray-600 flex items-center gap-3"><Calendar size={18} /> Direct Calendar Sync</td>
                <td className="p-6 text-gray-400"><X size={20} className="text-red-400" /></td>
                <td className="p-6 bg-[#C5A059]/5"><Check size={20} className="text-[#C5A059]" /></td>
              </tr>
              <tr>
                <td className="p-6 text-gray-600 flex items-center gap-3"><Music size={18} /> High-Quality Ambient Audio</td>
                <td className="p-6 text-gray-400">File size heavy</td>
                <td className="p-6 bg-[#C5A059]/5"><Check size={20} className="text-[#C5A059]" /> Streaming</td>
              </tr>
              <tr>
                <td className="p-6 text-gray-600 font-semibold">1-Tap WhatsApp RSVP Conversion</td>
                <td className="p-6 text-gray-400"><X size={20} className="text-red-400" /></td>
                <td className="p-6 bg-[#C5A059]/5 font-semibold text-[#3E171B]"><Check size={20} className="text-[#C5A059]" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 px-6 bg-[#3E171B] text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-4 text-[#FDFBF7]">Commission Your Invite</h2>
          <p className="text-[#FDFBF7]/70 mb-10 text-sm">Fill out this quick form, and our concierge team will reach out via WhatsApp with a quote and next steps.</p>

          <form className="space-y-4 text-left" action="https://formspree.io/f/placeholder" method="POST">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#FDFBF7]/60 mb-2">Host / Couple Names</label>
              <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C5A059]" placeholder="e.g. Melvin & Nikitha" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#FDFBF7]/60 mb-2">Event Type</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C5A059] appearance-none" required>
                  <option value="wedding">Wedding</option>
                  <option value="milestone">Milestone Birthday</option>
                  <option value="corporate">Corporate / Launch</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#FDFBF7]/60 mb-2">Target Date</label>
                <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C5A059] color-scheme-dark" required />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#FDFBF7]/60 mb-2">Desired Style / Palette</label>
              <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C5A059]" placeholder="e.g. Royal Mewar, Kerala Kasavu..." required />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#FDFBF7]/60 mb-2">WhatsApp Number</label>
              <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C5A059]" placeholder="+91..." required />
            </div>
            <button type="submit" className="w-full bg-[#C5A059] text-white rounded-xl py-4 font-semibold uppercase tracking-widest text-sm hover:bg-[#a38244] transition-colors mt-4">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
