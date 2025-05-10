import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlaskConical, ShieldCheck, BarChart3 } from 'lucide-react'; // Lucide icons
import { Separator } from '@/components/ui/separator'; // ShadCN Separator
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // ShadCN Card

const ScientificBackingSection: React.FC = () => {
  const { t } = useTranslation();

  const researchFindings = [
    { titleKey: 'scientificBacking.researchFindings.finding1.title', descriptionKey: 'scientificBacking.researchFindings.finding1.description' },
    { titleKey: 'scientificBacking.researchFindings.finding2.title', descriptionKey: 'scientificBacking.researchFindings.finding2.description' },
    { titleKey: 'scientificBacking.researchFindings.finding3.title', descriptionKey: 'scientificBacking.researchFindings.finding3.description' },
  ];

  return (
    <section id="scientific-backing-section" className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {t('scientificBacking.title', 'Videnskabelig Baggrund for Rent Vand')}
      </h2>

      {/* Subsection 1: Summarized Research Findings */}
      <Card className="mb-10 overflow-hidden shadow-lg">
        <CardHeader className="bg-muted/30">
          <div className="flex items-center">
            <FlaskConical className="mr-3 h-7 w-7 text-primary sm:h-8 sm:w-8" />
            <CardTitle className="text-xl font-semibold text-foreground sm:text-2xl">
              {t('scientificBacking.researchFindings.title', 'Nøglefund fra Dansk & Skandinavisk Vandkvalitetsforskning')}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <ul className="space-y-6">
            {researchFindings.map((finding, index) => (
              <React.Fragment key={index}>
                <li>
                  <h4 className="mb-1 text-lg font-semibold text-foreground">
                    {t(finding.titleKey)}
                  </h4>
                  <p className="text-muted-foreground">
                    {t(finding.descriptionKey)}
                  </p>
                </li>
                {index < researchFindings.length - 1 && <Separator className="my-6" />}
              </React.Fragment>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Subsection 2: Expert Testimonials Placeholder */}
      <Card className="mb-10 overflow-hidden shadow-lg">
        <CardHeader className="bg-muted/30">
          <div className="flex items-center">
            <ShieldCheck className="mr-3 h-7 w-7 text-primary sm:h-8 sm:w-8" />
            <CardTitle className="text-xl font-semibold text-foreground sm:text-2xl">
              {t('scientificBacking.expertTestimonials.title', 'Udtalelser fra Danske Miljøforskere')}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <p className="italic text-muted-foreground">
            {t('scientificBacking.expertTestimonials.placeholder', '[Pladsholder for Ekspertudtalelser...]')}
          </p>
          {/* Placeholder for actual testimonials layout */}
        </CardContent>
      </Card>

      {/* Subsection 3: Before/After Water Testing Results Placeholder */}
      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-muted/30">
          <div className="flex items-center">
            <BarChart3 className="mr-3 h-7 w-7 text-primary sm:h-8 sm:w-8" />
            <CardTitle className="text-xl font-semibold text-foreground sm:text-2xl">
              {t('scientificBacking.waterTestingResults.title', 'Før & Efter Vandtestresultater')}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <p className="italic text-muted-foreground">
            {t('scientificBacking.waterTestingResults.placeholder', '[Pladsholder for Før & Efter Vandtestresultater...]')}
          </p>
          {/* Placeholder for actual results display (e.g., charts, tables) */}
        </CardContent>
      </Card>
    </section>
  );
};

export default ScientificBackingSection;