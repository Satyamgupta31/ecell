import React from 'react';
import { motion } from 'framer-motion';
import { Send, Rocket, Mail, Globe, Users, Camera, MapPin, ExternalLink } from 'lucide-react';
import Layout from '../../components/Layout/layout';

export const Contact = () => {
    return (
        <Layout>
            <main className="max-w-7xl mx-auto px-6 py-20 lg:px-20">
                {/* Hero Section */}
                <section className="mb-16 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight font-display"
                    >
                        Get in Touch / <span className="hero-gradient">Join the Movement</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-muted max-w-2xl"
                    >
                        Fostering the entrepreneurial spirit at HMRITM. Whether you have a question, an idea, or want to lead, we’re here to help you grow.
                    </motion.p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="glass-card p-8 border-white/5 shadow-2xl">
                            <h2 className="text-2xl font-bold mb-6 text-white font-display">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-neutral-muted">Full Name</label>
                                        <input className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white" placeholder="Arvind Rawat" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-neutral-muted">Email Address</label>
                                        <input className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white" placeholder="arvind@example.com" type="email" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-neutral-muted">Subject</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white" placeholder="Inquiry about upcoming events" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-neutral-muted">Message</label>
                                    <textarea className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white" placeholder="Tell us how we can help..." rows="5"></textarea>
                                </div>
                                <button className="w-full md:w-max bg-primary text-neutral-dark px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20" type="submit">
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right Column: Membership & Info */}
                    <div className="space-y-8">
                        {/* Join E-Cell CTA Card */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-primary rounded-2xl p-8 text-neutral-dark shadow-xl shadow-primary/20 relative overflow-hidden group"
                        >
                            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <Rocket size={160} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-display">Become a Member</h3>
                            <p className="text-neutral-dark/80 mb-6 text-sm leading-relaxed font-medium">
                                Ready to lead the startup revolution? Join the core team and get access to exclusive workshops, networking, and mentorship.
                            </p>
                            <button className="w-full bg-neutral-dark text-white py-3 rounded-lg font-bold hover:bg-neutral-dark/90 transition-colors flex items-center justify-center gap-2">
                                Apply for Membership
                                <ExternalLink size={16} />
                            </button>
                        </motion.div>

                        {/* Contact Details */}
                        <div className="glass-card p-8 space-y-6 border-white/5">
                            <h3 className="text-xl font-bold text-white font-display">Contact Details</h3>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-white">Our Location</p>
                                    <p className="text-sm text-neutral-muted">HMR Institute of Technology & Management,<br />Hamidpur, Delhi, 110036</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-white">Email Us</p>
                                    <p className="text-sm text-neutral-muted">ecell@hmritm.ac.in</p>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 rounded-xl overflow-hidden border border-white/10 h-48 bg-neutral-dark relative group">
                                <img
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-70"
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
                                    alt="Delhi Map"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="bg-background-dark/80 px-4 py-2 rounded-full text-xs font-bold shadow-lg text-white border border-white/10">
                                        View on Google Maps
                                    </span>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="pt-6 border-t border-white/10">
                                <p className="text-xs font-bold uppercase tracking-widest text-neutral-muted mb-4">Follow Us</p>
                                <div className="flex gap-4">
                                    {[Globe, Users, Camera].map((Icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-neutral-dark hover:border-primary transition-all">
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Contact;