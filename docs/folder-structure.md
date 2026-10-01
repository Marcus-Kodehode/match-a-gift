# 📁 Mappestruktur

Denne dokumentasjonen gir en detaljert oversikt over prosjektets mappestruktur og forklarer formålet med hver mappe og viktige filer.

## 🗂️ Rotstruktur

```
match-a-gift/
├── docs/               # Prosjektdokumentasjon
├── public/            # Statiske filer og ressurser
├── src/               # Kildekode
├── angular.json       # Angular konfigurasjon
├── package.json       # Prosjektavhengigheter og scripts
├── tsconfig.json      # TypeScript konfigurasjon
├── README.md         # Prosjektoversikt
└── LICENSE           # MIT lisens
```

## 📂 Hoveddmapper

### `/docs`
Inneholder all prosjektdokumentasjon:
- `app-summary.md` - Applikasjonsoversikt
- `dataset-example.md` - Eksempel på datastruktur
- `stylesheet.md` - Stilguide
- `folder-structure.md` - Denne filen

### `/public`
Statiske ressurser som er tilgjengelige for applikasjonen:
```
public/
├── images/           # Bilder og ikoner
│   ├── BG*.webp     # Bakgrunnsbilder
│   ├── MAG-logo.png # Applikasjonslogo
│   └── MBlogo.png   # Utviklerlogo
```

### `/src`
Inneholder applikasjonens kildekode:
```
src/
├── app/              # Hovedapplikasjonskode
│   ├── core/        # Kjernefunksjonalitet
│   ├── data/        # Datamodeller og tjenester
│   ├── pages/       # Sidekomponenter
│   ├── types/       # TypeScript grensesnitt
│   └── ui/          # Gjenbrukbare UI-komponenter
├── index.html       # Hoved HTML-fil
├── main.ts          # Applikasjonens startpunkt
└── styles.css       # Globale stiler
```

## 📑 Viktige Filer

### Konfigurasjonsfiler
- `angular.json` - Angular prosjektkonfigurasjon
- `tsconfig.json` - TypeScript kompileringskonfigurasjon
- `tailwind.config.js` - Tailwind CSS konfigurasjon
- `postcss.config.js` - PostCSS konfigurasjon

### Applikasjonsfiler
- `src/app/app.ts` - Hovedapplikasjonskomponent
- `src/app/app.routes.ts` - Rutekonfigurasjon
- `src/app/types/models.ts` - Datamodeller og grensesnitt

## 🔍 Detaljert Mappestruktur

### `/src/app/core`
Inneholder kjernefunksjonalitet og tjenester:
```
core/
└── services/
    ├── storage.ts    # Lagringstjeneste
    └── suggestion.ts # Forslag og anbefalingstjeneste
```

### `/src/app/pages`
Sidekomponenter og undersider:
```
pages/
├── favorites/       # Favorittside
└── wizard/         # Veiviserkomponenter
    ├── age/        # Aldersvalg
    ├── gender/     # Kjønnsvalg
    ├── occasion/   # Anledningsvalg
    └── result/     # Resultatvisning
```

### `/src/app/ui`
Gjenbrukbare UI-komponenter:
```
ui/
├── gift-card/      # Gavekortskomponent
└── step-header/    # Trinnheader-komponent
```