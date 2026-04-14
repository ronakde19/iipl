import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-6 md:px-8 max-w-7xl mx-auto text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Connect with Excellence</span>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 md:mb-8 leading-[1.1]">
            Let's architect your <span className="text-primary">digital future</span>.
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto md:mx-0">
            Whether you're looking for a strategic partner or have a specific project in mind, our team of curators is ready to transform your vision into reality.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 md:px-8 pb-20 md:pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Google Form Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 overflow-hidden min-h-[600px] md:min-h-[800px] flex flex-col"
          >
            <div className="p-6 md:p-8 border-b border-outline-variant/10 bg-surface-container-low">
              <h2 className="text-xl md:text-2xl font-bold text-on-surface">Get in Touch</h2>
              <p className="text-on-surface-variant text-xs md:text-sm">Please fill out the form below and we'll get back to you shortly.</p>
            </div>
            <div className="flex-grow relative bg-white">
              
              
            
              
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe06MFcdQGzd9RMguOo1hMHVx4mToyu-1Kw9-dm8arqS_TyTQ/viewform?embedded=true" width="760" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <div className="bg-surface-container-low p-8 md:p-10 rounded-2xl space-y-8 md:space-y-10 shadow-sm border border-outline-variant/10">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Call</p>
                  <a href="tel:+918342057714" className="text-lg md:text-xl font-bold text-on-surface hover:text-primary transition-colors">+91 83420 57714</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:intechoindia@gmail.com" className="text-lg md:text-xl font-bold text-on-surface hover:text-primary transition-colors break-all">intechoindia@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Address</p>
                  <p className="text-base md:text-lg font-medium text-on-surface mt-1 leading-relaxed">
                    Plot no-170/1256, Duplex no-06, <br/>
                    Sanskriti Enclave, Kuha, <br/>
                    Bhubaneswar - 751002 Odisha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
