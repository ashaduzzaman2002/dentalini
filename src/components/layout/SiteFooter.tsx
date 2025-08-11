import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const SiteFooter = () => {
  return (
    <div>
      <div className="h-[460px] w-full bg-muted relative">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6627.549355931702!2d151.210381!3d-33.843921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae8b528fd945%3A0xada31445f0d88f4f!2sShop%203%2F118%20Alfred%20St%20S%2C%20Milsons%20Point%20NSW%202061!5e0!3m2!1sen!2sau!4v1754930748822!5m2!1sen!2sau"
            width="100%"
            height="460"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="absolute top-[60px]  w-full pointer-events-none">
          <div className="container mx-auto flex items-center justify-end">
            <div className="w-[551px] h-[551px] bg-[#1E9DC1] rounded-full relative top-5"></div>
            <div className="w-[551px] h-[551px] bg-white absolute rounded-full pt-[103px] pb-[96px] px-[130px] pointer-events-auto  ">
              <h3 className="text-center text-3xl font-semibold text-primary">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-4 mt-6">
                <Input
                  placeholder="First Name"
                  className="bg-[#F7F7F7] rounded"
                />
                <Input
                  placeholder="Phone Number"
                  className="bg-[#F7F7F7] rounded"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-[#F7F7F7] rounded"
                />
                <Textarea
                  className="resize-none bg-[#F7F7F7] rounded"
                  placeholder="How can we help you?"
                />
                <Button className="w-full" variant="hero">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#0B131E] ">
        <div className="container mx-auto pt-[70px] pb-12">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img className="h-14" src="/logo.png" alt="" />
          </Link>
          <p className="text-sm text-white/60 max-w-[490px]">
            At Dentalini we believe that everybody deserves good health. It's
            all about giving you quality treatment by Dentists that are
            experienced, gentle and accessible for adults and children.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 border-t-white/10 border-t text-white">
          <div>
            <h4 className="mb-3 font-medium  text-white/60 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
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
              <li>
                <Link className="story-link" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-medium text-white/60 text-sm uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link className="story-link" to="/services">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link className="story-link" to="/services">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link className="story-link" to="/services">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link className="story-link" to="/services">
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link className="story-link" to="/services">
                  Dental Implants
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-medium text-white/60 text-sm uppercase tracking-widest">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-sm text-white">
             



              <li>
                8am - 6pm : Monday - Wednesday, Friday
              </li>
              <li>
                8.30am -2pm : Saturday

              </li>
              <li>
                Closed : Thursday, Sunday, Public holiday
              </li>
              
            </ul>
          </div>

      
          <div>
            <h4 className="mb-3 font-medium text-white/60 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> 2 8920 3000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@dentalini.com.au
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Suite 3, 118 Alfred St South,{" "}
                <br />
                Milsons Point NSW 2061
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
