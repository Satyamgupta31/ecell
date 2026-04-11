import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/layout';
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'react-feather';
import LightRays from './animation/LightRays';

// import Shashank from '../../assets/TeamMember/shashank.jpeg'
// import ankushrana from '../../assets/TeamMember/ankushrana.jpg'
// import Aakriti from '../../assets/TeamMember/aakriti.jpeg'
// import AdityaKrChoubey from '../../assets/TeamMember/adityachoubey.jpeg'
// import Anish from '../../assets/TeamMember/anish.jpeg'
// import anushka from '../../assets/TeamMember/anushka.jpg'
// import Arnav from '../../assets/TeamMember/Arnav.png'
// import arvind from '../../assets/TeamMember/arvind.jpeg'
// import charvi from '../../assets/TeamMember/charvi.png'
// import chitrakshi from '../../assets/TeamMember/chitrakshi.jpeg'
// import daksh from '../../assets/TeamMember/daksh.jpg'
// // import pfp from '../../assets/TeamMember/default.jpg'
// import divyansh from '../../assets/TeamMember/divyansh.jpg'
// import diya from '../../assets/TeamMember/diya.jpeg'
// import himanshu from '../../assets/TeamMember/himanshu.jpg'
// import ish from '../../assets/TeamMember/ish.JPG'
// import ishika from '../../assets/TeamMember/ishika.jpeg'
// import kirti from '../../assets/TeamMember/kirti.jpg'
// import krishna from '../../assets/TeamMember/krishna.jpg'
// import kritagya from '../../assets/TeamMember/kritigya.jpg'
// import latika from '../../assets/TeamMember/latika.jpeg'
// import madhu from '../../assets/TeamMember/madhu.jpeg'
// import manav from '../../assets/TeamMember/manav.jpeg'
// import manya from '../../assets/TeamMember/manya.jpeg'
// import nidhi from '../../assets/TeamMember/nidhi.jpg'
// import parth from '../../assets/TeamMember/parth.jpeg'
// import piyush from '../../assets/TeamMember/piyush.jpg'
// import prince from '../../assets/TeamMember/prince.png'
// import purav from '../../assets/TeamMember/purav.jpeg'
// import samvat from '../../assets/TeamMember/samvat.jpeg'
// import satyam from '../../assets/TeamMember/satyam.jpeg'
// import shruti from '../../assets/TeamMember/shruti.jpg'
// import sujal from '../../assets/TeamMember/sujal.jpg'
// import tanya from '../../assets/TeamMember/tanya.jpg'
// import tushar from '../../assets/TeamMember/tushar.webp'
// import udhav from '../../assets/TeamMember/udhav.jpg'
import male from '../../assets/TeamMember/male.png'
import female from '../../assets/TeamMember/female.webp'
// import PandaMam from '../../assets/TeamMember/panda.jpeg'
// import Sarita from '../../assets/TeamMember/sarita2.jpg'

