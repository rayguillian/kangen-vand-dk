import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator'; // ShadCN Separator
import { cn } from '@/lib/utils';

const ProblemAwarenessSection = () => {
  const { t } = useTranslation();

  const placeholderClasses = cn(
    'border-2 border-dashed border-muted-foreground p-6 text-center min-h-[250px]',
    'flex flex-col items-center justify-center bg-muted/30 rounded-lg my-4 flex-grow'
  );

  const researchSources = [
    { key: 'DPLAP', nameKey: 'problemAwareness.sourceDPLAP' },
    { key: 'GEUS', nameKey: 'problemAwareness.sourceGEUS' },
    { key: 'UCPH', nameKey: 'problemAwareness.sourceUCPH' },
    { key: 'NordicCouncil', nameKey: 'problemAwareness.sourceNordicCouncil' },
    { key: 'DEPA', nameKey: 'problemAwareness.sourceDEPA' },
  ];

  return (
    <section id="problem-awareness-section" className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {t('problemAwareness.title', 'Forstå Vandkvalitetsudfordringen i Danmark')}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col rounded-xl bg-card p-6 shadow-lg">
          <h3 className="mb-4 text-center text-xl font-semibold text-card-foreground sm:text-2xl">
            {t('problemAwareness.dataVizTitle', 'Pesticidtrends i Grundvand')}
          </h3>
          <div className={placeholderClasses}>
            <p className="text-muted-foreground">
              {t('problemAwareness.dataVizPlaceholder', '[Pladsholder for Datavisualisering...]')}
            </p>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {t('problemAwareness.dataVizExplanation', 'Denne visualisering vil illustrere tendensen...')}
          </p>
        </div>
        <div className="flex flex-col rounded-xl bg-card p-6 shadow-lg">
          <h3 className="mb-4 text-center text-xl font-semibold text-card-foreground sm:text-2xl">
            {t('problemAwareness.mapTitle', 'Påvirkede Regioner i Danmark')}
          </h3>
          <div className={placeholderClasses}>
            <p className="text-muted-foreground">
              {t('problemAwareness.mapPlaceholder', '[Pladsholder for Interaktivt Kort...]')}
            </p>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {t('problemAwareness.mapExplanation', 'Dette interaktive kort vil udpege de områder...')}
          </p>
        </div>
      </div>
      <div className="mt-16 pt-10">
        <Separator />
        <div className="mt-10">
          <h3 className="mb-6 text-center text-2xl font-semibold text-foreground sm:text-3xl">
            {t('problemAwareness.researchTitle', 'Nøgleforskning & Datakilder')}
          </h3>
          <p className="mb-8 text-center text-muted-foreground md:text-lg">
            {t('problemAwareness.researchIntro', 'Den præsenterede information understøttes af resultater...')}
          </p>
          <ul className="mx-auto max-w-md space-y-2">
            {researchSources.map(source => (
              <li key={source.key} className="text-center text-muted-foreground">
                <span className="font-medium text-foreground">{t(source.nameKey, source.key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemAwarenessSection;