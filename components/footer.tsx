import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Apex</h3>
            <p className="text-sm opacity-80 mb-6">Engineering Solutions</p>
            <p className="text-sm opacity-75">
              Delivering comprehensive engineering expertise for commercial and industrial projects worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Civil Engineering</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Structural Design</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Mechanical Systems</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Electrical Engineering</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#portfolio" className="hover:opacity-100 transition-opacity">Projects</a></li>
              <li><a href="#team" className="hover:opacity-100 transition-opacity">Team</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex gap-3 items-start">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1-800-APEX-ENG</span>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@apexeng.com</span>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Engineering Way, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm opacity-75">
            &copy; {new Date().getFullYear()} Apex Engineering. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm opacity-75">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
