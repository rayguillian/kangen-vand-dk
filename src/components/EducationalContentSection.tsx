import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // ShadCN Accordion
// Optional: Import lucide-react icons if you want to add them to accordion triggers
// import { Droplets, AlertTriangle, FlaskConical } from 'lucide-react';

const EducationalContentSection = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'contaminants',
      titleKey: 'educationalContent.contaminants.title',
      contentKey: 'educationalContent.contaminants.content',
      // icon: <Droplets size={20} className="mr-2 text-primary" />, // Example
    },
    {
      id: 'healthImplications',
      titleKey: 'educationalContent.healthImplications.title',
      contentKey: 'educationalContent.healthImplications.content',
      // icon: <AlertTriangle size={20} className="mr-2 text-primary" />, // Example
    },
    {
      id: 'kangenSolution',
      titleKey: 'educationalContent.kangenSolution.title',
      contentKey: 'educationalContent.kangenSolution.content',
      // icon: <FlaskConical size={20} className="mr-2 text-primary" />, // Example
    },
  ];

  return (
    <section id="educational-content-section" className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {t('educationalContent.mainTitle', 'Viden om Vand: Forstå Kontaminanter og Løsninger')}
      </h2>
      <div className="mx-auto max-w-3xl"> {/* Constrain width of the accordion */}
        <Accordion type="single" collapsible defaultValue={sections.length > 0 ? sections[0].id : undefined} className="w-full space-y-3">
          {sections.map((section) => (
            <AccordionItem 
              key={section.id} 
              value={section.id} 
              className="rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-card-foreground hover:no-underline">
                {/* {section.icon} */}
                {t(section.titleKey)}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                <div className="whitespace-pre-line text-sm">
                  {t(section.contentKey)}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default EducationalContentSection;