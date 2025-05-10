import { useTranslation } from 'react-i18next';
import {
  Menu,
  Search,
  User,
  ShoppingCart,
  Home,
  Info,
  Wrench, // Replaced BuildIcon
  Store, // Replaced StorefrontIcon
  FlaskConical, // Replaced ScienceIcon
  MessageSquare, // Replaced RecordVoiceOverIcon
  Tags, // Replaced PriceChangeIcon
  HelpCircle, // Replaced HelpOutlineIcon
  Mail, // Replaced ContactMailIcon
  X, // For Sheet close button
} from 'lucide-react';

import { Button } from '@/components/ui/button'; // ShadCN Button
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // Added SheetClose
} from '@/components/ui/sheet'; // ShadCN Sheet
import { Separator } from '@/components/ui/separator'; // ShadCN Separator
import useAppStore from '../../store'; // Import Zustand store
import { cn } from '@/lib/utils'; // Utility for class names

const Navbar = () => {
  const { t } = useTranslation();
  const isMobileMenuOpen = useAppStore((state) => state.isMobileMenuOpen);
  const toggleMobileMenu = useAppStore((state) => state.toggleMobileMenu);

  const navItems = [
    { labelKey: 'navbar.home', href: '#hero-section', icon: <Home size={20} /> },
    { labelKey: 'navbar.problem', href: '#problem-awareness-section', icon: <Info size={20} /> },
    { labelKey: 'navbar.solutions', href: '#educational-content-section', icon: <Wrench size={20} /> },
    { labelKey: 'navbar.products', href: '#product-showcase-section', icon: <Store size={20} /> },
    { labelKey: 'navbar.science', href: '#scientific-backing-section', icon: <FlaskConical size={20} /> },
    { labelKey: 'navbar.testimonials', href: '#testimonials-section', icon: <MessageSquare size={20} /> },
    { labelKey: 'navbar.pricing', href: '#pricing-packages-section', icon: <Tags size={20} /> },
    { labelKey: 'navbar.faq', href: '#faq-section', icon: <HelpCircle size={20} /> },
    { labelKey: 'navbar.contact', href: '#contact-support-section', icon: <Mail size={20} /> },
  ];

  const iconActions = [
    { name: 'Search', icon: <Search size={22} />, action: () => console.log('Search clicked') },
    { name: 'Profile', icon: <User size={22} />, action: () => console.log('Profile clicked') },
    { name: 'Cart', icon: <ShoppingCart size={22} />, action: () => console.log('Cart clicked') },
  ];

  const NavLink = ({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) => (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md',
        className
      )}
    >
      {children}
    </a>
  );

  const DrawerNavItem = ({ href, labelKey, icon, onClick }: { href: string; labelKey: string; icon: React.ReactNode; onClick: () => void }) => (
    <SheetClose asChild>
      <a
        href={href}
        onClick={onClick}
        className="flex items-center py-3 px-4 text-foreground hover:bg-muted rounded-md transition-colors"
      >
        <span className="mr-3 text-primary">{icon}</span>
        {t(labelKey)}
      </a>
    </SheetClose>
  );

  const DrawerIconActionItem = ({ name, icon, action, onClick }: { name: string; icon: React.ReactNode; action: () => void; onClick: () => void }) => (
     <SheetClose asChild>
      <button
        onClick={() => { action(); onClick(); }}
        className="flex items-center w-full text-left py-3 px-4 text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors"
      >
        <span className="mr-3">{icon}</span>
        {name}
      </button>
    </SheetClose>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero-section" className="mr-6 flex items-center space-x-2">
          {/* Placeholder for a logo image if you have one */}
          {/* <img src="/path-to-your-logo.svg" alt="Kangen Vand DK Logo" className="h-6 w-auto" /> */}
          <span className="font-bold text-xl text-primary">{t('navbar.logo', 'Kangen Vand DK')}</span>
        </a>

        <nav className="hidden md:flex flex-grow items-center justify-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.labelKey} href={item.href}>
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-1">
          {iconActions.map((action) => (
            <Button key={action.name} variant="ghost" size="icon" onClick={action.action} aria-label={action.name}>
              {action.icon}
            </Button>
          ))}
          {/* Optional: Theme Toggle Button for Desktop */}
          {/* <ModeToggle /> */}
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={toggleMobileMenu}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0 flex flex-col">
              <SheetHeader className="p-6 pb-4">
                <SheetTitle className="flex items-center justify-between">
                  <a href="#hero-section" onClick={toggleMobileMenu} className="flex items-center space-x-2">
                     {/* <img src="/path-to-your-logo.svg" alt="Kangen Vand DK Logo" className="h-6 w-auto" /> */}
                    <span className="font-bold text-lg text-primary">{t('navbar.logo', 'Kangen Vand DK')}</span>
                  </a>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="-mr-2">
                      <X size={20} />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <Separator />
              <div className="flex-grow overflow-y-auto p-4 space-y-2">
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <DrawerNavItem
                      key={item.labelKey}
                      href={item.href}
                      labelKey={item.labelKey}
                      icon={item.icon}
                      onClick={toggleMobileMenu}
                    />
                  ))}
                </nav>
                <Separator className="my-4" />
                <div className="space-y-1">
                   <p className="px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Værktøjer</p>
                  {iconActions.map((actionItem) => (
                    <DrawerIconActionItem
                      key={actionItem.name}
                      name={actionItem.name}
                      icon={actionItem.icon}
                      action={actionItem.action}
                      onClick={toggleMobileMenu}
                    />
                  ))}
                </div>
                {/* Optional: Theme Toggle Button for Mobile */}
                {/* <div className="p-4 mt-auto border-t"> <ModeToggle /> </div> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;