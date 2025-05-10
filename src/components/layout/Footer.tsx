import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin } from 'lucide-react'; // Lucide icons
import { Button } from '@/components/ui/button'; // ShadCN Button for social icons
import { Separator } from '@/components/ui/separator'; // ShadCN Separator

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://facebook.com", labelKey: "footer.facebookAria", icon: <Facebook size={20} /> },
    { href: "https://instagram.com", labelKey: "footer.instagramAria", icon: <Instagram size={20} /> },
    { href: "https://linkedin.com", labelKey: "footer.linkedinAria", icon: <Linkedin size={20} /> },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-background py-6 md:py-8">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 sm:px-6 lg:px-8 md:flex-row">
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright', `© ${currentYear} Kangen Vand DK. Alle rettigheder forbeholdes.`, { year: currentYear })}
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-sm text-muted-foreground md:flex-row md:space-y-0 md:space-x-4">
          <a href="/privacy-policy" className="hover:text-primary transition-colors">
            {t('footer.privacyPolicy', 'Privatlivspolitik')}
          </a>
          <Separator orientation="vertical" className="hidden h-5 md:block" />
          <a href="/terms-of-service" className="hover:text-primary transition-colors">
            {t('footer.termsOfService', 'Servicevilkår')}
          </a>
        </div>
      </div>
      <Separator className="my-4 md:my-6 container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" />
      <div className="container mx-auto flex max-w-screen-xl items-center justify-center space-x-2 px-4 sm:px-6 lg:px-8">
        {socialLinks.map(social => (
          <Button
            key={social.labelKey}
            variant="ghost"
            size="icon"
            asChild // Allows the Button to render its child (the <a> tag)
          >
            <a
              href={social.href}
              aria-label={t(social.labelKey, social.labelKey.split('.')[1].replace('Aria',''))}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              {social.icon}
            </a>
          </Button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;