import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, CalendarCheck, Send, Headset } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSupportSection: React.FC = () => {
  const { t } = useTranslation();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmitWaterTestRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Water test request submitted:', formValues);
    alert(t('contactSupport.waterTest.form.submitSuccess', 'Tak! Din anmodning om vandtest er sendt. Vi kontakter dig snarest.'));
    setFormValues({ name: '', email: '', phone: '', message: '' });
  };

  const handleSpeakToSpecialist = () => {
    console.log('Speak to specialist clicked');
    alert(t('contactSupport.speakToSpecialist.actionPlaceholder', 'Ring til os på +45 XX XX XX XX for at tale med en specialist.'));
  };

  const contactInfo = [
    { icon: <Mail size={18} className="mr-2 text-primary" />, textKey: 'contactSupport.danishSupport.emailExample', defaultText: 'Email: support@kangen-vand.dk' },
    { icon: <Phone size={18} className="mr-2 text-primary" />, textKey: 'contactSupport.danishSupport.phoneExample', defaultText: 'Tlf: +45 XX XX XX XX' },
    { icon: <CalendarCheck size={18} className="mr-2 text-primary" />, textKey: 'contactSupport.danishSupport.hoursExample', defaultText: 'Åbningstider: Man-Fre 09:00-17:00' },
  ];

  return (
    <section id="contact-support-section" className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {t('contactSupport.title', 'Kontakt & Support i Danmark')}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
        {/* Danish Customer Support */}
        <Card className="flex h-full flex-col overflow-hidden rounded-xl shadow-lg">
          <CardHeader>
            <div className="mb-2 flex items-center">
              <Phone className="mr-3 h-7 w-7 text-primary sm:h-8 sm:w-8" />
              <CardTitle className="text-xl font-semibold text-foreground sm:text-2xl">
                {t('contactSupport.danishSupport.title', 'Dansk Kundesupport')}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-grow flex-col">
            <p className="mb-4 text-sm text-muted-foreground">
              {t('contactSupport.danishSupport.placeholder', 'Kontakt os for spørgsmål eller support.')}
            </p>
            <ul className="mb-6 space-y-2 text-sm">
              {contactInfo.map(info => (
                <li key={info.textKey} className="flex items-center text-muted-foreground">
                  {info.icon}
                  <span>{t(info.textKey, info.defaultText)}</span>
                </li>
              ))}
            </ul>
            <Separator className="my-4" />
            <Button 
              variant="outline" 
              onClick={handleSpeakToSpecialist} 
              className="mt-auto w-full border-primary text-primary hover:bg-primary/10 hover:text-primary"
            >
              <Headset className="mr-2 h-5 w-5" />
              {t('contactSupport.speakToSpecialist.buttonText', 'Tal med en Dansk Vand Specialist')}
            </Button>
          </CardContent>
        </Card>

        {/* Local Dealer Map */}
        <Card className="flex h-full flex-col overflow-hidden rounded-xl shadow-lg">
          <CardHeader>
            <div className="mb-2 flex items-center">
              <MapPin className="mr-3 h-7 w-7 text-primary sm:h-8 sm:w-8" />
              <CardTitle className="text-xl font-semibold text-foreground sm:text-2xl">
                {t('contactSupport.dealerMap.title', 'Find Din Lokale Forhandler')}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-grow flex-col">
            <div className={cn(
              'flex-grow min-h-[200px] flex items-center justify-center rounded-md border-2 border-dashed border-muted-foreground bg-muted/30 p-4 text-center'
            )}>
              <p className="text-sm text-muted-foreground">
                {t('contactSupport.dealerMap.placeholder', '[Pladsholder for Lokalt Forhandlerkort...]')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* In-Home Water Testing Form */}
        <Card className="flex h-full flex-col overflow-hidden rounded-xl shadow-lg">
          <CardHeader>
            <div className="mb-2 flex items-center">
              <CalendarCheck className="mr-3 h-7 w-7 text-primary sm:h-8 sm:w-8" />
              <CardTitle className="text-xl font-semibold text-foreground sm:text-2xl">
                {t('contactSupport.waterTest.title', 'Book en Gratis Vandtest')}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-grow flex-col">
            <p className="mb-4 text-sm text-muted-foreground">
              {t('contactSupport.waterTest.placeholder', 'Udfyld formularen for at booke en uforpligtende vandtest i dit hjem.')}
            </p>
            <form onSubmit={handleSubmitWaterTestRequest} className="flex flex-grow flex-col space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground">{t('contactSupport.waterTest.form.name', 'Navn')}</Label>
                <Input id="name" name="name" value={formValues.name} onChange={handleInputChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">{t('contactSupport.waterTest.form.email', 'Email')}</Label>
                <Input id="email" name="email" type="email" value={formValues.email} onChange={handleInputChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">{t('contactSupport.waterTest.form.phone', 'Telefon')}</Label>
                <Input id="phone" name="phone" type="tel" value={formValues.phone} onChange={handleInputChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">{t('contactSupport.waterTest.form.message', 'Besked (valgfri)')}</Label>
                <Textarea id="message" name="message" value={formValues.message} onChange={handleInputChange} rows={3} className="mt-1" />
              </div>
              <Button type="submit" className="mt-auto w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Send className="mr-2 h-5 w-5" />
                {t('contactSupport.waterTest.buttonText', 'Send Anmodning')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSupportSection;