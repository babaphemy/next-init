import { AppData } from '@/app/data';
import { Phone } from 'lucide-react';
import Image from 'next/image';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/50">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">{AppData.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {AppData.address}
            </p>
            <p className="text-sm text-muted-foreground">
              {AppData.footer.message1}
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Academics</li>
              <li>Admissions</li>
              <li>Calendar</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">We are Social</h3>
            <Image
              src={'/images/icons/facebook.svg'}
              alt="facebook icon"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            <Image
              src={'/images/icons/twitter.svg'}
              alt="Twitter"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            <Image
              src={'/images/icons/instagram.svg'}
              alt="Instagram"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            {/* <Image
              src={'/images/icons/linkedin.svg'}
              alt="Linkedin"
              width={24}
              height={24}
              className="w-5 h-5"
            /> */}
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              {AppData.phone.map((phone, index) => (
                <div key={index} className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{phone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {currentYear} {AppData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
