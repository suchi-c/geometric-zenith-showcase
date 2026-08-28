# GEOmetric Luxury

Build a modern, elegant real estate & construction company website for "GEOmetric LLP" using React and Tailwind CSS. Design direction: premium/luxury aesthetic — dark charcoal/deep green backgrounds paired with gold/champagne accents, elegant serif headings for titles, clean sans-serif body text, generous whitespace, subtle hover animations. This should feel high-end, not corporate-generic.

Pages needed:

1. HOME
- Hero section with a strong tagline, background image/video of a construction/interior project, and a prominent "Book a Site Visit" CTA button
- Brief intro to GEOmetric LLP (construction, interiors, joint ventures)
- Highlighted/featured projects section (3-4 cards linking to Projects page)
- Why choose us / key strengths section
- Testimonials preview carousel
- Footer with contact info, social links, quick nav

2. ABOUT US
- Company story, mission/vision
- Team or leadership section (placeholder content)
- Timeline or milestones section

3. SERVICES
- Three distinct service categories with icons and descriptions: Construction, Interiors, Joint Ventures
- Each service block should have its own short description and a "Learn more" or contact CTA

4. PROJECTS (this is the key page — model it like a high-end real estate portfolio, similar in spirit to saikiranconstructions.co.in)
- Filterable grid layout (filter by category: Ongoing / Completed / Upcoming, or by type: Residential / Commercial)
- Each project card: hero image, project name, location, status badge, short description
- Clicking a card opens a project detail view with: image gallery, specifications (structural, flooring, amenities), location/proximity highlights, unit sizes, "Book a Site Visit" CTA
- Use this sample project as placeholder/seed content:
  Project: "Aalaya - Living Redefined" by GEOmetric LLP
  Location: Krishna Garden, Rajarajeshwari Nagar, Bangalore
  Type: 3 BHK Luxury Apartments, 2 units (1605 sqft & 1647 sqft)
  Highlights: BBMP approved, 4x6 vitrified flooring, wooden master bedroom flooring, glass balcony railing, 24/7 water supply, power backup, 6-passenger lift, rainwater harvesting, centralized gas point, yoga deck, sandpit for children
  Proximity: 0.5 km from Global Village Tech Park, 1.5 km from Pattanagere Metro Station, near top schools (RNSIT, JSS, KSVP), colleges, hospitals (BGS, SS Sparsh), and malls
  Contact: 97319 45945 / 88846 88854, aalaya24@gmail.com

5. TESTIMONIALS
- Grid or carousel of client testimonials with name, photo placeholder, star rating, quote

6. BLOGS
- Blog listing grid with featured image, title, excerpt, date, "Read more"
- Placeholder blog detail page layout

7. BOOK A SITE VISIT
- A modal or dedicated page with a form: Name, Phone, Email, Project of Interest (dropdown), Preferred Date, Message
- Accessible via a persistent CTA button in the navbar/header on all pages

Global requirements:
- Responsive design (mobile, tablet, desktop)
- Sticky navbar with logo placeholder and nav links to all pages
- Reusable component structure (Navbar, Footer, ProjectCard, TestimonialCard, BlogCard, ServiceCard)
- Use placeholder images from Unsplash for now
- No backend/database functionality yet — forms can just show a success state on submit, since backend integration will be handled separately later
- Keep the codebase clean and componentized since I'll be connecting it to a custom Node.js/MySQL backend afterward       HEADER: Sticky navbar with logo on the left, nav links (Home, About Us, Services, Projects, Testimonials, Blogs), a gold "Book a Site Visit" button on the right, and a small clickable phone number next to it. Transparent over the hero image on the homepage, solid dark background on scroll and on all other pages. Collapse into a hamburger menu on mobile, keeping the "Book a Site Visit" button visible.

FOOTER: Four-column dark footer — (1) logo + short tagline + social icons, (2) quick nav links, (3) services links (Construction, Interiors, Joint Ventures), (4) contact details (address, phone, email) with a small map or QR placeholder. Include a newsletter signup input. Bottom bar with copyright text and a small legal disclaimer line about specifications/plans being subject to change.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/46754af0-c8ee-4ecb-b1a7-8b741715b618).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
