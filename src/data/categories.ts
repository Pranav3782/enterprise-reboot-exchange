
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Office Equipment",
    description: "Desks, chairs, cabinets, and other office furniture",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "office-equipment"
  },
  {
    id: "2",
    name: "Electronics",
    description: "Computers, monitors, phones, and other electronic devices",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "electronics"
  },
  {
    id: "3",
    name: "Inventory & Stock",
    description: "Excess inventory, materials, and supplies",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "inventory-stock"
  },
  {
    id: "4",
    name: "Manufacturing Equipment",
    description: "Industrial machinery and manufacturing equipment",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "manufacturing-equipment"
  },
  {
    id: "5",
    name: "Software & Licenses",
    description: "Software licenses, subscriptions, and digital assets",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "software-licenses"
  },
  {
    id: "6",
    name: "Vehicles & Transport",
    description: "Company vehicles, transport equipment, and logistics assets",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "vehicles-transport"
  },
];
