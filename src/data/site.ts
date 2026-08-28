export const CONTACT = {
  phonePrimary: "97319 45945",
  phoneSecondary: "88846 88854",
  email: "aalaya24@gmail.com",
  address: "Krishna Garden, Rajarajeshwari Nagar, Bengaluru 560098",
};

export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";
export type ProjectType = "Residential" | "Commercial";

export interface Project {
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  type: ProjectType;
  short: string;
  description: string;
  unitSizes: string[];
  image: string;
  gallery: string[];
  specifications: { group: string; items: string[] }[];
  proximity: { label: string; distance: string }[];
}

export const projects: Project[] = [
  {
    slug: "aalaya-living-redefined",
    name: "Aalaya — Living Redefined",
    location: "Krishna Garden, Rajarajeshwari Nagar, Bangalore",
    status: "Ongoing",
    type: "Residential",
    short: "3 BHK luxury apartments — only two exclusive residences, BBMP approved.",
    description:
      "Aalaya is an intimate address of just two 3 BHK residences, designed for families who value light, air and craftsmanship over crowd. Every surface, joinery detail and balcony line has been drawn to make daily life feel unhurried and quietly luxurious.",
    unitSizes: ["3 BHK — 1605 sqft", "3 BHK — 1647 sqft"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
    ],
    specifications: [
      {
        group: "Structural & Approvals",
        items: ["BBMP approved plan", "RCC framed structure", "Seismic zone II compliant design"],
      },
      {
        group: "Flooring & Finishes",
        items: [
          "4x6 vitrified tile flooring",
          "Wooden flooring in master bedroom",
          "Toughened glass balcony railing",
        ],
      },
      {
        group: "Amenities",
        items: [
          "24/7 water supply",
          "Power backup",
          "6-passenger lift",
          "Rainwater harvesting",
          "Centralized gas point",
          "Yoga deck",
          "Sandpit for children",
        ],
      },
    ],
    proximity: [
      { label: "Global Village Tech Park", distance: "0.5 km" },
      { label: "Pattanagere Metro Station", distance: "1.5 km" },
      { label: "RNSIT, JSS & KSVP institutions", distance: "Nearby" },
      { label: "BGS & SS Sparsh Hospitals", distance: "Nearby" },
      { label: "Shopping malls & retail", distance: "Nearby" },
    ],
  },
  {
    slug: "verdant-court",
    name: "Verdant Court",
    location: "Kengeri Satellite Town, Bangalore",
    status: "Upcoming",
    type: "Residential",
    short: "Boutique 4 BHK garden duplexes wrapped around a private green courtyard.",
    description:
      "A collection of eight garden duplexes planned around a shaded central court, with double-height living rooms and deep verandahs that keep interiors cool through the Bangalore summer.",
    unitSizes: ["4 BHK Duplex — 2450 sqft", "4 BHK Duplex — 2610 sqft"],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
    ],
    specifications: [
      { group: "Structural & Approvals", items: ["BBMP approved plan", "RCC framed structure"] },
      {
        group: "Flooring & Finishes",
        items: ["Italian marble in living areas", "Engineered wood in bedrooms"],
      },
      {
        group: "Amenities",
        items: ["Private plunge pools", "Landscaped courtyard", "EV charging", "Solar hot water"],
      },
    ],
    proximity: [
      { label: "Kengeri Metro Station", distance: "2 km" },
      { label: "NICE Road junction", distance: "3 km" },
      { label: "Global Village Tech Park", distance: "5 km" },
    ],
  },
  {
    slug: "the-atrium-workspaces",
    name: "The Atrium Workspaces",
    location: "Mysore Road, Bangalore",
    status: "Completed",
    type: "Commercial",
    short: "A 42,000 sqft office block with a naturally lit central atrium and terrace café.",
    description:
      "Delivered as a joint venture, The Atrium pairs an efficient column-free floor plate with a light-washed atrium, giving tenants flexible studios that never feel enclosed.",
    unitSizes: ["Floor plates from 4,200 sqft", "Full floor — 10,500 sqft"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
    ],
    specifications: [
      { group: "Structural & Approvals", items: ["BBMP commercial sanction", "Post-tension slabs"] },
      { group: "Flooring & Finishes", items: ["Raised access flooring", "Double-glazed façade"] },
      { group: "Amenities", items: ["100% DG backup", "Two-level basement parking", "Terrace café"] },
    ],
    proximity: [
      { label: "Mysore Road Metro", distance: "1.2 km" },
      { label: "Outer Ring Road", distance: "4 km" },
    ],
  },
  {
    slug: "casa-lumen-interiors",
    name: "Casa Lumen Interiors",
    location: "JP Nagar, Bangalore",
    status: "Completed",
    type: "Residential",
    short: "A full interior transformation of a 3,100 sqft penthouse in warm oak and travertine.",
    description:
      "From joinery drawings to the final styling, Casa Lumen was executed end-to-end by our interiors studio — a restrained palette of oak, travertine and brushed brass across three levels.",
    unitSizes: ["Penthouse — 3100 sqft"],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
    ],
    specifications: [
      { group: "Structural & Approvals", items: ["Non-structural refit", "Society NOC obtained"] },
      {
        group: "Flooring & Finishes",
        items: ["Travertine flooring", "Oak veneer joinery", "Brushed brass hardware"],
      },
      { group: "Amenities", items: ["Home automation", "Concealed HVAC", "Custom lighting scheme"] },
    ],
    proximity: [
      { label: "JP Nagar Metro", distance: "0.8 km" },
      { label: "Ring Road", distance: "2 km" },
    ],
  },
];

export const services = [
  {
    slug: "construction",
    title: "Construction",
    icon: "building",
    summary:
      "Ground-up residential and commercial builds delivered with disciplined engineering and on-site quality control.",
    points: [
      "Structural design & BBMP approvals",
      "Turnkey residential apartments and villas",
      "Commercial and mixed-use blocks",
      "Transparent stage-wise billing",
    ],
  },
  {
    slug: "interiors",
    title: "Interiors",
    icon: "sofa",
    summary:
      "A studio-led interiors practice covering space planning, bespoke joinery, lighting and final styling.",
    points: [
      "Concept, mood boards and 3D walkthroughs",
      "Bespoke modular and carpentry work",
      "Lighting, HVAC and automation integration",
      "Handover-ready styling",
    ],
  },
  {
    slug: "joint-ventures",
    title: "Joint Ventures",
    icon: "handshake",
    summary:
      "Fair, clearly documented land-owner partnerships that unlock value without you giving up control.",
    points: [
      "Feasibility and yield studies",
      "Clear revenue and area-share models",
      "Legal documentation support",
      "End-to-end project execution",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Ramesh & Divya Kulkarni",
    role: "Homeowners, Rajarajeshwari Nagar",
    rating: 5,
    quote:
      "They treated our home like their own. Every stage was explained, every deadline met, and the finishing quality genuinely surprised us.",
  },
  {
    name: "Anitha Reddy",
    role: "Land Owner, Kengeri",
    rating: 5,
    quote:
      "The joint venture terms were clear from day one. No hidden clauses, no last-minute surprises — rare in this industry.",
  },
  {
    name: "Karthik Menon",
    role: "Director, Atrium Workspaces",
    rating: 5,
    quote:
      "A commercial block delivered ahead of schedule with the façade detailing we asked for. Their site team is exceptional.",
  },
  {
    name: "Sneha Iyer",
    role: "Interiors Client, JP Nagar",
    rating: 5,
    quote:
      "The interiors team understood the mood we wanted immediately. Warm, calm, and beautifully detailed joinery throughout.",
  },
  {
    name: "Prakash Shetty",
    role: "Investor, Bengaluru",
    rating: 4,
    quote:
      "Documentation, approvals and updates were handled professionally. I have already recommended them to two colleagues.",
  },
  {
    name: "Lakshmi Narayan",
    role: "Homeowner, Kengeri",
    rating: 5,
    quote:
      "What stood out was honesty about cost. The final bill matched the estimate almost to the rupee.",
  },
];

export const blogs = [
  {
    slug: "choosing-vitrified-flooring",
    title: "Choosing vitrified flooring that still looks new in ten years",
    excerpt:
      "Tile size, water absorption and grout choice matter far more than the showroom finish. Here is how we specify flooring on every project.",
    date: "2026-07-18",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    body: [
      "Vitrified tiles are the default in Bangalore homes, but the difference between a floor that ages gracefully and one that looks tired in three years comes down to three specifications most buyers never ask about.",
      "First, water absorption. Full-body vitrified tiles below 0.5% absorption resist staining far better than glazed alternatives, particularly in kitchens and utility areas where oil and turmeric are daily realities.",
      "Second, tile size relative to room proportion. We standardise on 4x6 formats in living areas because fewer joints read as a calmer, more continuous surface — and fewer joints mean fewer grout failures.",
      "Third, grout. Epoxy grout costs more per bag and takes longer to lay, but it does not darken, does not host mould, and does not need re-doing after monsoon seasons.",
    ],
  },
  {
    slug: "joint-venture-checklist",
    title: "A land owner's checklist before signing a joint venture",
    excerpt:
      "Area share, refundable deposit, timelines and exit clauses — the six terms that decide whether a JV works for you.",
    date: "2026-06-02",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    body: [
      "A joint venture is the most common way land value is unlocked in Bangalore, and also the most common place owners lose leverage by signing an agreement drafted entirely by the developer.",
      "Insist on a defined area share expressed in carpet area, not super built-up. Ambiguity here is the single largest source of dispute at handover.",
      "Fix the completion timeline with a liquidated damages clause. A timeline without consequences is a suggestion, not a commitment.",
      "Finally, agree on the specification schedule as an annexure to the agreement — brand names, thicknesses and grades — so quality cannot be silently value-engineered later.",
    ],
  },
  {
    slug: "designing-for-bangalore-light",
    title: "Designing interiors for Bangalore's soft, shifting light",
    excerpt:
      "Why north-facing rooms need warmer finishes, and how layered lighting keeps an apartment comfortable after dusk.",
    date: "2026-04-21",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
    body: [
      "Bangalore light is diffuse for much of the year. That softness flatters natural materials and punishes high-gloss surfaces, which read as grey rather than bright.",
      "In north-facing rooms we push the palette warmer — oak, clay plaster, unlacquered brass — to compensate for the cooler ambient cast.",
      "After dusk, a single ceiling fixture flattens a room. We plan three layers: ambient cove light, task light at the counter and desk, and accent light on one texture or artwork per room.",
    ],
  },
  {
    slug: "site-visit-questions",
    title: "Twelve questions to ask on your first site visit",
    excerpt:
      "Approvals, water source, structural drawings and handover timelines — what to verify before you pay a token amount.",
    date: "2026-03-09",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    body: [
      "A site visit is not a showroom tour. Treat it as due diligence, and bring a list.",
      "Ask to see the sanctioned plan and compare it to what is being built. Ask where water comes from, and what the backup source is in April.",
      "Ask who the structural consultant is, and whether the drawings are available for review. A builder confident in their engineering will share them.",
      "Finally, ask what happens if handover slips. The answer tells you more about the developer than any brochure.",
    ],
  },
];

export const milestones = [
  { year: "2012", title: "Founded in Bengaluru", text: "Started as a two-person contracting firm on Mysore Road." },
  { year: "2015", title: "First joint venture", text: "Partnered with a land owner in Kengeri to deliver our first apartment block." },
  { year: "2018", title: "Interiors studio launched", text: "Added an in-house design team so builds and interiors stay under one roof." },
  { year: "2021", title: "First commercial delivery", text: "Completed The Atrium Workspaces, a 42,000 sqft office block." },
  { year: "2024", title: "50th project handed over", text: "Crossed fifty completed residences across west Bengaluru." },
  { year: "2026", title: "Aalaya launched", text: "An exclusive two-residence address in Rajarajeshwari Nagar." },
];

export const team = [
  {
    name: "Suresh Gowda",
    role: "Managing Partner",
    bio: "Civil engineer with 22 years in structural execution across residential and commercial builds.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Meera Rajan",
    role: "Head of Interiors",
    bio: "Leads the interiors studio, from concept drawings to final styling and handover.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Arun Kashyap",
    role: "Projects Director",
    bio: "Oversees site delivery, vendor quality and stage-wise client reporting.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Divya Nair",
    role: "Partnerships & Legal",
    bio: "Structures joint ventures and manages approvals, documentation and compliance.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
];
