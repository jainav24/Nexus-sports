export const categories = [
  { id: 1, name: "Football", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Basketball", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Running", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Training", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop" },
];

export const products = [
  {
    id: 1,
    name: "Nexus Pro Elite Cleats",
    price: 19999,
    category: "Football",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1610683416790-252fc0abeb2f?q=80&w=800&auto=format&fit=crop",
    description: "Engineered for explosive speed and ultimate control on the pitch.",
    inStock: true,
    brand: "Nexus",
    gender: "Men"
  },
  {
    id: 2,
    name: "Aero Glide Runners",
    price: 14999,
    category: "Running",
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    description: "Maximum cushioning and energy return for long distance running.",
    inStock: true,
    brand: "Nexus",
    gender: "Women"
  },
  {
    id: 3,
    name: "Court Master X",
    price: 12999,
    category: "Basketball",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=800&auto=format&fit=crop",
    description: "Premium ankle support and grip for the hardwood.",
    inStock: true,
    brand: "Nexus",
    gender: "Men"
  },
  {
    id: 4,
    name: "Flex Core Training Top",
    price: 3499,
    category: "Training",
    rating: 4.6,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
    description: "Moisture-wicking advanced fabric for intense workouts.",
    inStock: true,
    brand: "Nexus",
    gender: "Unisex"
  },
  {
    id: 5,
    name: "Speed Track Spikes",
    price: 9999,
    category: "Running",
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop",
    description: "Lightweight track spikes designed for sprinters.",
    inStock: false,
    brand: "Nexus",
    gender: "Unisex"
  },
  {
    id: 6,
    name: "Urban Utility Jacket",
    price: 8999,
    category: "Training",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    description: "Water-resistant, breathable jacket for outdoor training.",
    inStock: true,
    brand: "Nexus",
    gender: "Men"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Professional Runner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "The Aero Glide Runners changed my marathon experience. Unbelievable comfort and energy return."
  },
  {
    id: 2,
    name: "Marcus Cole",
    role: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Nexus Sports apparel is unmatched. The durability during intense cross-training is exactly what my clients need."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Tennis Pro",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 4,
    text: "Incredible grip and lateral support on the court. Highly recommend the elite series."
  }
];

export const userProfile = {
  name: "Jainav Patel",
  email: "jainav.patel@example.com",
  phone: "+91 98765 43210",
  joinDate: "March 2024",
  addresses: [
    {
      id: 1,
      type: "Home",
      street: "Nexus Sports, 1st Floor, Indiranagar",
      city: "Bengaluru",
      state: "Karnataka",
      zip: "560038",
      isDefault: true
    }
  ]
};

export const orderHistory = [
  {
    id: "ORD-9824-7X",
    date: "June 10, 2026",
    status: "Delivered",
    total: 23498,
    items: [
      { name: "Aero Glide Runners", quantity: 1, price: 14999 },
      { name: "Urban Utility Jacket", quantity: 1, price: 8499 }
    ]
  },
  {
    id: "ORD-8732-4Y",
    date: "May 22, 2026",
    status: "Delivered",
    total: 3499,
    items: [
      { name: "Flex Core Training Top", quantity: 1, price: 3499 }
    ]
  }
];
