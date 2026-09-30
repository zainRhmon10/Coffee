export const images = {
  latte:
    "https://images.unsplash.com/photo-1593443320739-77f74939d0da?auto=format&fit=crop&w=900&q=85",
  cappuccino:
    "https://images.unsplash.com/photo-1710173472469-9d28e977914c?auto=format&fit=crop&w=900&q=85",
  coldBrew:
    "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=900&q=85",
  flatWhite:
    "https://images.unsplash.com/photo-1559001724-fbad036dbc9e?auto=format&fit=crop&w=900&q=85",
  espresso:
    "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=900&q=85",
  americano:
    "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=900&q=85",
};

export const initialCoffees = [
  {
    id: 1,
    name: "Honey Oat Latte",
    type: "Latte",
    cafe: "Juniper & Co.",
    location: "Portland, Oregon",
    rating: 4.8,
    date: "Today",
    image: images.latte,
    favorite: true,
    notes:
      "Silky oat milk, a gentle honey sweetness, and a beautifully balanced espresso finish. Exactly the kind of cup I want on a slow morning.",
  },
  {
    id: 2,
    name: "Maple Cappuccino",
    type: "Cappuccino",
    cafe: "North Star Coffee",
    location: "Portland, Oregon",
    rating: 4.6,
    date: "May 24, 2025",
    image: images.cappuccino,
    favorite: true,
    notes: "Airy foam and a subtle maple note without becoming too sweet.",
  },
  {
    id: 3,
    name: "Ethiopian Cold Brew",
    type: "Cold Brew",
    cafe: "Daybreak Roasters",
    location: "Seattle, Washington",
    rating: 4.9,
    date: "May 21, 2025",
    image: images.coldBrew,
    favorite: true,
    notes: "Bright, floral and surprisingly smooth. A standout summer coffee.",
  },
  {
    id: 4,
    name: "Vanilla Flat White",
    type: "Other",
    cafe: "Common Ground",
    location: "Portland, Oregon",
    rating: 4.4,
    date: "May 18, 2025",
    image: images.flatWhite,
    favorite: false,
    notes: "A comforting, classic flat white with restrained vanilla.",
  },
  {
    id: 5,
    name: "House Espresso",
    type: "Espresso",
    cafe: "Chapter Coffee",
    location: "Portland, Oregon",
    rating: 4.7,
    date: "May 15, 2025",
    image: images.espresso,
    favorite: true,
    notes: "Syrupy body with cocoa and toasted almond notes.",
  },
  {
    id: 6,
    name: "Long Black",
    type: "Americano",
    cafe: "Morning Ritual",
    location: "Seattle, Washington",
    rating: 4.3,
    date: "May 11, 2025",
    image: images.americano,
    favorite: false,
    notes: "Clean, bold and beautifully straightforward.",
  },
];