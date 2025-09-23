# 🌌 Aurora Night Theme - Designsystem Dokumentasjon

## Oversikt

Aurora Night er et premium designsystem inspirert av nordlys-estetikk, med fokus på dype kosmiske farger, glasseffekter og subtile animasjoner. Temaet er optimalisert for å harmonere med aurora-bakgrunnsbilder.

---

## 🎨 Fargepalett

### Bakgrunnsfarger

Dype, mørke toner som skaper dybde og kontrast mot lyse elementer:

| Variabel | HEX       | Bruksområde       |
| -------- | --------- | ----------------- |
| `--bg-1` | `#1a1530` | Primær bakgrunn   |
| `--bg-2` | `#241d3f` | Sekundær bakgrunn |
| `--bg-3` | `#2d2547` | Tertiær bakgrunn  |

### Aurora Gradient Farger

Hentet direkte fra nordlys-fenomenet:

| Variabel          | HEX       | Beskrivelse                          |
| ----------------- | --------- | ------------------------------------ |
| `--aurora-teal`   | `#4fd9d9` | Luminøs cyan - starten av nordlyset  |
| `--aurora-purple` | `#9b7bde` | Dyp lilla - mystisk og elegant       |
| `--aurora-pink`   | `#e98fb0` | Myk rosa - varm og inviterende       |
| `--aurora-orange` | `#f4a460` | Gyllen orange - solnedgang-inspirert |
| `--aurora-gold`   | `#f5c563` | Rik gull - luksus og varme           |

### Gradient System

Fire-trinns gradient brukt i knapper og interaktive elementer:

```css
--g1: #4fd9d9; /* Cyan - start */
--g2: #8b9aff; /* Indigo - tidlig fase */
--g3: #c98dd9; /* Violet - midt-fase */
--g4: #ff99b8; /* Rose - slutt */
```

**Bruk:**

- Primærknapper: g1 → g2 → g3
- Valgte chips: g3 → g4
- Progress bar: aurora-teal → aurora-purple → aurora-gold

### Glass Effects

Transparente lag med blur for dybde:

| Variabel         | Opacity   | Bruksområde            |
| ---------------- | --------- | ---------------------- |
| `--glass`        | ~75%      | Standard kort/paneler  |
| `--glass-strong` | ~88%      | Viktige elementer      |
| `--glass-br`     | `#4a3d6b` | Border-farge for glass |

### Aksent & Interaktivitet

| Variabel   | HEX       | Bruksområde                      |
| ---------- | --------- | -------------------------------- |
| `--accent` | `#ffd89b` | Priser, highlights               |
| `--ring`   | `#b8a4ff` | Focus rings, interaktiv feedback |

---

## 🧩 Komponenter

### `.title` - Hovedoverskrifter

**Styling:**

- Gradient tekst: hvit → lys lilla → gull
- Text shadow med aurora-glow
- Font: Black weight, tight tracking
- Responsiv: 2xl → 3xl → 4xl

**Bruk:**

```html
<h1 class="title">What is the occasion for the gift?</h1>
```

### `.card` - Glasskort

**Egenskaper:**

- Gradient bakgrunn: rgba(42,33,69,0.85) → rgba(51,40,86,0.75)
- Backdrop blur: 20px
- Border: subtle aurora-purple glow
- Box shadow: multi-layer med teal accent

**Hover:**

- Transform: translateY(-2px)
- Shadow intensiveres

### `.btn` - Primærknapper

**Standard:**

- Background: linear gradient g1 → g2 → g3
- Shadow: aurora-purple med cyan accent
- Padding: 6/3 (px)
- Border radius: xl

**Hover:**

- Scale: 1.01
- Transform: translateY(-1px)
- Shadow øker

**Focus:**

- Ring: 2px aurora ring
- Ingen outline

### `.chip` - Valgchips (wizard)

**Normal state:**

- Background: indigo → violet gradient
- Text: bold, sm-base
- Padding: 2.5/6 (py/px)

**Selected state (`[data-on='true']`):**

- Background: orange → gold gradient
- Scale: 1.03
- Shadow: større glow

**Hover:**

- Transform: translateY(-2px) scale(1.02)

### `.btn-outline` - Sekundærknapper

**Styling:**

- Border: aurora-purple/35
- Background: transparent med subtle white gradient
- Text: lys lilla

**Hover:**

- Border: aurora-purple/60
- Background: aurora gradient/10-15%
- Shadow: purple glow

### `.gift-card` - Produktkort

**Layout:**

- Grid: 80px thumbnail + flexible content
- Gap: 4

**Components:**

- `.gift-thumb`: 80x80px, rounded-xl, gradient bg
- `.gift-title`: gradient text, base size
- `.badge`: tiny (10px), subtle bg, aurora border
- `.price`: accent color med glow

**Hover (card):**

- Transform: translateY(-3px) rotate(-0.5deg)
- Shadow expansion

### `.progress-bar` - Fremdriftsindikator

**Egenskaper:**

- Background: teal → purple → gold gradient
- Height: 3 (12px)
- Shimmer animation: hvit glow beveger seg
- Shadow: cyan/purple glow

**Animation:**

```css
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
```

---

## ✨ Animasjoner & Transitions

### Standard Transitions

- **Duration:** 300ms (0.3s)
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` - smooth "ease-out-quint"
- **Hover lift:** translateY(-1px til -3px)
- **Scale:** 1.01 til 1.03

### Keyframe Animations

#### Aurora Glow (ambient)

```css
@keyframes aurora-glow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}
/* Duration: 8s, infinite */
```

#### Shimmer (progress bar)

```css
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
/* Duration: 2s, infinite */
```

#### Pulse Glow (progress bar)

```css
@keyframes pulse-glow {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.1);
  }
}
```

#### Fade In (headers)

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Duration: 0.6s */
```

