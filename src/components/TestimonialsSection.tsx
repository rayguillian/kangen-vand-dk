import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Building2, Star } from 'lucide-react'; // Lucide icons

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const customerTestimonials = [
    { id: 'cust1', quoteKey: 'testimonials.successStories.placeholder.quote', nameKey: 'testimonials.successStories.placeholder.customerName', avatarInitial: 'K1' },
    { id: 'cust2', quoteKey: 'testimonials.successStories.placeholder.quote', nameKey: 'testimonials.successStories.placeholder.customerName', avatarInitial: 'K2' },
    { id: 'cust3', quoteKey: 'testimonials.successStories.placeholder.quote', nameKey: 'testimonials.successStories.placeholder.customerName', avatarInitial: 'K3' },
  ];

  const businessEndorsements = [
    { id: 'biz1', nameKey: 'testimonials.businessEndorsements.placeholder.businessName', typeKey: 'testimonials.businessEndorsements.placeholder.businessType', quoteKey: 'testimonials.businessEndorsements.placeholder.quote', avatarInitial: 'V1' },
    { id: 'biz2', nameKey: 'testimonials.businessEndorsements.placeholder.businessName', typeKey: 'testimonials.businessEndorsements.placeholder.businessType', quoteKey: 'testimonials.businessEndorsements.placeholder.quote', avatarInitial: 'V2' },
  ];

  return (
    <section id="testimonials-section" className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {t('testimonials.title', 'Hvad Vores Danske Kunder Siger')}
      </h2>

      {/* Subsection 1: Success Stories from Danish Customers */}
      <div className="mb-16 rounded-xl bg-muted/20 p-6 shadow-md md:p-8">
        <h3 className="mb-8 text-center text-2xl font-semibold text-foreground sm:text-3xl">
          {t('testimonials.successStories.title', 'Succeshistorier fra Danmark')}
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {customerTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex h-full flex-col overflow-hidden rounded-lg bg-card shadow-lg">
              <CardContent className="flex flex-grow flex-col items-center p-6 text-center">
                <Avatar className="mb-4 h-16 w-16 bg-secondary">
                  {/* <AvatarImage src="/path-to-customer-image.jpg" alt={t(testimonial.nameKey)} /> */}
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    <Star size={28} />
                  </AvatarFallback>
                </Avatar>
                <Quote className="h-8 w-8 rotate-180 text-muted-foreground" />
                <p className="my-4 flex-grow font-serif text-lg italic text-foreground">
                  "{t(testimonial.quoteKey, '[Pladsholder for et kort udtalelsescitat.]')}"
                </p>
                <Quote className="h-8 w-8 self-end text-muted-foreground" />
                <p className="mt-3 text-sm font-semibold text-primary">
                  - {t(testimonial.nameKey, '[Kundenavn, By]')}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm italic text-muted-foreground">
          {t('testimonials.successStories.placeholder.note', '[Pladsholder for Kundesucceshistorier note...]')}
        </p>
      </div>

      {/* Subsection 2: Before/After Experiences */}
      <div className="mb-16 rounded-xl bg-muted/20 p-6 shadow-md md:p-8">
        <h3 className="mb-8 text-center text-2xl font-semibold text-foreground sm:text-3xl">
          {t('testimonials.beforeAfter.title', 'Før & Efter Oplevelser')}
        </h3>
        <Card className="overflow-hidden rounded-lg bg-card shadow-lg">
          <CardContent className="p-6 text-center md:p-8">
            <Quote className="mx-auto mb-2 h-10 w-10 rotate-180 text-primary" />
            <p className="my-4 font-serif text-lg italic text-foreground md:text-xl">
              {t('testimonials.beforeAfter.placeholder', '[Pladsholder for Før/Efter Oplevelser...]')}
            </p>
            <Quote className="mx-auto h-10 w-10 text-primary" />
          </CardContent>
        </Card>
      </div>

      {/* Subsection 3: Local Business Endorsements */}
      <div className="rounded-xl bg-muted/20 p-6 shadow-md md:p-8">
        <h3 className="mb-8 text-center text-2xl font-semibold text-foreground sm:text-3xl">
          {t('testimonials.businessEndorsements.title', 'Anerkendelser fra Lokale Virksomheder')}
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {businessEndorsements.map((endorsement) => (
            <Card key={endorsement.id} className="flex h-full flex-col overflow-hidden rounded-lg bg-card shadow-lg md:flex-row md:items-center">
              <div className="p-6 md:pr-0">
                <Avatar className="mx-auto h-20 w-20 bg-primary md:mx-0">
                  {/* <AvatarImage src="/path-to-business-logo.png" alt={t(endorsement.nameKey)} /> */}
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Building2 size={32} />
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="flex-grow p-6 text-center md:text-left">
                <h4 className="text-lg font-semibold text-foreground">{t(endorsement.nameKey, '[Virksomhedsnavn]')}</h4>
                <p className="mb-2 text-sm text-muted-foreground">{t(endorsement.typeKey, '[Type af Virksomhed]')}</p>
                <p className="font-serif text-base italic text-foreground">
                  "{t(endorsement.quoteKey, '[Pladsholder for en kort anerkendelse.]')}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm italic text-muted-foreground">
          {t('testimonials.businessEndorsements.placeholder.note', '[Pladsholder for Lokale Virksomhedsanerkendelser note...]')}
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;