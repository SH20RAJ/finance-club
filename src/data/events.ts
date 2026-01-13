export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  longDescription: string;
  tagline: string;
  image?: string;
  category: "Flagship" | "Competition" | "Simulation";
  registrationLink: string;
  features: string[];
}

export const events: Event[] = [
  {
    id: "enigma",
    slug: "enigma",
    title: "ENIGMA '26",
    date: "18th Jan 2026",
    time: "11:00 AM",
    venue: "Seminar Hall 1, RND Building",
    tagline: "The Art of Strategic Thinking",
    description: "Our flagship case study event built for minds that question, analyze, and lead.",
    longDescription: "ENIGMA is a case study–driven experience that pushes participants to unravel ambiguity, evaluate possibilities, and craft impactful solutions. It celebrates logic, foresight, and the ability to navigate complexity with confidence. Where Strategy meets Uncertainty and Ideas turn into Decisive Solutions.",
    category: "Flagship",
    registrationLink: "/registrations",
    features: ["Case Study", "Strategic Analysis", "Team Dynamics", "Cash Prizes"]
  },
  {
    id: "estimania",
    slug: "estimania",
    title: "ESTIMANIA",
    date: "19th Jan 2026",
    time: "10:00 AM",
    venue: "Room 233A, Main Building",
    tagline: "How sharp is your instinct for value?",
    description: "Balance numbers, tactics, and team dynamics. Observe, assess, and decide.",
    longDescription: "Estimania tests your financial valuation skills in real-time. Can you estimate the true value of an asset before the market moves? A high-stakes event for those who trust their numbers and their gut.",
    category: "Competition",
    registrationLink: "/registrations",
    features: ["Valuation Challenge", "Live Market Realm", "Quick Decision Making"]
  },
  {
    id: "behind-the-stumps",
    slug: "behind-the-stumps",
    title: "BEHIND THE STUMPS",
    date: "19th Jan 2026",
    time: "2:00 PM",
    venue: "Room 234, Main Building",
    tagline: "The Ultimate IPL Auction Simulation",
    description: "A bidding warfare where strategy meets cricket logic.",
    longDescription: "Step into the shoes of a team owner. Manage your budget, bid for the best players, and build a championship-winning team. It's not just about cricket knowledge; it's about financial discipline and auction strategy.",
    category: "Simulation",
    registrationLink: "/registrations",
    features: ["Bidding Wars", "Budget Management", "Cricket Strategy"]
  }
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
