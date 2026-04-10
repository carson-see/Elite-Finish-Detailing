# Design System Document: Obsidian Gold Identity

## 1. Overview & Creative North Star
**Creative North Star: "The Automotive Atelier"**

This design system is not a template; it is a digital manifestation of precision craftsmanship. To reflect the "Elite Finish" ethos, the UI must feel like a high-end editorial magazine—luxurious, high-contrast, and obsessively detailed. We move beyond the "standard SaaS look" by embracing **intentional asymmetry**, large-scale typography, and a deep, tonal palette that mimics the reflective surfaces of a freshly detailed supercar. 

The experience should feel curated rather than functional, using negative space (white space) as a luxury commodity. Every element is designed to convey authority, meticulousness, and an uncompromising standard of quality.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is built on the interplay between the void (Near Black) and the light (Gold). We utilize a sophisticated Material-based token system to manage these high-contrast relationships.

### The Palette
- **Primary (`#f2ca50`)**: Reserved for high-value actions and focal points.
- **Secondary (`#bdc2ff`) / Deep Navy (`#1A237E`)**: Used to provide cool, professional depth.
- **Tertiary (`#ddc3ff`) / Royal Purple (`#4A148C`)**: An accent for premium "signature" features or rare highlights.
- **Background (`#131313`)**: A deep, near-black foundation that allows imagery and gold to "pop."

### The "No-Line" Rule
**Prohibit the use of 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts.
*   **Implementation:** Use `surface-container-low` for secondary sections sitting on a `surface` background. For content cards, use `surface-container-highest` to create a natural break without a rigid outline.

### Surface Hierarchy & Nesting
Treat the UI as stacked physical layers.
*   **Level 0 (Base):** `surface` (`#131313`)
*   **Level 1 (Subtle Inset):** `surface-container-lowest` (`#0e0e0e`) for background areas that need to feel "recessed."
*   **Level 2 (Elevated):** `surface-container-high` (`#2a2a2a`) for interactive cards.

### The "Glass & Gradient" Rule
To mimic the "Elite Finish" of automotive clear coats, use semi-transparent surfaces with `backdrop-blur`. 
*   **Signature Textures:** Apply subtle linear gradients transitioning from `primary` (`#f2ca50`) to `primary_container` (`#d4af37`) for main CTAs to give them a metallic, three-dimensional soul.

---

## 3. Typography: Editorial Authority
The typography uses a classic Serif/Sans-Serif pairing to balance heritage with modern precision.

*   **Headlines (Noto Serif):** Use `display-lg` and `headline-lg` to command attention. High-contrast sizing is encouraged—don't be afraid to use `display-lg` (3.5rem) for hero statements to create an editorial, boutique feel.
*   **Body (Manrope):** A modern, geometric sans-serif that ensures technical details (pricing, service lists) remain hyper-legible.
*   **Intentional Emphasis:** Use Noto Serif *Italic* within headlines to highlight key value propositions (e.g., "An Obsession with the *Smallest* Details").

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and borders are too "clunky" for this brand. We achieve depth through light and transparency.

*   **The Layering Principle:** Stack `surface-container` tiers. A `surface-container-highest` card placed on a `surface` background provides enough contrast to indicate "lift" without visual noise.
*   **Ambient Shadows:** If an element must float (e.g., a modal or floating nav), use an extra-diffused shadow.
    *   *Blur:* 32px - 64px.
    *   *Opacity:* 5% - 8% of the `on-surface` color.
*   **The "Ghost Border" Fallback:** If a container requires a border for accessibility, use the `outline-variant` token at **15% opacity**. This creates a "glint" of a line rather than a structural wall.
*   **Glassmorphism:** Navigation bars and floating badges must use `surface_bright` at 60% opacity with a `20px` backdrop blur to allow the richness of the background imagery to bleed through.

---

## 5. Components: Precision Elements

### Buttons
*   **Primary:** Solid `primary` (`#f2ca50`) with `on_primary` text. Use a subtle 2px corner radius (`sm` scale) for a sharp, precision-cut look.
*   **Secondary/Ghost:** `outline` token at 20% opacity. Upon hover, transition to a semi-transparent `secondary_container`.
*   **Interactions:** All buttons should have a slight "micro-glow" (gold outer glow) on hover to mimic a light catching a metallic edge.

### Cards & Lists
*   **Forbid dividers.** To separate service items (e.g., "Interior Detail" vs "Exterior Detail"), use a vertical spacing shift of `2.5rem` or a background shift to `surface-container-low`.
*   **Pricing Tables:** Use `primary` as a highlight for the most popular tier, using `surface-container-highest` as the base for the table itself.

### Inputs & Selection
*   **Text Fields:** Use a "bottom-line only" approach or a fully recessed `surface-container-lowest` box.
*   **Chips:** Use `secondary_container` for unselected and `primary` for selected. Avoid heavy borders; use the color fill to denote state.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetry:** Place imagery off-center to create a dynamic, expensive feel.
*   **Embrace the Dark:** Maintain the "Obsidian" feel by ensuring 80% of the UI remains in the `surface` to `surface-container-low` range.
*   **High-Contrast Details:** Use Gold (`primary`) sparingly but boldly. If everything is gold, nothing is luxury.

### Don't:
*   **No Generic Icons:** Avoid thin, wireframe icons. Use filled, high-quality icons or custom SVG brand marks that match the weight of the Noto Serif typeface.
*   **No Pure White:** Never use `#FFFFFF`. For high-contrast text, use `on_surface` (`#e5e2e1`) to keep the light "soft" and premium.
*   **No Rounded Corners:** Avoid the "bubbly" look. Stick to the `sm` (2px) or `md` (4px) roundedness scale to maintain a professional, automotive-grade sharpness.