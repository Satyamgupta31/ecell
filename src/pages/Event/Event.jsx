

import { Calendar, ArrowRight, MapPin, Sliders, Search } from 'react-feather';
import { motion } from 'framer-motion';
import { useState } from 'react';

import './Event.css';
import DarkVeil from './DarkVeil';



const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All Events');

  const filters = ['All Events', 'Workshops', 'Guest Lectures', 'Competitions', 'Hackathons'];

  const unsplashImages = [
    "1556761175-5973dc0f32e7",
    "1517245386807-bb43f82c33c4",
    "1507679799987-c73779587ccf",
    "1581091870622-2a4e017feef1",
    "1559136555-9303baea8ebd",
    "1521737604893-d14cc237f11d",
  ];

  const upcomingEvents = [
    { title: "Mastering Business Model Canvas", category: "Workshop", date: "Oct 24", time: "10:00 AM - 02:00 PM", location: "Seminar Hall 1, HMRITM" },
    { title: "Ideathon 2024: Pitch Perfect", category: "Competition", date: "Nov 05", time: "09:00 AM - 06:00 PM", location: "Main Auditorium, HMRITM" },
    { title: "Annual Entrepreneurship Summit", category: "Summit", date: "Dec 12", time: "Full Day Event", location: "Innovation Lab, HMRITM" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <DarkVeil
          hueShift={17}
          noiseIntensity={0.25}
          scanlineIntensity={0.05}
          speed={2}
          scanlineFrequency={2.5}
          warpAmount={0.15}
        />
      </div>

      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative px-6 py-12 lg:px-20 lg:py-20 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-transparent p-8 lg:p-16 border border-white/10">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              The Entrepreneur's Hub
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 font-display">
              Igniting Innovation at <span className="text-primary">HMRITM</span>
            </h1>
            <p className="text-neutral-muted text-lg mb-8 leading-relaxed">
              Join our community of dreamers and doers. Discover workshops, summits, and hackathons designed to take your ideas from concept to reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-neutral-dark px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(13,242,204,0.4)] transition-all">
                <Calendar size={20} />
                Explore Calendar
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all">
                Our Legacy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 py-4 lg:px-20 sticky top-18.25 z-40 bg-background-dark/95 backdrop-blur-sm border-b border-white/5">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all ${activeFilter === filter ? 'bg-primary text-neutral-dark' : 'bg-white/5 text-neutral-muted hover:bg-white/10'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-neutral-muted md:mt-0 mt-2">
            <Sliders size={18} />
            <span>Sort by: Newest</span>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-6 py-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight font-display">Upcoming Events</h2>
          <a href="#" className="text-primary font-bold flex items-center gap-1 group">
            View All <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden border-white/5 hover:border-primary/50 transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${unsplashImages[i % unsplashImages.length]}?auto=format&fit=crop&w=800&q=80`}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-col items-center bg-white rounded-lg px-3 py-1 shadow-lg text-neutral-dark">
                  <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                  <span className="text-xl font-black">{event.date.split(' ')[1]}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-background-dark/80 backdrop-blur-md text-white text-xs rounded-full border border-white/10">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-display">{event.title}</h3>
                <div className="space-y-2 mb-6 text-sm text-neutral-muted">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="w-full bg-white/5 hover:bg-primary hover:text-neutral-dark font-bold py-3 rounded-xl transition-all border border-white/10 hover:border-primary">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Legacy Section */}
      <section className="px-6 py-20 lg:px-20 bg-neutral-dark/30 text-white mt-12 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-display">Our Legacy & Impact</h2>
            <p className="text-neutral-muted max-w-2xl mx-auto">Revisit the milestones that have shaped the entrepreneurial culture at HMRITM. Over 2000+ students impacted through 50+ events.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative group h-64 rounded-2xl overflow-hidden col-span-1 lg:col-span-2">
              <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1531058020387-3be344556be6" alt="Legacy" />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                <span className="text-primary font-bold text-sm mb-1 uppercase tracking-wider">Impact Event</span>
                <h4 className="text-xl font-bold mb-1 font-display">E-Summit '23 Highlights</h4>
                <p className="text-xs text-neutral-muted uppercase tracking-widest">500+ Participants • 12 Speakers</p>
              </div>
            </div>
            <div className="relative group h-64 rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Legacy" />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-lg font-bold mb-1 font-display">Code-to-Cash Hack</h4>
                <p className="text-xs text-neutral-muted">48 Hours of Innovation</p>
              </div>
            </div>
            <div className="relative group h-64 rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Legacy" />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-lg font-bold mb-1 font-display">Founder's Circle</h4>
                <p className="text-xs text-neutral-muted">1:1 Mentorship Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal CTA */}
      <section className="px-6 py-20 lg:px-20 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-3xl p-8 lg:p-12 text-center border-2 border-dashed border-primary/20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-neutral-dark mb-6">
            <Search className="size-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4 font-display text-white">Have an Idea for an Event?</h2>
          <p className="text-neutral-muted mb-8 text-lg">We're always looking for new ways to inspire the community. Propose your event today!</p>
          <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-xl font-bold transition-all shadow-xl">
            Propose an Event
          </button>
        </div>
      </section>

      </div>
    </div>
  );
};

export default Events;
