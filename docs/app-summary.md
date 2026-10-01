# 📱 Applikasjonsoversikt

Match-A-Gift er en moderne webapplikasjon som hjelper brukere med å finne perfekte gavetips basert på mottakerens alder, kjønn og anledning.

## 🎯 Hovedfunksjonalitet

### 1. Gavevelger
- Veiviser i tre steg for å finne gavetips
- Forslagene hentes fra en fast gavekatalog og filtreres på anledning,
  med alder og kjønn som tilpasning

### 2. Favoritter
- Favorittmerking av gavetips
- Favorittene lagres lokalt i nettleseren (LocalStorage)

### 3. Brukergrensesnitt
- Moderne glass-morfisme design
- Responsivt layout
- Animerte overganger
- Bakgrunnsbilde i WebP

## 🛠️ Teknisk Implementasjon

### Frontend Rammeverk
- **Angular**: Moderne web rammeverk
- **TypeScript**: Type-sikker koding
- **Tailwind CSS**: Utility-first styling

### Databehandling
- **LocalStorage**: Lokal datalagring
- **Signals**: Tilstandshåndtering
- **TypeScript Interfaces**: Streng typing

### Ytelse
- **WebP Bilder**: Moderne bildeformat
- **Standalone Components**: Forbedret byggetid

## 📊 Datamodeller

Se `src/app/types/models.ts`.

### GiftIdea (gavetips)
```typescript
interface GiftIdea {
  id: string;
  title: string;
  description?: string;
  price?: number;
  image?: string;
  tags?: string[];
  suitability: {
    occasions: Occasion[];
    genders?: Gender[]; // utelatt = passer alle
    ages?: AgeRange[]; // utelatt = passer alle
  };
}
```

### SuggestionInput (valgene i veiviseren)
```typescript
interface SuggestionInput {
  occasion: Occasion;
  recipient: { gender?: Gender; ageRange?: AgeRange };
}
```

## 🔄 Arbeidsflyt

1. **Brukerinndata**
   - Velg alder
   - Velg kjønn
   - Velg anledning

2. **Prosessering**
   - Filtrer gavekatalogen på anledning
   - Begrens til et fast antall forslag

3. **Presentasjon**
   - Vis gavetips
   - Tillat favorittmerking
   - Vis detaljer

## 🎨 Design Prinsipper

1. **Brukeropplevelse**
   - Intuitiv navigasjon
   - Klare tilbakemeldinger
   - Konsistent design

2. **Tilgjengelighet**
   - WCAG-retningslinjer
   - Tastaturnavigasjon
   - Skjermleservennlig

3. **Responsivitet**
   - Mobile-first tilnærming
   - Fleksibelt layout
   - Dynamisk tilpassing

## 🔒 Sikkerhet

- Sikker datalagring
- Ingen sensitive data
- XSS-beskyttelse

## 📈 Fremtidige Forbedringer

1. **Funksjonalitet**
   - Brukerprofiler
   - Deling på sosiale medier
   - Prissammenligning

2. **Teknisk**
   - PWA-støtte
   - Offline modus
   - API-integrasjon

3. **Design**
   - Flere temaer
   - Forbedret animasjon
   - Tilpasset typografi