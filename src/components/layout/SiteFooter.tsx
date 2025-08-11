import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-display text-lg text-primary">Dentalini Smile Studio</h3>
          <p className="text-sm text-muted-foreground">
            Gentle, modern dental care led by women — designed for comfort, confidence, and beautiful smiles.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-medium text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="story-link" to="/services">Our Services</Link></li>
            <li><Link className="story-link" to="/team">Meet the Team</Link></li>
            <li><Link className="story-link" to="/faqs">FAQ's</Link></li>
            <li><Link className="story-link" to="/reviews">Reviews</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-medium text-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (000) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@dentalini.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Smile Ave, Your City</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dentalini Smile Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
