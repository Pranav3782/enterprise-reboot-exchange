
export interface Seller {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  logo: string;
  joinedDate: string;
  rating: number;
}

export const sellers: Seller[] = [
  {
    id: "1",
    companyName: "TechStream Solutions",
    contactPerson: "Alex Morgan",
    email: "alex@techstream.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    description: "IT services company specializing in cloud solutions and infrastructure management.",
    logo: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    joinedDate: "2021-05-15",
    rating: 4.8
  },
  {
    id: "2",
    companyName: "GreenLeaf Manufacturing",
    contactPerson: "Jamie Wilson",
    email: "jamie@greenleaf.com",
    phone: "+1 (555) 987-6543",
    location: "Portland, OR",
    description: "Sustainable manufacturing company focused on eco-friendly production methods.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    joinedDate: "2022-01-10",
    rating: 4.6
  },
  {
    id: "3",
    companyName: "Nova Office Solutions",
    contactPerson: "Sam Taylor",
    email: "sam@novaoffice.com",
    phone: "+1 (555) 456-7890",
    location: "New York, NY",
    description: "Office equipment supplier with a focus on ergonomic and modern workspace solutions.",
    logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    joinedDate: "2020-11-22",
    rating: 4.9
  },
  {
    id: "4",
    companyName: "Quantum Industries",
    contactPerson: "Robin Chang",
    email: "robin@quantum.com",
    phone: "+1 (555) 234-5678",
    location: "Austin, TX",
    description: "Technology hardware manufacturer specializing in custom and specialized equipment.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    joinedDate: "2022-03-05",
    rating: 4.7
  },
  {
    id: "5",
    companyName: "Meridian Logistics",
    contactPerson: "Jordan Patel",
    email: "jordan@meridian.com",
    phone: "+1 (555) 876-5432",
    location: "Chicago, IL",
    description: "Logistics and supply chain management company with a diverse fleet of transport vehicles.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    joinedDate: "2021-08-17",
    rating: 4.5
  }
];
