import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const SiteFooter = () => {
  return (
    <div>
      <div className="h-[560px] w-full bg-muted relative">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6627.549355931702!2d151.210381!3d-33.843921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae8b528fd945%3A0xada31445f0d88f4f!2sShop%203%2F118%20Alfred%20St%20S%2C%20Milsons%20Point%20NSW%202061!5e0!3m2!1sen!2sau!4v1754930748822!5m2!1sen!2sau"
            width="100%"
            height="560"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="absolute top-[46px]  w-full">
          <div className="container mx-auto flex items-center justify-end">
            <div className="w-[651px] h-[658px] bg-[#1E9DC1] rounded-full relative top-6"></div>
            <div className="w-[651px] h-[658px] bg-white absolute rounded-full pt-[103px] pb-[96px] px-[130px]">
              dd
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#0B131E] ">
        <div className="container mx-auto pt-[70px] pb-12">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img className="h-14" src="/logo.png" alt="" />
          </Link>
          <p className="text-sm text-muted-foreground max-w-[490px]">
            Gentle, modern dental care led by women — designed for comfort,
            confidence, and beautiful smiles.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-10 py-12 md:grid-cols-3 border-t-white/10 border-t text-white">
          <div>
            <h4 className="mb-3 font-medium text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="story-link" to="/services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link className="story-link" to="/team">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link className="story-link" to="/faqs">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link className="story-link" to="/reviews">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-medium text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> (000) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@dentalini.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 123 Smile Ave, Your City
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-white/10 border-t py-4 text-center text-sm container mx-auto text-white/50">
          © {new Date().getFullYear()} Dentalini. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SiteFooter;