---

## 🎯 Bruksmønstre

### Wizard Flow (steg-for-steg)

1. **Header:** `StepHeaderComponent` med progress
2. **Content:** `.step` container med `.chip-group`
3. **Footer:** Navigation buttons (`.btn` + `.btn-outline`)

### Resultat/Liste View

1. **Grid layout:** `grid-auto` (auto-fit 180px)
2. **Cards:** `.gift-card` komponenter
3. **Actions:** Inline buttons i hvert kort

### Forms (fremtidig bruk)

- `.field`: Wrapper med spacing
- `.label`: Uppercase, 70% opacity
- `.input`: Dark bg med subtle border, focus = ring

---

## 🌈 Shadow System

### Levels

| Class          | Box Shadow                           | Bruksområde    |
| -------------- | ------------------------------------ | -------------- |
| Small          | `0 6px 20px rgba(0,0,0,0.2)`         | Inputs, badges |
| Medium         | `0 12px 32px rgba(139,154,255,0.35)` | Buttons, chips |
| Large          | `0 16px 40px rgba(0,0,0,0.4)`        | Cards          |
| `.shadow-soft` | `0 12px 36px` + aurora accent        | Custom utility |

### Multi-layer Shadows

Alle primære komponenter bruker 3-4 lag:

1. **Main shadow:** Deep black for dybde
2. **Accent glow:** Aurora colors (cyan/purple/gold)
3. **Inset highlight:** rgba(255,255,255,0.1) top
4. **Inset shadow:** rgba(0,0,0,0.2) bottom

---

## 📱 Responsivitet

### Breakpoints

- `sm:` 640px - små tablets
- `md:` 768px - tablets/små laptops
- `lg:` 1024px - større skjermer

### Font Scaling

```
title: 2xl → 3xl → 4xl
subtitle: sm → base
chip: sm → base
btn: sm fixed
```

### Spacing Adjustments

- Container: max-w-6xl, px-4
- Step gap: 6 (1.5rem)
- Card padding: 5 (1.25rem)
- Compact på mobile, luftigere på desktop

---

## ♿ Accessibility

### Focus States

- Alle interaktive elementer har `ring-2` eller `ring-4`
- Ring color: aurora-purple/40
- Outline offset: 2px på links

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Contrast

- Text på glass: minimum 4.5:1 ratio
- Buttons: white text på dark gradients
- Focus indicators: minimum 3:1 ratio

### ARIA

- Buttons har descriptive labels
- Progress har implicit role
- Links har rel="noopener" for security

---

## 🔧 Utility Classes

### Custom Utilities

| Class            | Effect                           |
| ---------------- | -------------------------------- |
| `.center`        | flex items-center justify-center |
| `.grid-auto`     | Auto-fit grid (180px min)        |
| `.text-glow`     | Aurora text shadow               |
| `.lift`          | translateY(-2px)                 |
| `.glass-premium` | Enhanced glass effect            |

### Når brukes hva?

**`.center`:**

- Empty states
- Icon placeholders
- Loading indicators

**`.text-glow`:**

- Hero titles
- Important headings
- Call-to-action text

**`.lift`:**

- Hover states (manuell)
- Emphasized elements

---

## 🚀 Best Practices

### Performance

1. **Bruk transform over position:** Bedre GPU-akselerasjon
2. **Unngå animating layout properties:** Kun opacity, transform
3. **Will-change sparsomt:** Kun på elements som faktisk animeres

### Consistency

1. **Følg gradient-systemet:** Ikke bland egne farger
2. **Bruk definerte spacing:** gap-2, gap-3, gap-4, gap-6
3. **Standardiserte borders:** aurora-purple med opacity variations

### Dark Mode Considerations

- Allerede optimalisert for mørk bakgrunn
- Hvis light mode trengs: invert gradients, reduser opacity

---

## 📦 File Structure

```
styles/
├── globals.css          # Dette stylesheet (Tailwind + custom)
components/
├── step-header.ts       # Progress + title med animasjoner
├── gift-card.ts         # Product cards med hover effects
└── [other components]   # Følg samme pattern
```

---

## 🎨 Design Tokens (for fremtidig CSS-in-JS)

```typescript
export const auroraTheme = {
  colors: {
    bg: {
      1: '#1a1530',
      2: '#241d3f',
      3: '#2d2547',
    },
    aurora: {
      teal: '#4fd9d9',
      purple: '#9b7bde',
      pink: '#e98fb0',
      orange: '#f4a460',
      gold: '#f5c563',
    },
    gradient: {
      1: '#4fd9d9',
      2: '#8b9aff',
      3: '#c98dd9',
      4: '#ff99b8',
    },
    accent: '#ffd89b',
    ring: '#b8a4ff',
  },
  spacing: {
    step: '1.5rem',
    card: '1.25rem',
    compact: '0.5rem',
  },
  transitions: {
    default: '300ms cubic-bezier(0.16, 1, 0.3, 1)',
    slow: '500ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
};
```

---

## 🔄 Vedlikehold

### Ved oppdateringer:

1. Test med/uten backdrop image
2. Verifiser contrast ratios
3. Test reduced motion mode
4. Sjekk touch targets (min 44x44px)

### Vanlige tilpasninger:

- **Mer/mindre spacing:** Juster `step` gap
- **Tykkere/tynnere glass:** Endre opacity i `--glass`
- **Kraftigere glow:** Øk shadow blur/spread
- **Raskere/saktere animasjoner:** Endre transition duration

---

_Sist oppdatert: September 2025_  
_Designsystem av: Aurora Night Theme_
