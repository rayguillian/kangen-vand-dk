import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // ShadCN Accordion

const FAQSection: React.FC = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      id: 'faq-consumer-q1',
      questionKey: 'faq.consumerConcerns.q1.question',
      answerKey: 'faq.consumerConcerns.q1.answer',
    },
    {
      id: 'faq-consumer-q2',
      questionKey: 'faq.consumerConcerns.q2.question',
      answerKey: 'faq.consumerConcerns.q2.answer',
    },
    {
      id: 'faq-installation-q1',
      questionKey: 'faq.installation.q1.question',
      answerKey: 'faq.installation.q1.answer',
    },
    {
      id: 'faq-maintenance-q1',
      questionKey: 'faq.maintenance.q1.question',
      answerKey: 'faq.maintenance.q1.answer',
    },
  ];

  return (
    <section id="faq-section" className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"> {/* Constrained width */}
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {t('faq.title', 'Ofte Stillede Spørgsmål')}
      </h2>
      <Accordion type="single" collapsible defaultValue={faqItems.length > 0 ? faqItems[0].id : undefined} className="w-full space-y-3">
        {faqItems.map((item) => (
          <AccordionItem 
            key={item.id} 
            value={item.id}
            className="rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-card-foreground hover:no-underline">
              {t(item.questionKey, `Spørgsmål ${item.id}`)}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
              <div className="whitespace-pre-line text-sm">
                {t(item.answerKey, 'Svar kommer snart...')}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;