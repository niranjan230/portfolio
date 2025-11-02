# Personal Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by modern developer portfolios (Linear, Stripe, Vercel) combined with creative portfolio patterns from Awwwards. Focus on showcasing technical work with sophisticated, minimal aesthetic while maintaining personality and visual interest.

## Typography System

**Font Families**:
- Primary: Inter or DM Sans (Google Fonts) - clean, modern sans-serif for body and UI
- Display: Space Grotesk or Syne (Google Fonts) - bold, geometric for headings and emphasis

**Hierarchy**:
- Hero Name: 4xl to 6xl (responsive), 700-800 weight
- Hero Title: xl to 2xl, 400 weight, slightly muted
- Section Headings: 3xl to 4xl, 700 weight
- Project Titles: xl to 2xl, 600 weight
- Body Text: base to lg, 400 weight
- Labels/Meta: sm to base, 500 weight

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 24, 32
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-32
- Grid gaps: gap-6 to gap-8
- Element margins: mb-4, mb-8, mb-12

**Container Strategy**:
- Max width: max-w-7xl for main content
- Full-width sections with inner containers
- Generous horizontal padding: px-6 to px-8

## Component Library

### Navigation
Sticky header with smooth backdrop blur, logo/name left, navigation links right (About, Projects, Skills, Contact), mobile hamburger menu. Height: h-16 to h-20.

### Hero Section
Full-width section (min-h-screen) with large professional headshot/portrait image positioned strategically (either left 40% with content right, or centered with content overlay). Image should be high-quality, professional. Name displays as large hero text, animated typewriter effect for title/roles. Primary CTA buttons ("View Projects", "Contact Me") with blurred backgrounds when over image. Include floating subtle geometric shapes or gradient orbs for depth.

### About Section
Two-column layout (lg:grid-cols-2) - left column with extended bio paragraph, right column with personality highlights or quick facts in card format. Use subtle card backgrounds with soft shadows.

### Skills Showcase
Grid layout (grid-cols-2 md:grid-cols-3 lg:grid-cols-4) displaying skill categories as cards. Each card contains category icon (Heroicons), category name, and skill tags/badges. Icons should be substantial size (w-8 h-8 to w-12 h-12). Implement subtle hover lift effect (translate-y).

### Projects Gallery
Featured projects in alternating layout pattern:
- Odd projects: Image left (50%), content right (50%)
- Even projects: Image right (50%), content left (50%)
- Each project card includes: Large screenshot/mockup image, project title, description, tech stack tags (small pill badges), dual CTAs ("Live Demo" + "GitHub")
- Mobile: Stack vertically
- Use substantial spacing between projects (mb-16 to mb-24)

### Achievements Section
Masonry or grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) with achievement cards. Each card displays badge/icon, achievement title, and brief description. Implement staggered reveal animation on scroll.

### Education Timeline
Horizontal or vertical timeline design with connected nodes. Each education entry shows institution logo placeholder, degree, institution name, year, CGPA in structured card format.

### Contact Section
Centered layout with large heading, contact methods displayed as interactive cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-4): Email, Phone, GitHub, LinkedIn. Each card shows icon (w-10 h-10), label, and link. Implement hover scale effect.

### Footer
Full-width with centered content, includes copyright, social links (icon-only), and optional back-to-top button.

## Images

**Required Images**:
1. **Hero Portrait**: Professional headshot or full-body portrait, high quality (min 1200px width). Position: Large presence (40-50% of hero section width on desktop). Should convey professionalism and personality.

2. **Project Screenshots**: 5 project images showing live applications or mockups (min 800px width each). Should be actual screenshots or designed mockups showcasing UI.

3. **Background Elements**: Abstract gradient shapes or geometric patterns for depth (can be CSS gradients + simple SVGs).

**Image Treatment**: Hero image should have subtle gradient overlay at edges for text contrast. Project images get subtle shadow and border radius (rounded-lg to rounded-xl).

## Interaction Patterns

**Animations** (minimal, purposeful):
- Smooth scroll behavior between sections
- Fade-in on scroll for section headings
- Hover lift on cards (translate-y-1 with shadow increase)
- Typewriter effect for hero title (one-time on load)

**Navigation**: Smooth scroll to sections on click, active section highlighting in nav.

## Icons
Use **Heroicons** (outline variant) via CDN for all UI icons: code, mail, phone, link, external link, GitHub logo (use simple SVG), LinkedIn logo (use simple SVG).

## Accessibility
- Semantic HTML structure (header, nav, main, section, footer)
- Focus visible states on all interactive elements
- Alt text for all images
- Sufficient text contrast
- Keyboard navigable menu

## Mobile Responsiveness
- Hamburger menu for mobile navigation
- Single column layouts on mobile
- Adjusted typography scale (smaller on mobile)
- Touch-friendly spacing (min h-12 for buttons)
- Stack all multi-column layouts vertically on mobile