# DESIGN.md

# Internal Business OS — Design System

## Design Direction

Internal Business OS is designed to be a professional, high-clarity platform for project management and business operations. The visual style is rooted in trust, productivity, and modern professionalism.

### Core Values:

- **Clarity:** Information is presented clearly with a strong hierarchy.
- **Trust:** A stable, calm color palette and clean layouts.
- **Productivity:** Minimalist interface that stays out of the user's way.
- **Mobile-First:** Every design starts with the mobile experience.

---

## Color System

### Primary & Accents

The brand uses a primary blue accent to drive action and focus.

- **Primary Blue:** `#2563EB` (Used for buttons, active navigation, and key highlights)
- **Primary Surface:** `#faf8ff` (Light neutral background for the app shell)

### Status Colors

Used to communicate project and task states clearly.

- **Success/Active:** Green (Soft background, darker text)
- **Warning/Paused:** Amber (Soft background, darker text)
- **Info/Completed:** Blue (Muted blue background)
- **Error/Destructive:** Red (Clear, urgent red for warnings)

### Neutrals

Used for text, borders, and depth.

- **Text (Primary):** Near-black/Dark Gray (e.g., #1e293b)
- **Text (Secondary):** Muted Gray (e.g., #64748b)
- **Borders:** Very light gray (e.g., #e2e8f0)
- **Card Backgrounds:** White (#ffffff)

---

## Typography

The system uses Manrope as the primary sans-serif typeface for its clean and modern feel.

### Hierarchy

- **H1 (Page Titles):** Large, bold, confident.
- **H2 (Section Headers)**: Medium, semibold.
- **Body:** Base size (approx. 16px) for high readability.
- **Metadata/Labels:** Small, semibold or muted.

---

## Spacing & Layout

A consistent 8px grid (or 1rem base) is used for all spacing.

- Page Padding: `1rem` on mobile.
- Card Padding: `1rem`.
- Element Spacing: `0.5rem` to `1rem` between related items.
- Section Spacing: `1.5rem` to `2rem`.

### Mobile Layout

- Single-column vertical stacking.
- Cards used to group related information.
- Bottom navigation for primary app sections.
- Full-width primary buttons for better tap targets.

---

## Component Guidelines

### Buttons

- **Primary:** Solid blue with white text. Rounded corners (8px).
- **Secondary/Outline:** Bordered with primary color text.
- **Ghost:** No background or border, used for less prominent actions.

### Cards

- White background.
- Subtle border (1px solid #e2e8f0).
- Very soft shadow for depth.
- Rounded corners (12px to 16px).

### Navigation

- **Top Bar:** Branding on left, profile/notifications on right.
- **Bottom Bar:** Clear labels and icons for the 4 core sections: Dashboard, Projects, Users, Settings.

---

## Feedback & Interaction

- **Active States:** Clear visual feedback (e.g., background change or scale) on tap.
- **Loading:** Use skeleton screens that match the content structure.
- **Empty States:** Clear messaging with a primary call to action.