const Team = () => {
    const FacultyCoordinator = [
        {
            name: "Mr. Ankush Rana",
            role: "Faculty Coordinator",
            img: male
        }
    ];

    const Coordinator = [
        {
            name : "female",
            role : "Coordinator",
            img : female
        },
        {
            name : "female",
            role : "Coordinator",
            img : female
        },
        {
            name : "female",
            role : "Coordinator",
            img : female
        },
    ];

    const leadership = [
        { name: "Satyam Gupta", role: "President", img: male, linkedin: "", email: "" },
        { name: "Manav Garg", role: "President", img: male, linkedin: "https://www.linkedin.com/in/manav-garg-029969259", email: "mgarg2457@gmail.com" },
    ];

    const heads = [
        { name: "Piyush Bhandari", role: "Technical Head", img: male },
        { name: "Anish", role: "Content Head", img: male },
        { name: "Purav", role: "Social Media Head", img: male },
        { name: "Aditya Kr Choubey", role: "Operations Head", img: male },
        { name: "Divyansh Sharma", role: "Design Head", img: male },
        { name: "Shruti", role: "Public Relations & Outreach Team", img: female },
        { name: "Aakriti", role: "Research & Development Team", img: female },
    ];

    const Technical = [
        { name: "Arvind Singh", role: "Technical Team Member", img: male },
        { name: "Shashank Pandey", role: "Technical Team Member", img: male },
        { name: "Aditya Kumar", role: "Technical Team Member", img: male },
        { name: "Tushar Sharma", role: "Technical Team Member", img: male },
        { name: "Himanshu", role: "Technical Team Member", img: male },
    ];
    const Content = [
        { name: "Kirti Khatri", role: "Content Team Member", img: female },
        { name: "Charvi", role: "Content Team Member", img: female },
        { name: "Sujal Bisht", role: "Content Team Member", img: male },
        { name: "Krishna Jain", role: "Content Team Member", img: male },


    ];
    const Social_Media = [
        { name: "Manisha", role: "Social Media Team Member", img: female },
        { name: "Udhav Bhardwaj", role: "Social Media Team Member", img: male },
        { name: "Anushka Bharti", role: "Social Media Team Member", img: female },
        { name: "Dev", role: "Social Media Team Member", img: male },

    ];
    const Operations = [
        { name: "Latika", role: "Operations Team Member", img: female },
        { name: "Manya Jain", role: "Operations Team Member", img: female },
        { name: "Parth Dabas", role: "Operations Team Member", img: male },
        { name: "Samvat Dixit", role: "Operations Team Member", img: male },
        { name: "Chitrakshi", role: "Operations Team Member", img: female },
        { name: "Madhu", role: "Operations Team Member", img: female },
    ];
    const Design = [
        { name: "Arnav", role: "Design Team Member", img: male },
        { name: "Utkarsh Singh", role: "Design Team Member", img: male },
        { name: "Diya", role: "Design Team Member", img: female },
        { name: "Tanya Sharma", role: "Design Team Member", img: female },
    ];
    const PR = [
        { name: "Aanya Luthra", role: "Public Relations & Outreach Team Member", img: female },
        { name: "Prince", role: "Public Relations & Outreach Team Member", img: male },
        { name: "Ishika", role: "Public Relations & Outreach Team Member", img: female },
        { name: "Samaksh Gupta", role: "Public Relations & Outreach Team Member", img: male },


    ];
    const Research_Development = [
        { name: "Ish Pandey", role: "Research & Development Team", img: male },
        { name: "Daksh Gahlot", role: "Research & Development Team", img: male },
        { name: "Aradhya Gupta", role: "Research & Development Team", img: female },
        { name: "Kritagya Verma", role: "Research & Development Team", img: female },
        
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const TeamCard = ({ member, isLarge = false, priority = false }) => {
        const [isClicked, setIsClicked] = useState(false);

        return (
            <motion.div
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-3xl bg-neutral-dark border border-white/5 hover:border-primary/50 transition-all duration-500 ${isLarge ? 'md:col-span-1' : ''}`}
                onClick={() => setIsClicked(!isClicked)}
            >
                <div className={`relative overflow-hidden ${isLarge ? 'h-96' : 'h-80'}`}>
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-dark via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                    <img
                        src={member.img}
                        alt={member.name}
                        loading={priority ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={priority ? 'high' : 'low'}
                        className={`w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out ${isClicked ? 'grayscale-0' : ''}`}
                    />

                    {/* Social Overlay */}
                    <div className={`absolute top-4 right-4 z-20 transition-transform duration-300 flex flex-col gap-2 ${isClicked ? 'translate-x-0' : 'translate-x-12 group-hover:translate-x-0'}`}>
                        {[Linkedin, Twitter, Mail].map((Icon, i) => (
                            <a key={i} href="#" className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-primary hover:text-neutral-dark transition-all hover:scale-110">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{member.role}</p>
                        <div className="flex items-end justify-between">
                            <h3 className={`font-black text-white font-display leading-tight ${isLarge ? 'text-3xl' : 'text-2xl'}`}>
                                {member.name}
                            </h3>
                            <ArrowUpRight className="text-white opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    const teamSections = [
        { title: "E-Cell Coordinator", members: FacultyCoordinator, isLarge: true },
        { title: "Faculty Coordinator", members: Coordinator, isLarge: true },
        { title: "E-Cell Society Heads", members: leadership, isLarge: true },
        { title: "Team Leads", members: heads, isLarge: true },
        { title: "Technical Team", members: Technical, isLarge: false },
        { title: "Content Team", members: Content, isLarge: false },
        { title: "Social Media Team", members: Social_Media, isLarge: false },
        { title: "Operations Team", members: Operations, isLarge: false },
        { title: "Design Team", members: Design, isLarge: false },
        { title: "Public Relations & Outreach Team", members: PR, isLarge: false },
        { title: "Research & Development Team", members: Research_Development, isLarge: false },
    ];

    return (
        <Layout>
            {/* LightRays full-page background */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div>
            <section className="pt-24 pb-32 px-6 lg:px-20 max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center mb-24">
                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-wider"
                    >
                        The Visionaries
                    </motion.div> */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 font-display"
                    >
                        Meet the Members
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-muted text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        A collective of builders, dreamers, and executors driven by a single mission: to cultivate the next generation of unicorns from HMRITM.
                    </motion.p>
                </div>

                {teamSections.map((section, sectionIndex) => (
                    <div className="mb-20" key={section.title}>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">{section.title}</h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {section.members.map((member, memberIndex) => (
                                <TeamCard
                                    key={`${sectionIndex}-${member.name}-${memberIndex}`}
                                    member={member}
                                    isLarge={section.isLarge}
                                    priority={sectionIndex === 0 && memberIndex === 0}
                                />
                            ))}
                        </motion.div>
                    </div>
                ))}

                {/* Join CTA */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 p-12 rounded-3xl bg-white/5 border border-white/5 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-6 font-display">Want to be part of the legacy?</h2>
                        <button className="bg-white  text-black text-neutral-dark px-8 py-4 rounded-xl font-bold hover:bg-primary transition-colors">
                            Join the Team 
                        </button>
                    </div>
                </motion.div> */}


            </section>
        </Layout>
    );
};

export default Team;