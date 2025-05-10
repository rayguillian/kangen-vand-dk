// Removed Box and CssBaseline imports from @mui/material
// import { useTranslation } from 'react-i18next'; // No longer needed here
// import './App.css'; // Remove if not needed with Tailwind and new structure

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/HeroSection';
import ProblemAwarenessSection from './components/ProblemAwarenessSection';
import EducationalContentSection from './components/EducationalContentSection';
import ProductShowcaseSection from './components/ProductShowcaseSection';
import ScientificBackingSection from './components/ScientificBackingSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingPackagesSection from './components/PricingPackagesSection';
import FAQSection from './components/FAQSection';
import ContactSupportSection from './components/ContactSupportSection';

function App() {
  // const { t } = useTranslation(); // No longer needed here

  return (
    <div className="flex flex-col min-h-screen">
      {/* CssBaseline is not needed with Tailwind's preflight styles */}
      <Navbar />
      <main className="flex-grow">
        {/* Main content will go here, starting with HeroSection */}
        <HeroSection />
        <ProblemAwarenessSection />
        <EducationalContentSection />
        <ProductShowcaseSection />
        <ScientificBackingSection />
        <TestimonialsSection />
        <PricingPackagesSection />
        <FAQSection />
        <ContactSupportSection />
        {/* Other page content would follow */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
