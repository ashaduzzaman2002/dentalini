import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Meet the Team" },
  { to: "/faqs", label: "FAQ's" },
  { to: "/blog", label: "Blog" },
  { to: "/visit", label: "Visit Dentalini" },
  { to: "/contact", label: "Contact Us" },
  { to: "/gallery", label: "Gallery" },
  // { to: "/reviews", label: "Reviews" },
];

const SOCIAL_LINKS = [
  { to: "https://www.facebook.com/dentalini", icon: Facebook },
  { to: "https://www.instagram.com/dentalini", icon: Instagram },
  { to: "https://www.linkedin.com/company/dentalini", icon: Linkedin },
];

const SiteHeader = () => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      {/* Top blue section - always static, scrolls normally */}
      <div className="bg-[#0E2F80] py-0.5">
        <div className="container mx-auto flex items-center justify-between py-1.5">
          <div className="flex items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              {/* <div className="w-[35px] h-[35px] bg-white flex justify-center items-center rounded-full"> */}
                <Phone className="text-white w-5 h-5" />
              {/* </div> */}
              <div className="text-[11px]">
                <p>02 8920 3000</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* <div className="w-[35px] h-[35px] bg-white flex justify-center items-center rounded-full"> */}
                <MapPin className="text-white w-5 h-5" />
              {/* </div> */}
              <div className="text-[11px]">
                <p>
                  Suite 3, 118 Alfred St South, Milsons Point NSW 2061
                </p>
              </div>
            </div>

            {/* <div className="flex items-center gap-2">
              <div className="w-[35px] h-[35px] bg-white flex justify-center items-center rounded-full">
                <Clock className="text-[#0E2F80] w-5 h-5" />
              </div>
              <div className="text-[11px] leading-[1.1]">
                <p>8am - 6pm : Monday - Wednesday, Friday</p>
                <p>8.30am -2pm : Saturday</p>
                <p>Closed : Thursday, Sunday, Public holiday</p>
              </div>
            </div> */}
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.to}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 flex justify-center items-center rounded-full  transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation section - this will be fixed on scroll up with animation */}
      <header 
        className={`w-full bg-[#FFFFFF] transition-all duration-700 ease-in-out transform ${
          scrollDirection === 'up' 
            ? 'fixed top-0 left-0 right-0 z-50 translate-y-0 opacity-100 shadow-sm' 
            : 'relative translate-y-0 opacity-100'
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img className="h-12" src="/logo.png" alt="" />
          </Link>
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-base transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button variant="hero" size="lg" className="hover-scale">
              Book Appointment
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden border-t">
          <div className="container mx-auto overflow-x-auto">
            <div className="flex gap-4 py-3">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `whitespace-nowrap text-sm ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default SiteHeader;
