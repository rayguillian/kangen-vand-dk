import { useTranslation } from 'react-i18next';
import { useProducts } from '../hooks/useProducts';
import type { Product } from '../hooks/useProducts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertTriangle, CheckCircle } from 'lucide-react'; // Lucide icons

interface ProductDisplayInfo extends Product {
  benefitsKeys: string[];
  imagePlaceholderKey: string;
  actualImageUrl?: string;
}

const ProductShowcaseSection = () => {
  const { t } = useTranslation();
  const { data: productsData, isLoading, error } = useProducts();

  const productsToDisplay: ProductDisplayInfo[] = productsData?.map((p: Product): ProductDisplayInfo => {
    let benefitsKeys: string[] = [];
    let imagePlaceholderKey = 'productShowcase.genericImagePlaceholder';
    let actualImageUrl: string | undefined;

    if (p.name.includes('K8')) {
      benefitsKeys = ['productShowcase.k8.benefit1', 'productShowcase.k8.benefit2'];
      imagePlaceholderKey = 'productShowcase.k8.imagePlaceholder';
      actualImageUrl = '/images/placeholder-k8.jpg';
    } else if (p.name.includes('SD501')) {
      benefitsKeys = ['productShowcase.sd501.benefit1', 'productShowcase.sd501.benefit2'];
      imagePlaceholderKey = 'productShowcase.sd501.imagePlaceholder';
      actualImageUrl = '/images/placeholder-sd501.jpg';
    } else if (p.name.includes('LeveLuk R')) {
      benefitsKeys = ['productShowcase.levelukR.benefit1', 'productShowcase.levelukR.benefit2'];
      imagePlaceholderKey = 'productShowcase.levelukR.imagePlaceholder';
      actualImageUrl = '/images/placeholder-leveluk-r.jpg';
    }
    return { ...p, benefitsKeys, imagePlaceholderKey, actualImageUrl };
  }) || [];

  return (
    <section id="product-showcase-section" className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {t('productShowcase.title', 'Vores Kangen Vand® Maskiner')}
      </h2>

      {isLoading && (
        <div className="my-10 flex justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}
      {error && (
        <Alert variant="destructive" className="my-6 mx-auto max-w-2xl">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>{t('error.genericTitle', 'Fejl')}</AlertTitle>
          <AlertDescription>
            {t('error.loadingProducts', 'Kunne ikke indlæse produkter: {{message}}', { message: error.message })}
          </AlertDescription>
        </Alert>
      )}

      {!isLoading && !error && productsToDisplay.length > 0 && (
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {productsToDisplay.map((product) => (
            <Card key={product.id} className="flex h-full flex-col overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-xl">
              <div className="relative h-56 w-full bg-muted">
                {product.actualImageUrl ? (
                  <img
                    src={product.actualImageUrl}
                    alt={t(product.name, product.name)}
                    className="h-full w-full object-contain" // Changed to object-contain
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-4">
                    <p className="text-center text-sm text-muted-foreground">
                      {t(product.imagePlaceholderKey, 'Product Image Placeholder')}
                    </p>
                  </div>
                )}
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">{t(product.name, product.name)}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col">
                <CardDescription className="mb-4 text-sm text-muted-foreground">
                  {t(product.description, product.description)}
                </CardDescription>
                <h4 className="mb-2 mt-auto text-sm font-medium text-foreground">
                  {t('productShowcase.keyBenefits', 'Nøglefordele')}
                </h4>
                <ul className="space-y-1 text-sm">
                  {product.benefitsKeys.map((benefitKey, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span className="text-muted-foreground">{t(benefitKey)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {!isLoading && !error && productsToDisplay.length === 0 && (
         <p className="my-10 text-center text-muted-foreground">
            {t('productShowcase.noProducts', 'Ingen produkter tilgængelige i øjeblikket.')}
        </p>
      )}

      <div className="my-12 rounded-lg border bg-card p-6 text-center shadow-sm md:p-8">
        <h3 className="mb-3 text-xl font-semibold text-card-foreground sm:text-2xl">
          {t('productShowcase.comparisonTablePlaceholder', '[Pladsholder for Sammenligningstabel]')}
        </h3>
        {/* Placeholder for actual comparison table component or content */}
      </div>

      <div className="my-12 rounded-lg border bg-card p-6 text-center shadow-sm md:p-8">
        <h3 className="mb-3 text-xl font-semibold text-card-foreground sm:text-2xl">
          {t('productShowcase.videoDemosPlaceholder', '[Pladsholder for Videodemonstrationer]')}
        </h3>
        {/* Placeholder for actual video embedding component or content */}
      </div>
    </section>
  );
};

export default ProductShowcaseSection;