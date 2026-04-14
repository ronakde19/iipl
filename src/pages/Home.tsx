import { motion } from "motion/react";
import { ArrowRight, Package, Megaphone, BarChart3, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 md:py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 z-10 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-secondary bg-secondary-fixed rounded-full">
              Next-Gen Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-on-surface mb-6 md:mb-8 leading-[1.1]">
              Navigating the Future of <span className="text-primary italic">Digital Commerce</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant max-w-xl mb-8 md:mb-10 leading-relaxed mx-auto lg:mx-0">
              Empowering global brands with strategic insight, high-performance technology, and data-driven promotion to dominate the evolving marketplace.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe06MFcdQGzd9RMguOo1hMHVx4mToyu-1Kw9-dm8arqS_TyTQ/viewform', '_blank')}
                className="w-full sm:w-auto bg-primary-container text-on-primary-container px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                Get in touch
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative px-4 sm:px-0"
          >
            <div className="relative w-full aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/hero.png"
                alt="Digital analytics" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Startup Marquee */}
      <div className="overflow-hidden whitespace-nowrap py-10 bg-surface-container-highest/30 border-y border-outline-variant/10">
        <div className="inline-block animate-marquee">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-on-surface/5 uppercase tracking-[0.3em] mx-12">
              VENTURE BAY &nbsp; CYNCOO &nbsp; MERA KAHANI &nbsp; SPOT BHARAT &nbsp; DEFINE CART
            </span>
          ))}
        </div>
        <div className="inline-block animate-marquee">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-on-surface/5 uppercase tracking-[0.3em] mx-12">
              VENTURE BAY &nbsp; CYNCOO &nbsp; MERA KAHANI &nbsp; SPOT BHARAT &nbsp; DEFINE CART
            </span>
          ))}
        </div>
      </div>

      {/* RJ Uniforms Section (Moved Up & Updated) */}
      <section className="py-16 md:py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="lg:w-1/2 relative w-full">
              <div className="relative z-10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl aspect-video lg:aspect-[4/3]">
                <img 
                  src="/images/uniforms.png" 
                  alt="RJ Uniforms Workshop" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-on-primary p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl z-20"
              >
                <p className="font-black text-xl md:text-2xl">Premium Quality</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">Since Inception</p>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Our Collaboration</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-surface mb-6 md:mb-8 leading-tight">
                RJ Uniforms: Where Every Stitch Tells a Story
              </h2>
              <div className="space-y-4 md:space-y-6 text-on-surface-variant text-sm md:text-base leading-relaxed mb-8 md:mb-10">
                <p>
                  At RJ Global Uniforms, we believe a uniform is more than just clothing – it is a reflection of pride, discipline, and unity. Every stitch tells a story, and our mission is to help institutions and organizations convey their identity through meticulously designed attire.
                </p>
                <p>
                  With years of experience and a passion for quality, we have become a trusted name in manufacturing school, college, and corporate uniforms. Our team combines traditional craftsmanship with modern design techniques to ensure every garment is comfortable, durable, and elegant.
                </p>
                <p className="hidden md:block">
                  We cater to a wide range of requirements: from formal corporate wear, including shirts, trousers, blazers, and industrial jumpsuits, to school and college uniforms such as shirts, skirts, trousers, tunics, frocks, churidars, and track suits. Additionally, we provide customized designs and special items tailored to the unique needs of each institution or organization.
                </p>
              </div>
              <button 
                onClick={() => window.open('https://rjglobaluniforms.in/', '_blank')}
                className="w-full sm:w-auto border-2 border-on-surface text-on-surface px-10 py-4 rounded-xl font-bold text-lg hover:bg-on-surface hover:text-surface transition-all active:scale-95"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#121212] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-12 md:mb-16 text-center lg:text-left">
            <span className="text-primary font-bold text-sm uppercase tracking-wider mb-4 block">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">What Our Customers Say</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto lg:mx-0">
              Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Ashok Mishra",
                role: "Director",
                quote: "Everything felt structured and easy. It's rare to find a team that covers so many aspects in one place."
              },
              {
                name: "Linda C.",
                role: "Analyst",
                quote: "We were struggling with listing and marketing, but IIPL made the process smooth. Their team understands both business and branding really well."
              },
              {
                name: "Aarav Mishra",
                role: "Alumni",
                quote: "Comfortable uniforms, excellent stitching quality, delivered exactly on promised schedule."
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] group transition-all duration-500 border border-white/10 hover:bg-primary hover:text-on-primary flex flex-col h-full relative"
              >
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-on-primary">{testimonial.name}</h3>
                  <p className="text-gray-500 text-xs md:text-sm group-hover:text-on-primary/70">{testimonial.role}</p>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 md:mb-12 flex-grow group-hover:text-on-primary">
                  {testimonial.quote}
                </p>
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-primary/30 group-hover:text-on-primary/30">
                  <Quote size={24} className="md:w-8 md:h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-inverse-surface text-inverse-on-surface rounded-[2rem] md:rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-extrabold mb-8 md:mb-12 tracking-tighter leading-tight">Ready to evolve your <br/><span className="text-primary-fixed">digital landscape?</span></h2>
              <div className="flex justify-center">
                <button 
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe06MFcdQGzd9RMguOo1hMHVx4mToyu-1Kw9-dm8arqS_TyTQ/viewform', '_blank')}
                  className="w-full sm:w-auto bg-secondary-container text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
                >
                  Get in touch
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary-container/20 rounded-full blur-[80px] md:blur-[120px] -ml-32 md:-ml-48 -mt-32 md:-mt-48"></div>
            <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-[80px] md:blur-[120px] -mr-32 md:-mr-48 -mb-32 md:-mb-48"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
