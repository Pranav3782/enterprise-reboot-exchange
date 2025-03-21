
import { sellers } from './sellers';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'Refurbished';
  images: string[];
  category: string;
  quantity: number;
  sellerId: string;
  location: string;
  listedDate: string;
  featured: boolean;
  slug: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Herman Miller Aeron Chair",
    description: "Lightly used Herman Miller Aeron Chair, Size B, with lumbar support. Perfect condition with all adjustment mechanisms working properly.",
    price: 499,
    condition: "Like New",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    category: "1", // Office Equipment
    quantity: 3,
    sellerId: "3", // Nova Office Solutions
    location: "New York, NY",
    listedDate: "2023-11-15",
    featured: true,
    slug: "herman-miller-aeron-chair"
  },
  {
    id: "2",
    title: "Dell XPS 15 Laptop Bundle",
    description: "Lot of 5 Dell XPS 15 laptops. Intel i7, 16GB RAM, 512GB SSD. All in excellent working condition with minimal cosmetic wear. Original chargers included.",
    price: 3200,
    condition: "Good",
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    category: "2", // Electronics
    quantity: 5,
    sellerId: "1", // TechStream Solutions
    location: "San Francisco, CA",
    listedDate: "2023-12-01",
    featured: true,
    slug: "dell-xps-15-laptop-bundle"
  },
  {
    id: "3",
    title: "Sustainable Packaging Materials",
    description: "Excess eco-friendly packaging materials including biodegradable peanuts, recycled cardboard boxes, and compostable mailers. Perfect for e-commerce businesses.",
    price: 750,
    condition: "New",
    images: [
      "https://images.unsplash.com/photo-1607583443741-536934d79735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585999058879-fb6a732d9fa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    category: "3", // Inventory & Stock
    quantity: 1000,
    sellerId: "2", // GreenLeaf Manufacturing
    location: "Portland, OR",
    listedDate: "2023-11-25",
    featured: false,
    slug: "sustainable-packaging-materials"
  },
  {
    id: "4",
    title: "CNC Milling Machine",
    description: "2020 Haas VF-2SS CNC Vertical Machining Center with 4th-axis capability. Low hours, well-maintained, and includes tooling package.",
    price: 45000,
    condition: "Good",
    images: [
      "https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    category: "4", // Manufacturing Equipment
    quantity: 1,
    sellerId: "4", // Quantum Industries
    location: "Austin, TX",
    listedDate: "2023-10-05",
    featured: true,
    slug: "cnc-milling-machine"
  },
  {
    id: "5",
    title: "Adobe Creative Cloud Licenses",
    description: "10 transferable Adobe Creative Cloud All Apps licenses, valid for 1 year. Ideal for design teams and creative departments.",
    price: 3800,
    condition: "New",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    category: "5", // Software & Licenses
    quantity: 10,
    sellerId: "1", // TechStream Solutions
    location: "San Francisco, CA",
    listedDate: "2023-11-18",
    featured: false,
    slug: "adobe-creative-cloud-licenses"
  },
  {
    id: "6",
    title: "2021 Ford Transit Cargo Van",
    description: "Low mileage 2021 Ford Transit 250 cargo van. Well-maintained with complete service records. Shelving units included.",
    price: 28500,
    condition: "Like New",
    images: [
      "https://images.unsplash.com/photo-1609752263402-140abc3d619d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534005921873-d18a547352fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    category: "6", // Vehicles & Transport
    quantity: 1,
    sellerId: "5", // Meridian Logistics
    location: "Chicago, IL",
    listedDate: "2023-12-10",
    featured: true,
    slug: "ford-transit-cargo-van"
  },
  {
    id: "7",
    title: "Office Desk Set (10 Units)",
    description: "Set of 10 matching adjustable height desks with cable management. Minimal wear, great for modern office spaces.",
    price: 2800,
    condition: "Good",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    category: "1", // Office Equipment
    quantity: 10,
    sellerId: "3", // Nova Office Solutions
    location: "New York, NY",
    listedDate: "2023-11-05",
    featured: false,
    slug: "office-desk-set"
  },
  {
    id: "8",
    title: "Conference Room A/V System",
    description: "Complete conference room audio/visual system including projector, screen, speakers, and control system. All in working order.",
    price: 4200,
    condition: "Good",
    images: [
      "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    category: "2", // Electronics
    quantity: 1,
    sellerId: "1", // TechStream Solutions
    location: "San Francisco, CA",
    listedDate: "2023-10-15",
    featured: true,
    slug: "conference-room-av-system"
  }
];

export const getProductsBySeller = (sellerId: string) => {
  return products.filter(product => product.sellerId === sellerId);
};

export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug);
};

export const getSellerById = (id: string) => {
  return sellers.find(seller => seller.id === id);
};
