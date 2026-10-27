# Website Build Brief

## 1. Project Overview

The website is a landing page for the SCC Graphic Design Club.

The purpose of the website is to showcase club activities, highlight recent student work, share graphic design news, and provide access to past years' projects and club information.

The target audience includes:

- Current Graphic Design students
- Prospective students interested in joining the club
- Faculty members
- Visitors interested in student design work

The website should present a professional, modern, and creative visual identity while remaining easy to navigate.

---

## 2. Design Reference

### Figma File

SCC Graphic Design Club Website

### Intended Frame

Desktop homepage design.

### Verified Design Information

The design consists of:

- A dark gradient background
- Top navigation bar
- Hero section with logo and featured quote
- Past years section
- Recent Work section
- Graphic Design News section
- Footer navigation

The page follows a single-page scrolling layout.

---

## 3. Page Structure

### Section 1: Header Navigation

#### Purpose

Provide branding and navigation throughout the website.

#### Content

- SCC Graphic Design Club logo
- Club title
- Search bar
- Navigation links:
  - Events
  - Contact
  - About
- User profile icon
- Join Here button

#### Layout

Horizontal navigation bar at top of page.

#### Typography

Small navigation text.

#### Colours and Background

- Dark gradient background
- White navigation text
- Blue Join Here button
- Pink logo

#### Assets

- Club logo
- Profile icon

#### Important Spacing and Alignment

Items are evenly distributed across the top navigation area with generous horizontal spacing.

---

### Section 2: Hero Section

#### Purpose

Introduce the club and establish the visual identity.

#### Content

- Large Graphic Design Club logo
- Featured quote

Quote:

"Every great design begins with an even better story."

Attribution:

Lorinda Mamo, Typographer

#### Layout

Centered vertical layout.

The logo sits above the quotation.

#### Typography

Large heading-style quote.

#### Colours and Background

- White typography
- Dark gradient background
- Pink logo artwork

#### Assets

- Large center logo

#### Important Spacing and Alignment

Centered alignment with significant spacing between navigation and content.

---

### Section 3: Explore Past Years

#### Purpose

Provide access to archived club work.

#### Content

Heading:

Explore past years:

Folders:

- 2026
- 2025
- 2024

Button:

View More...

#### Layout

Left sidebar-style content area.

Folders are stacked vertically.

#### Typography

Bold white section heading.

#### Colours and Background

- Light grey card background
- Pink folder graphics
- Blue button

#### Assets

- Folder icon graphics

#### Important Spacing and Alignment

Even spacing between folder items.

---

### Section 4: Recent Work

#### Purpose

Highlight current and featured student work.

#### Content

Heading:

Recent Work:

Featured label

Content display area

View More button

#### Layout

Large content panel positioned to the right of the Past Years section.

#### Typography

Large section heading.

#### Colours and Background

- White heading
- White/light grey content box
- Pink Featured tag
- Blue button

#### Assets

Future project thumbnails or featured images.

#### Important Spacing and Alignment

Main content area aligned with the top of the Past Years section.

---

### Section 5: Graphic Design News

#### Purpose

Display industry-related news and updates.

#### Content

Heading:

Graphic Design News:

Featured label

Large content panel

View More button

#### Layout

Full-width content section beneath Recent Work.

#### Typography

Large section heading.

#### Colours and Background

- White typography
- Light grey content box
- Pink Featured tag
- Blue button

#### Assets

News images and article previews.

#### Important Spacing and Alignment

Centered section with large vertical spacing from the section above.

---

### Section 6: Footer

#### Purpose

Provide branding and secondary navigation.

#### Content

- Graphic Design Club logo
- Events link
- Contact link
- About link

#### Layout

Horizontal footer.

#### Typography

Small navigation text.

#### Colours and Background

Dark gradient background.

#### Assets

Club logo.

#### Important Spacing and Alignment

Navigation links aligned to the right side.

---

## 4. Design System

### Colour Palette

Verified and estimated values:

Primary Pink:

- Approx. #D84E8E

Dark Background:

- Approx. #182629
- Approx. #1F2E31

White Text:

- #FFFFFF

Blue Buttons:

- Approx. #2D6792

Light Grey Cards:

- Approx. #D9D9D9

### Typography

Observed usage:

- Large display headings
- Medium section headings
- Small navigation text
- Sans-serif font family

Exact typeface requires verification from Figma.

### Heading Hierarchy

- H1: Hero quote
- H2: Section headings
- H3: Featured labels
- Body text and navigation links

### Spacing

- Generous vertical spacing between sections
- Consistent internal card spacing
- Wide page margins

### Content Width

Centered content with a desktop-focused layout.

### Buttons

Style:

- Rounded corners
- Blue background
- White text

Examples:

- Join Here
- View More

### Borders and Radius

Content cards and buttons use rounded corners.

### Repeated Components

- Section headings
- Featured tags
- View More buttons
- Content cards

---

## 5. Assets

| Asset | Purpose | Requirements |
|---------|---------|---------|
| Club Logo | Branding | Maintain proportions |
| Large Hero Logo | Hero section | Display prominently |
| Folder Graphics | Past Years navigation | Preserve styling |
| User Icon | Navigation | Consistent sizing |
| Search Icon | Navigation | Consistent sizing |
| Future Project Images | Recent Work section | Match intended crop |
| News Images | News section | Match card dimensions |

---

## 6. Technical Requirements

Implementation requirements:

- Semantic HTML5
- External CSS stylesheet
- JavaScript only when necessary
- No frameworks
- No package manager
- No build tools required

Accessibility:

- Proper heading hierarchy
- Meaningful alt text
- Keyboard-accessible navigation
- Adequate colour contrast

Suggested file organization:

```
project/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── icons/
├── BUILD.md
└── .github/
    └── copilot-instructions.md
```

---

## 7. Responsive Behaviour

### Desktop

Maintain the layout shown in Figma.

### Tablet

- Reduce horizontal spacing
- Stack secondary content where needed
- Maintain readable typography

### Mobile

- Convert navigation into a mobile menu
- Stack all multi-column content vertically
- Move Past Years above Recent Work
- Ensure buttons remain full-width or easy to tap
- Scale images proportionally
- Prevent horizontal scrolling

---

## 8. Acceptance Criteria

The website is complete when:

- All sections from the design are implemented.
- Correct branding is used.
- Navigation functions correctly.
- Buttons are styled consistently.
- Layout matches the Figma design closely.
- Typography and colours are reviewed.
- Desktop, tablet, and mobile layouts work.
- Images and assets load correctly.
- Accessibility standards are followed.
- Final page has been visually compared with Figma.
- Any known differences are documented.

---

## 9. Outstanding Questions

The following information still requires verification from Figma:

- Exact font family
- Exact font weights
- Exact colour values
- Exact spacing and measurements
- Exact corner radius values
- Hover states
- Mobile-specific designs (if available)
- Final image assets for Recent Work
- Final image assets for News section