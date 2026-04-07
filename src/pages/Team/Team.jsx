import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/layout';
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'react-feather';

import Shashank from '../../assets/TeamMember/shashank.jpeg'

const Team = () => {
    const Coordinator = [
         {
            name : "Mr. Ankush Rana",
            role : "Coordinator",
            img : Shashank
        }
    ]
    const Faculty = [
        {
            name : "Dr. Padmaja Panda",
            role : "Coordinator",
            img : Shashank
        },
        {
            name : "Ms. Sarita",
            role : "Coordinator",
            img : Shashank
        },
        {
            name : "Ms. Nidhi",
            role : "Coordinator",
            img : Shashank
        },
    ];

    const leadership = [
        { name: "Satyam Gupta", role: "President", img:Shashank },
        { name: "Manav Garg", role: "Vice President", img: Shashank },
    ];

    const heads = [
        { name: "Piyush Bhandari", role: "Technical Head", img: Shashank },
        { name: "Anish", role: "Content Head", img: Shashank },
        { name: "Purav", role: "Social Media Head", img: Shashank },
        { name: "Aditya Kr Choubey", role: "Operations Head", img: Shashank },
        { name: "Divyansh Sharma", role: "Design Head", img: Shashank },
        { name: "Shruti", role: "Public Relations & Outreach Team", img: Shashank },
        { name: "Aakriti", role: "Research & Development Team", img: Shashank },
    ];

    const Technical = [
        { name: "Arvind Singh", role: "Technical Team Member", img: Shashank },
        { name: "Shashank Pandey", role: "Technical Team Member", img: Shashank },
        { name: "Aditya Kumar", role: "Technical Team Member", img: Shashank },
        { name: "Tushar Sharma", role: "Technical Team Member", img: Shashank },
        { name: "Himanshu", role: "Technical Team Member", img: Shashank }
    ];
    const Content = [
        { name: "Kirti Khatri", role: "Content Team Member", img: Shashank },
        { name: "Charvi", role: "Content Team Member", img: Shashank },
        { name: "Sujal Bisht", role: "Content Team Member", img: Shashank },
        { name: "Krishna Jain", role: "Content Team Member", img: Shashank },
        
    ];
      const Social_Media = [
        { name: "Manisha", role: "Social Media Team Member", img: Shashank },
        { name: "Udhav Bhardwaj", role: "Social Media Team Member", img: Shashank },
        { name: "Anushka Bharti", role: "Social Media Team Member", img: Shashank },
        { name: "Dev", role: "Social Media Team Member", img: Shashank },
       
    ];
      const Operations = [
        { name: "Latika", role: "Operations Team Member", img: Shashank },
        { name: "Manya Jain", role: "Operations Team Member", img: Shashank },
        { name: "Parth Dabas", role: "Operations Team Member", img: Shashank },
        { name: "Samvat Dixit", role: "Operations Team Member", img: Shashank },
        { name: "Chitrakshi", role: "Operations Team Member", img: Shashank },
        { name: "Madhu", role: "Operations Team Member", img: Shashank },
    ];
      const Design = [
        { name: "Arnav", role: "Design Team Member", img: Shashank },
        { name: "Utkarsh Singh", role: "Design Team Member", img: Shashank },
        { name: "Diya", role: "Design Team Member", img: Shashank },
        { name: "Tanya Sharma", role: "Design Team Member", img: Shashank },        
    ];
      const PR = [
        { name: "Aanya Luthra", role: "Public Relations & Outreach Team Member", img: Shashank },
        { name: "Prince", role: "Public Relations & Outreach Team Member", img: Shashank },
        { name: "Ishika", role: "Public Relations & Outreach Team Member", img: Shashank },
        { name: "Samaksh Gupta", role: "Public Relations & Outreach Team Member", img: Shashank },
      
        { name: "Samaksh Gupta", role: "Public Relations & Outreach Team Member", img: Shashank },
      
    ];
      const Research_Development = [
        { name: "Ish Pandey", role: "Research & Development Team", img: Shashank },
        { name: "Daksh Gahlot", role: "Research & Development Team", img: Shashank },
        { name: "Aradhya Gupta", role: "Research & Development Team", img: Shashank },
        { name: "Kritagya Verma", role: "Research & Development Team", img: Shashank },
        
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

    const TeamCard = ({ member, isLarge = false }) => {
        const [isClicked, setIsClicked] = useState(false);

        return (
            <motion.div
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-3xl bg-neutral-dark border border-white/5 hover:border-primary/50 transition-all duration-500 ${isLarge ? 'md:col-span-1' : ''}`}
                onClick={() => setIsClicked(!isClicked)}
            >
                <div className={`relative overflow-hidden ${isLarge ? 'h-96' : 'h-80'}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                    <img
                        src={member.img}
                        alt={member.name}
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

    return (
        <Layout>
            <section className="pt-24 pb-32 px-6 lg:px-20 max-w-7xl mx-auto">
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
                        Meet the Squad
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

                 {/* Faculty Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Faculty Coordinator</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {Coordinator.map((member, i) => (

                            <TeamCard key={i} member={member} isLarge={true} />
                        ))}
                    </motion.div>
                </div>
                 {/* Faculty Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Event Coordinator</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {Faculty.map((member, i) => (

                            <TeamCard key={i} member={member} isLarge={true} />
                        ))}
                    </motion.div>
                </div>

                {/* Leadership Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">E-Cell Society Heads</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {leadership.map((member, i) => (
                            <TeamCard key={i} member={member} isLarge={true} />
                        ))}
                    </motion.div>
                </div>
                 {/* Heads  Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Team Leads
</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {heads.map((member, i) => (
                            <TeamCard key={i} member={member} isLarge={true} />
                        ))}
                    </motion.div>
                </div>

                {/* Techical Team Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Technical Team</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {Technical.map((member, i) => (
                            <TeamCard key={i} member={member} />
                        ))}
                    </motion.div>
                </div>
                {/* Content Team Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Content Team</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {Content.map((member, i) => (
                            <TeamCard key={i} member={member} />
                        ))}
                    </motion.div>
                </div>
                {/* Social Media Team Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Social Media Team</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {Social_Media.map((member, i) => (
                            <TeamCard key={i} member={member} />
                        ))}
                    </motion.div>
                </div>
                {/* Operations Team Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Operations Team</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {Operations.map((member, i) => (
                            <TeamCard key={i} member={member} />
                        ))}
                    </motion.div>
                </div>
                {/* Design Team Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Design Team</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {Design.map((member, i) => (
                            <TeamCard key={i} member={member} />
                        ))}
                    </motion.div>
                </div>
                {/* PR Team Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Public Relations & Outreach Team</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {PR.map((member, i) => (
                            <TeamCard key={i} member={member} />
                        ))}
                    </motion.div>
                </div>
                {/* Research and Development Team Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Research & Development Team</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {Research_Development.map((member, i) => (
                            <TeamCard key={i} member={member} />
                        ))}
                    </motion.div>
                </div>

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