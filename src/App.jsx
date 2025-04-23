// CGV Landing Page (React + TailwindCSS)
import React from 'react';

export default function CGVLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-red-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">CGV Cinemas</h1>
        <ul className="hidden md:flex gap-6 text-base">
          <li><a href="#about" className="hover:text-gray-200">About Us</a></li>
          <li><a href="#services" className="hover:text-gray-200">Services</a></li>
          <li><a href="#promo" className="hover:text-gray-200">Promo</a></li>
          <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-[60vh] flex items-center justify-center text-white text-center px-6" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542204165-65bf26472b9b)' }}>
        <div className="bg-black bg-opacity-60 p-6 rounded-xl">
          <h2 className="text-4xl font-bold mb-4">Pengalaman Nonton Terbaik di CGV</h2>
          <p className="text-lg">Teknologi Termaju, kenyamanan maksimal, dan film-film terbaru menanti Anda.</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 px-6 md:px-20">
        <h3 className="text-3xl font-semibold mb-4">About us</h3>
        <p className="text-lg leading-relaxed">CGV Cinemas adalah jaringan bioskop global yang hadir di Indonesia dengan konsep sinema kelas dunia. Kami menawarkan pengalaman menonton terbaik dengan teknologi terkini seperti 4DX, ScreenX, dan SweetBox.</p>
      </section>

      {/* Services */}
      <section id="services" className="py-12 bg-white px-6 md:px-20">
        <h3 className="text-3xl font-semibold mb-6">Our services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">4DX Experience</h4>
            <p>Rasakan film dengan gerakan kursi, angin, aroma, dan efek air.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">ScreenX</h4>
            <p>Layar 270 derajat yang mengelilingi pandangan Anda untuk pengalaman sinematik mendalam.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">SweetBox</h4>
            <p>Tempat duduk eksklusif untuk pasangan, dilengkapi privasi dan kenyamanan ekstra.</p>
          </div>
        </div>
      </section>

      {/* Promo */}
      <section id="promo" className="py-12 px-6 md:px-20 bg-red-50">
        <h3 className="text-3xl font-semibold mb-6">Promo Terbaru</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Diskon 50% untuk pelajar setiap hari Senin</li>
          <li>Promo Buy 1 Get 1 setiap hari Rabu</li>
          <li>Point rewards untuk setiap transaksi pembelian tiket</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-6 md:px-20 bg-white">
        <h3 className="text-3xl font-semibold mb-4">Hubungi Kami</h3>
        <p className="text-lg">Email: support@cgv.id | Telepon: +62 21 1234 5678</p>
        <p className="text-lg mt-2">Alamat: CGV Central Park Jl.kemana aja, Jakarta Barat, Indonesia</p>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white text-center py-4">
        <p>&copy; 2025 CGV Cinemas Indonesia. All rights reserved.</p>
      </footer>
    </div>
  );
}
