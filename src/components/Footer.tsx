import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1">
          <Link to="/" className="mb-6 block">
            <img src="/logo.png" alt="IIPL Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
          </Link>
          <p className="text-xs leading-relaxed text-on-surface-variant pr-8">
            Architecting the future of digital commerce through innovation and strategic curator excellence.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-xs text-on-surface-variant hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6 text-sm uppercase tracking-widest">Resources</h4>
          <ul className="space-y-4">
            <li><a href="https://www.linkedin.com/company/intecho-india/" className="text-xs text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSe06MFcdQGzd9RMguOo1hMHVx4mToyu-1Kw9-dm8arqS_TyTQ/viewform" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
        <p className="text-xs text-on-surface-variant">Made with ❤️ by Buildifye. All rights reserved.</p>
        <div className="flex gap-6 items-center">
        </div>
      </div>
    </footer>
  );
}