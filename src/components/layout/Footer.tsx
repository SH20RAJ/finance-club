export function Footer() {
  return (
    <footer className="bg-black/40 pt-20 pb-10 border-t border-white/5">
       <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
             <div className="font-heading text-2xl font-bold text-white mb-6">
                FIN<span className="text-fin-blue">PRO</span>
             </div>
             <p className="font-sans text-white/50 text-sm leading-relaxed">
                Where strategy meets the spirit of finance. <br/>
                Create. Invest. Grow.
             </p>
          </div>

          <div>
             <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
             <ul className="space-y-4 text-white/60 font-sans text-sm">
                <li><a href="#" className="hover:text-fin-blue transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-fin-blue transition-colors">About</a></li>
                <li><a href="#events" className="hover:text-fin-blue transition-colors">Events</a></li>
                <li><a href="#gallery" className="hover:text-fin-blue transition-colors">Gallery</a></li>
             </ul>
          </div>

          <div className="md:col-span-2">
             <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
             <div className="space-y-4 text-white/60 font-sans text-sm">
                <p>BIT Mesra Road, Mesra, Ranchi- 835215, Jharkhand, India</p>
                <p>+91 95469 49124</p>
                <p className="text-fin-blue">financeclub@bitmesra.ac.in</p>
             </div>
          </div>

       </div>

       <div className="container px-6 pt-8 border-t border-white/5 text-center">
          <p className="font-sans text-white/20 text-xs">
             © 2026 Finance Club BIT Mesra. All rights reserved.
          </p>
       </div>
    </footer>
  );
}
