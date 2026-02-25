// Mock data for listings (Giver supply)
export const giverListings = [
  { 
    id: 1, 
    icon: '💻', 
    title: 'Office Electronics Batch', 
    meta: '~80 kg · London, UK', 
    tag: 'Electronics', 
    tagColor: '#2ECC71' 
  },
  { 
    id: 2, 
    icon: '🔋', 
    title: 'Lithium Battery Pack', 
    meta: '~12 kg · Manchester', 
    tag: 'Batteries', 
    tagColor: '#2ECC71' 
  },
  { 
    id: 3, 
    icon: '🖨️', 
    title: 'Printer Cartridges + Unit', 
    meta: '~5 kg · Birmingham', 
    tag: 'Printers', 
    tagColor: '#2ECC71' 
  },
  { 
    id: 4, 
    icon: '📦', 
    title: 'Cardboard Bales — Weekly', 
    meta: '~200 kg · Bristol', 
    tag: 'Cardboard', 
    tagColor: '#2ECC71' 
  },
];

// Mock data for buyer demands
export const buyerListings = [
  { 
    id: 1, 
    icon: '🏭', 
    title: 'GreenCore Recycling Ltd.', 
    meta: 'Wants: 500 kg+ Plastics · £0.10–0.20/kg', 
    tag: 'Plastics', 
    tagColor: '#F39C12' 
  },
  { 
    id: 2, 
    icon: '⚡', 
    title: 'EcoCell Technologies', 
    meta: 'Wants: Batteries (all types) · £0.30–0.60/kg', 
    tag: 'Batteries', 
    tagColor: '#F39C12' 
  },
  { 
    id: 3, 
    icon: '🔩', 
    title: 'MetalReborn PLC', 
    meta: 'Wants: Scrap Metal · £0.05–0.15/kg', 
    tag: 'Metal', 
    tagColor: '#F39C12' 
  },
  { 
    id: 4, 
    icon: '🖥️', 
    title: 'TechLoop Refurb Co.', 
    meta: 'Wants: Screens + Computers · £0.50–1.20/kg', 
    tag: 'Screens', 
    tagColor: '#F39C12' 
  },
];

// Waste types available for selection
export const WASTE_TYPES = [
  'Electronics', 
  'Batteries', 
  'Computers', 
  'Screens', 
  'Printers', 
  'Plastics', 
  'Cardboard', 
  'Metal', 
  'Bulbs'
];

// Price ranges for buyer selection
export const PRICE_RANGES = [
  '£0.01–0.05/kg', 
  '£0.05–0.15/kg', 
  '£0.15–0.30/kg', 
  '£0.30–0.60/kg', 
  '£0.60–1.00/kg', 
  '£1.00+/kg'
];

// Steps for "How It Works" section - Giver
export const giverSteps = [
  { 
    num: '01', 
    title: 'List Your Waste', 
    desc: 'Tell us what you have, where it is, and roughly how much.' 
  },
  { 
    num: '02', 
    title: 'Get Matched', 
    desc: 'We surface your listing to vetted buyers who need your materials.' 
  },
  { 
    num: '03', 
    title: 'Schedule Pickup', 
    desc: 'Agree on a time — buyers arrange collection at no cost to you.' 
  },
  { 
    num: '04', 
    title: 'Make an Impact', 
    desc: 'Track your CO₂ saved and materials diverted from landfill.' 
  },
];

// Steps for "How It Works" section - Buyer
export const buyerSteps = [
  { 
    num: '01', 
    title: 'Post Your Demand', 
    desc: 'Tell us what materials you need, quantities, and your price range.' 
  },
  { 
    num: '02', 
    title: 'Browse Supply', 
    desc: 'See verified listings from givers in your region in real time.' 
  },
  { 
    num: '03', 
    title: 'Connect & Negotiate', 
    desc: 'Contact givers directly through the platform to agree terms.' 
  },
  { 
    num: '04', 
    title: 'Close the Deal', 
    desc: 'Log the transaction — we track chain-of-custody for compliance.' 
  },
];

// Platform stats
export const platformStats = {
  totalListings: '2,840',
  materialsDiverted: '94 t',
  verifiedBuyers: '480',
};
