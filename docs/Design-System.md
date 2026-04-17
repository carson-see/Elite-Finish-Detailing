# Design System Strategy: The Midnight Atelier

## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"The Midnight Atelier."** It represents a shift from utilitarian service marketing to a high-end, editorial experience. We are not just cleaning cars; we are restoring rolling masterpieces.

To achieve an "Elite" feel, the system moves away from the traditional, rigid web grid. Instead, it utilizes **intentional asymmetry** and **tonal depth** to guide the eye. By overlapping high-fidelity photography with elegant typography and floating glass layers, we create a digital environment that feels as polished and protected as a ceramic-coated finish. This is a system of "Atmospheric Luxury"—where the space between elements is as important as the elements themselves.

## 2. Colors & Surface Logic
The palette is rooted in deep, nocturnal tones, punctuated by "Lighter Gold" accents that signify prestige and precision.

### The "No-Line" Rule
Standard 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through:
- **Tonal Shifts:** Transitioning from `surface` (#131313) to `surface-container-low` (#1C1B1B).
- **Luminance Gradients:** Subtle shifts using `secondary_container` (deep blue-purples) to define content areas.
- **Negative Space:** Using generous padding to allow the eye to perceive distinct regions.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical, stacked layers.
*   **Base:** `surface` (#131313) acts as the floor of the experience.
*   **Secondary Sections:** Use `surface_container_low` for large content blocks.
*   **Floating Elements:** Use `surface_container_high` (#2A2A2A) for interactive cards.
*   **Prominence:** To highlight a premium service package, nest a `surface_container_highest` card inside a `surface_container_low` section to create natural visual "lift."

### Glass & Signature Textures
To move beyond "flat" design, apply **Glassmorphism** to navigation bars and floating overlays. Use a 40% opacity `surface_variant` with a 20px `backdrop-blur`.
**Signature Gradients:** Main Call-to-Action (CTA) buttons must use a linear gradient from `primary` (#F2CA50) to `primary_container` (#D4AF37) at a 135-degree angle to mimic the sheen of polished metal.

## 3. Typography
The type system balances the authority of a serif with the modern precision of a geometric sans-serif.

*   **Display & Headlines (Noto Serif):** Used for large, editorial statements. This choice conveys tradition and "Trustworthy" expertise.
    *   *Display-LG (3.5rem):* Reserved for Hero headlines that demand attention.
*   **Body & Titles (Manrope):** A high-performance sans-serif that ensures readability and a "Modern" feel.
    *   *Title-LG (1.375rem):* Used for service category headers.
*   **Labels (Manrope):** Tight, capitalized labels in `primary` (#F2CA50) should be used for metadata or small "Elite" markers.

## 4. Elevation & Depth
In this system, depth is a function of light and shadow, not lines.

*   **The Layering Principle:** Softness is key. Place a `surface_container_lowest` (#0E0E0E) element on a `surface` background to create an "inset" look, perfect for detail-heavy data like price lists.
*   **Ambient Shadows:** If a card must "float," use a shadow with a 40px blur, 10px Y-offset, and only 6% opacity. The shadow color should be derived from `on_surface` (a deep, tinted grey) to ensure it feels like part of the environment.
*   **The Ghost Border Fallback:** If accessibility requires a stroke, use the `outline_variant` (#4D4635) at 15% opacity. This creates a "memory" of a border without breaking the editorial flow.

## 5. Components

### Buttons
*   **Primary:** Bold, gold gradient (`primary` to `primary_container`). `0.25rem` (sm) roundedness for a sharp, professional look. Text is `on_primary_fixed` (Dark).
*   **Secondary:** Ghost style. Transparent background with a `Ghost Border` and `primary` text.
*   **Tertiary:** Text-only with a subtle `primary` underline that expands on hover.

### Cards & Lists
*   **Service Cards:** No borders. Use `surface_container_high`. Separate service items using the Spacing Scale (24px padding) rather than divider lines.
*   **Pricing Tables:** Use tonal layering. The header row should be `surface_container_highest` while the body rows alternate between `surface_container` and `surface_container_low`.

### Input Fields
*   **Interactive State:** Background is `surface_container_lowest`. The label floats in `primary` color when active.
*   **Error State:** Use the `error` token (#FFB4AB) for a subtle bottom-border glow rather than a harsh red box.

### Contextual Components
*   **The Detailer's Badge:** A floating, circular chip (`9999px` radius) using `tertiary_container` (deep purple) to highlight "Limited Availability" or "Master Certified" status.
*   **Before/After Sliders:** Frameless containers using `outline` at low opacity to handle the comparison interaction.

## 6. Do's and Don'ts

### Do
*   **Do** use high-contrast imagery where the car's highlights align with the `primary` gold tokens.
*   **Do** use asymmetrical layouts (e.g., text left-aligned, image slightly offset and overlapping the section below).
*   **Do** apply `surface_bright` (#3A3939) sparingly to catch the "rim light" of certain UI containers.

### Don't
*   **Don't** use 100% opaque white for body text; use `on_surface` (#E5E2E1) to reduce eye strain and maintain the "Midnight" aesthetic.
*   **Don't** use standard 4px borders or heavy drop shadows. This immediately cheapens the "Elite" feel.
*   **Don't** use vibrant, saturated blues for backgrounds. Use the muted, deep tones of `secondary_container` to ensure the gold accents remain the focal point.

---
*This system is designed to be felt as much as it is seen—a digital ceramic coating for the Elite Finish brand.*
