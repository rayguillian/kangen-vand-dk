import { useQuery } from '@tanstack/react-query';

// Define the shape of a product
export interface Product {
  id: string;
  name: string;
  description: string;
  // Add other product properties here, e.g., price, image, benefits
  // For example:
  // priceDKK: number;
  // imageUrl: string;
  // benefits: string[];
  // modelIdentifier: 'k8' | 'sd501' | 'levelukR'; // To match translation keys
}

// Mock product data (replace with actual data source or API call later)
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Kangen K8', // This name can be localized via t(`productShowcase.k8.name`) in component
    description: 'Topmodellen for optimal sundhed og hydrering.', // Localized in component
    // modelIdentifier: 'k8',
  },
  {
    id: '2',
    name: 'Kangen SD501 Platinum',
    description: 'Den populære og kraftfulde model for hele familien.',
    // modelIdentifier: 'sd501',
  },
  {
    id: '3',
    name: 'LeveLuk R',
    description: 'Introduktionsmodellen, perfekt til singler eller par.',
    // modelIdentifier: 'levelukR',
  },
];

// Mock async function to simulate fetching products
const fetchProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  // In a real application, this would be an API call:
  // const response = await fetch('/api/products');
  // if (!response.ok) {
  //   throw new Error('Network response was not ok');
  // }
  // return response.json();
  return mockProducts;
};

// Custom hook to fetch products
export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products'], // Unique key for this query
    queryFn: fetchProducts,
    // Optional: configure staleTime, cacheTime, etc.
    // staleTime: 5 * 60 * 1000, // 5 minutes
  });
};