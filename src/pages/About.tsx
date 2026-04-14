import { motion } from "motion/react";
import { Network, Cpu, Rocket, Eye, ShieldCheck, Zap, Users, User } from "lucide-react"; 
import { cn } from "@/src/lib/utils";

export default function About() {
  return (
    <div className="pt-16">
      {/* How It Started Section */}
      <section className="bg-[#121212] py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-center lg:text-left"
            >
              <span className="text-secondary font-bold text-sm uppercase tracking-wider">How It Started</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Our Beginning<br />
                One Platform.<br />
                Endless Possibilities.
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                IIPL started with a clear realization — businesses were struggling to manage multiple platforms for visibility, marketing, and sales. The vision was to create a unified space where everything works together seamlessly. Today, IIPL stands as a platform that not only supports growth but also guides businesses with the right strategy and direction.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl md:rounded-3xl overflow-hidden aspect-video shadow-2xl border border-white/10"
              >
                <img 
                  src="/images/startup.jpg" 
                  alt="Our Beginning" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { label: "Years Experience in Different sectors", value: "30+" },
                  { label: "Project Initiative", value: "10+" },
                  { label: "Positive Reviews", value: "100+" },
                  { label: "Growth Stories", value: "100+" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-gray-500 leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-[#121212] py-16 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 hover:border-secondary/30 transition-all group"
            >
              <span className="text-secondary font-bold text-sm uppercase tracking-wider mb-4 md:mb-6 block">Our Vision</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 md:mb-6 group-hover:text-secondary transition-colors">Enabling Global Growth Without Limits</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                To become a globally trusted ecosystem where businesses of all sizes can seamlessly connect, grow, and thrive in the digital economy. IIPL envisions a future where innovation meets sustainability, and every brand has access to the right opportunities, tools, and direction to succeed. We aim to redefine how businesses scale by creating a platform that supports not just growth, but meaningful and sustainable impact.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 hover:border-secondary/30 transition-all group"
            >
              <span className="text-secondary font-bold text-sm uppercase tracking-wider mb-4 md:mb-6 block">Our Mission</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 md:mb-6 group-hover:text-secondary transition-colors">Empowering Businesses to Grow Smarter</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                To simplify and accelerate business growth by offering a unified platform that integrates listing, advertising, promotion, consulting, and eCommerce solutions. IIPL is committed to empowering businesses with practical strategies, innovative tools, and expert guidance to build strong, scalable, and impactful brands. By reducing complexity and bringing everything under one ecosystem, we help businesses focus on what truly matters — growth, visibility, and long-term success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Portfolio Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Our Brand Portfolio</h2>
            <p className="text-on-surface-variant">A diverse ecosystem of platforms and brands curated for the modern digital era.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Cyncoo",
                desc: "Our original, authentic generic food brand focused on quality, trust, and everyday essentials.",
                color: "bg-orange-50",
                iconColor: "text-orange-600"
              },
              {
                name: "Define Cart",
                desc: "A modern eCommerce marketplace designed to simplify buying and selling experiences.",
                color: "bg-blue-50",
                iconColor: "text-blue-600"
              },
              {
                name: "Mera Kahani",
                desc: "A platform where every story finds its voice — share, express, and be heard.",
                color: "bg-purple-50",
                iconColor: "text-purple-600"
              },
              {
                name: "Spot Bharat",
                desc: "A smart listing platform connecting users with trusted businesses and services across India.",
                color: "bg-green-50",
                iconColor: "text-green-600"
              },
              {
                name: "Venture Bay",
                desc: "An innovative and strategic platform and launchpad for high-growth New age startups and innovative business models matching with global standards.",
                color: "bg-teal-50",
                iconColor: "text-teal-600"
              }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "p-10 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full",
                  brand.color
                )}
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm", brand.iconColor)}>
                  <span className="text-xl font-black">{brand.name[0]}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-on-surface">{brand.name}</h3>
                <p className="text-on-surface-variant leading-relaxed flex-grow">
                  {brand.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-outline-variant/20">
                  <span className="text-xs font-bold tracking-widest uppercase opacity-40">IIPL Ecosystem</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Marquee */}
      <div className="overflow-hidden whitespace-nowrap py-12 bg-primary/5 border-y border-primary/10">
        <div className="inline-block animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-5xl font-black text-primary/10 uppercase tracking-[0.5em] mx-12">
              Coming Soon
            </span>
          ))}
        </div>
        <div className="inline-block animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-5xl font-black text-primary/10 uppercase tracking-[0.5em] mx-12">
              Coming Soon
            </span>
          ))}
        </div>
      </div>

      {/* Meet Our Team Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight text-on-surface">Meet Our Team</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Combiningly 40+ years of work experience & exposure over 10 different countries including South east Asia like Dubai, Malaysia, Singapore, Europe, New Zealand… etc. More than 10 Diverse Industries experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mr. Bulu Chaudhury\n IIM Trichy Alum",
                role: "Founder & CEO",
                desc: "Founder & CEO and Founder of 5 companies and took exit. Currently working as Founder & CEO of IIPL. Now aiming to build a Billion Dollar Business, which will solve the problem of millions of people across the World. I am an Entrepreneur, an Investor, striving for excellence...creating an irreversible impact. 'I want to put a dent in the Universe Education done at IIM Trichy",
                image: "/images/team01.png"
              },
              {
                name: "Mr. Pranab Kumar Pasayat\n Odisha High Court",
                role: "Legal Advisor",
                desc: "An experienced advocate at the High Court of Orissa, specializing in Constitutional, Banking, Service, Corporate, and Criminal matters. Known for providing reliable legal guidance and dedicated representation across a wide range of cases.",
                image: "/images/team02.png"
              },
              {
                name: "Mr. Lambodara Samantaray",
                role: "Director & Strategic Growth",
                desc: "A seasoned professional with over a decade of experience in supply chain, sales, and marketing, with strong exposure to international markets including New Zealand and Southeast Asia (such as Dubai). Known for driving business growth, optimizing operations, and building strategic market presence across regions.Education done at MBA New Zealand.",
                image: "/images/team03.png"
              },
              {
                name: "Mr. Rajesh Sarangi",
                role: "Advisor",
                desc: "He is a seasoned management professional with over 16 years of industry and consulting experience. He has worked in various capacities in Automotive industries and Big 4 consulting firms in both the domestic and international market. He led diverse business assignments during his associations with renowned associations like TATA Motors, Volvo Eicher, Diamler, PwC and Deloitte while mentoring and driving team members towards excellence. He takes an active interest in industry academia collaboration, mentoring and community service. Education done at XIMB & IIM Sambalpur",
                image: "/images/team04.png"
              },
              {
                name: "Ronak De",
                role: "Tech Lead",
                desc: "A passionate web developer and tech enthusiast, currently contributing as a member of the tech team. He specializes in building user-friendly websites and working with modern tools in web development, UI/UX, and AI. Known for his creativity, problem-solving skills, and dedication, he actively works on developing innovative digital solutions while continuously learning and mentoring others.",
                image: "/images/team05.png"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 flex flex-col"
              >
                <div className="relative mb-8 group">
                  <div className="w-32 h-32 rounded-3xl overflow-hidden bg-surface-container-highest flex items-center justify-center mx-auto shadow-inner">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <User size={64} className="text-outline-variant" />
                    )}
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-on-surface mb-1">
                      {member.name.includes('\n') ? (
                        <>
                          {member.name.split('\n')[0]} <br />
                          <span className="text-sm text-primary">
                            {member.name.split('\n')[1]}
                          </span>
                        </>
                      ) : (
                        member.name
                      )}
                    </h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                </div>
                
                <p className="text-on-surface-variant text-sm leading-relaxed text-center italic">
                  "{member.desc}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-on-surface">Gallery</h2>
            <p className="text-on-surface-variant">A glimpse into our vibrant culture, collaborative workspace, and the moments that define us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, seed: "team-collab", title: "Collaborative Sessions", image: "/images/img7.png" },
              { id: 2, seed: "office-space", title: "Modern Workspace", image: "/images/img2.png" },
              { id: 3, seed: "tech-meeting", title: "Strategic Planning", image: "/images/img3.png" },
              { id: 4, seed: "celebration", title: "Team Milestones", image: "/images/img4.png" },
              { id: 5, seed: "workshop", title: "Innovation Workshops", image: "/images/img5.png" },
              { id: 6, seed: "coffee-break", title: "Creative Breaks", image: "/images/img6.png" }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-lg"
              >
                <img 
                  src={item.image}
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-on-background rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="https://picsum.photos/seed/abstract-data/1920/1080" alt="Abstract data" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10">
              <h2 className="text-surface text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Ready to scale the future?</h2>
              <div className="flex justify-center">
                <button 
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe06MFcdQGzd9RMguOo1hMHVx4mToyu-1Kw9-dm8arqS_TyTQ/viewform', '_blank')}
                  className="bg-secondary-container text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:translate-y-[-2px] transition-all"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
