export type Profile = {
  id: string;
  name: string;
  age: number;
  state: string;
  bio: string;
  avatar: string;
};

export const mockProfiles: Profile[] = [
  { id: "p1", name: "Lana", age: 24, state: "CA", bio: "Sunset chaser", avatar: "/vercel.svg" },
  { id: "p2", name: "Mia",  age: 22, state: "TX", bio: "Coffee + books", avatar: "/next.svg" },
  { id: "p3", name: "Eva",  age: 27, state: "FL", bio: "Beach vibes",   avatar: "/globe.svg" },
];

export const MOCK_USERS: Profile[] = [
  { id: "u1", name: "Alex", age: 28, state: "NY", bio: "Builder mode", avatar: "/vercel.svg" },
];

export const COIN_PACKS = [
  { id: "c200",  coins: 200,  price: 4.99, bonus: 30 },
  { id: "c550",  coins: 550,  price: 9.99,             tag: "USABEN" },
  { id: "c1200", coins: 1200, price: 19.99, bonus: 300, tag: "BEST VALUE" },
];

export const LIVE_EVENTS = [
  { text: "🔥 Michael just won 3200 coins!" },
  { text: "💖 New match! You're Top-5 in your state!" },
  { text: "🎰 Big Win! +500 Diamonds" },
] as const;
