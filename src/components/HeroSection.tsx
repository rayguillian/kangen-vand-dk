import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; // ShadCN Button
import { cn } from '@/lib/utils';

// TODO: Replace with an actual high-quality background image relevant to the theme.
// This could be a serene water-related image or an abstract background that fits the brand.
// Ensure the image is optimized for web use.
const HERO_BACKGROUND_IMAGE_URL = '/images/placeholder-hero-background.jpg'; // Example path

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero-section"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-16 text-center text-white md:py-24" // Assuming navbar height is h-16 (4rem)
      style={{
        backgroundImage: `url(${HERO_BACKGROUND_IMAGE_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="container relative z-20 mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <h1
          className={cn(
            'mb-4 font-bold leading-tight tracking-tighter',
            'text-4xl sm:text-5xl md:text-6xl lg:text-7xl', // Responsive font sizes
            'text-shadow-md' // Custom text shadow utility (needs to be defined in tailwind.config.js if not default)
          )}
          style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }} // Inline style for text shadow for now
        >
          {t('hero.headline', 'Er Dit Drikkevand Rent Nok? Bekymringer Stiger i Danmark')}
        </h1>
        <p
          className={cn(
            'mb-10 text-lg sm:text-xl md:text-2xl text-white/90',
            'text-shadow-sm' // Custom text shadow utility
          )}
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }} // Inline style for text shadow
        >
          {t('hero.subheadline', 'Oplev Forskellen Med Kangen Vand® - Din Kilde Til Renere, Sundere Vand')}
        </p>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Button
            size="lg" // Corresponds to MUI size="large"
            asChild // To render an <a> tag
            className={cn(
              'px-8 py-4 text-base font-bold md:px-10 md:py-5 md:text-lg', // Responsive padding and text size
              'bg-secondary text-secondary-foreground hover:bg-secondary/90', // Using secondary color from theme
              'shadow-lg hover:shadow-xl rounded-lg' // Added shadow and rounded corners
            )}
          >
            <a href="#problem-awareness-section">
              {t('hero.ctaButton', 'Få Rent Vand I Dag')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;