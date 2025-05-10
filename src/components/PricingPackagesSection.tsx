import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, Tag, CreditCard } from 'lucide-react'; // Lucide icons
import { cn } from '@/lib/utils';

const PricingPackagesSection: React.FC = () => {
  const { t } = useTranslation();

  interface PricingTier {
    id: string;
    nameKey: string;
    priceKey: string;
    descriptionKey: string;
    features: string[];
    highlighted?: boolean;
  }

  const pricingTiers: PricingTier[] = [
    {
      id: 'tier1',
      nameKey: 'pricingPackages.pricingStructure.tier1.name',
      priceKey: 'pricingPackages.pricingStructure.tier1.price',
      descriptionKey: 'pricingPackages.pricingStructure.tier1.description',
      features: [ // Example features
        'pricingPackages.pricingStructure.tier1.feature1',
        'pricingPackages.pricingStructure.tier1.feature2',
        'pricingPackages.pricingStructure.tier1.feature3',
      ]
    },
    {
      id: 'tier2',
      nameKey: 'pricingPackages.pricingStructure.tier2.name',
      priceKey: 'pricingPackages.pricingStructure.tier2.price',
      descriptionKey: 'pricingPackages.pricingStructure.tier2.description',
      features: [
        'pricingPackages.pricingStructure.tier2.feature1',
        'pricingPackages.pricingStructure.tier2.feature2',
        'pricingPackages.pricingStructure.tier2.feature3',
      ],
      highlighted: true, // Example to highlight a tier
    },
    {
      id: 'tier3',
      nameKey: 'pricingPackages.pricingStructure.tier3.name',
      priceKey: 'pricingPackages.pricingStructure.tier3.price',
      descriptionKey: 'pricingPackages.pricingStructure.tier3.description',
      features: [
        'pricingPackages.pricingStructure.tier3.feature1',
        'pricingPackages.pricingStructure.tier3.feature2',
        'pricingPackages.pricingStructure.tier3.feature3',
      ]
    },
  ];

  return (
    <section id="pricing-packages-section" className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {t('pricingPackages.sectionTitle', 'Priser & Pakker Tilpasset Danmark')}
      </h2>

      {/* Subsection 1: Danish-Specific Pricing */}
      <div className="mb-16 rounded-xl bg-muted/20 p-6 shadow-md md:p-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <CheckCircle className="mb-3 h-10 w-10 text-primary sm:h-12 sm:w-12" />
          <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
            {t('pricingPackages.pricingStructure.title', 'Vores Prisstruktur (DKK)')}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.id} 
              className={cn(
                "flex h-full flex-col overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 ease-in-out",
                tier.highlighted ? "border-2 border-primary ring-2 ring-primary/50 scale-105" : "hover:shadow-xl"
              )}
            >
              <CardHeader className={cn("pb-4 text-center", tier.highlighted ? "bg-primary/10" : "")}>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {t(tier.nameKey, `Pakke ${tier.id}`)}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col p-6">
                <div className="mb-4 text-center">
                  <span className="text-4xl font-bold text-primary">
                    {t(tier.priceKey, 'XX.XXX DKK')}
                  </span>
                  {/* <span className="text-sm text-muted-foreground">/md</span> */}
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  {t(tier.descriptionKey, 'Nøglefunktioner for denne model.')}
                </p>
                {tier.features && tier.features.length > 0 && (
                  <ul className="mb-6 space-y-2 text-sm">
                    {tier.features.map((featureKey, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span className="text-muted-foreground">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Button 
                  size="lg" 
                  className={cn(
                    "mt-auto w-full font-semibold",
                    tier.highlighted ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  )}
                >
                  {t('pricingPackages.learnMore', 'Lær Mere')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm italic text-muted-foreground">
          {t('pricingPackages.pricingStructure.contentPlaceholder', '[Pladsholder for Prisniveauer...]')}
        </p>
      </div>

      {/* Subsection 2: Special Offers */}
      <div className="mb-16 rounded-xl bg-muted/20 p-6 shadow-md md:p-8">
        <div className="mb-6 flex flex-col items-center text-center">
          <Tag className="mb-3 h-10 w-10 text-primary sm:h-12 sm:w-12" />
          <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
            {t('pricingPackages.specialOffers.title', 'Særlige Tilbud Baseret på Vandkvalitet')}
          </h3>
        </div>
        <Alert className="mx-auto max-w-3xl border-primary/50 bg-primary/5 text-primary">
          <Tag className="h-5 w-5 text-primary" />
          <AlertTitle className="font-semibold text-primary">Information</AlertTitle>
          <AlertDescription className="text-primary/90">
            {t('pricingPackages.specialOffers.contentPlaceholder', '[Pladsholder for Særlige Tilbud...]')}
          </AlertDescription>
        </Alert>
      </div>

      {/* Subsection 3: Financing Options */}
      <div className="rounded-xl bg-muted/20 p-6 shadow-md md:p-8">
        <div className="mb-6 flex flex-col items-center text-center">
          <CreditCard className="mb-3 h-10 w-10 text-primary sm:h-12 sm:w-12" />
          <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
            {t('pricingPackages.financingOptions.title', 'Fleksible Finansieringsmuligheder')}
          </h3>
        </div>
        <Card className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-card shadow-lg">
          <CardContent className="p-6 md:p-8">
            <p className="text-muted-foreground">
              {t('pricingPackages.financingOptions.contentPlaceholder', '[Pladsholder for Finansieringsmuligheder...]')}
            </p>
            {/* <Button variant="outline" className="mt-6">Forespørg om Finansiering</Button> */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingPackagesSection;