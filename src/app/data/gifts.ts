import { GiftIdea } from '../types/models';

export const GIFT_CATALOG: GiftIdea[] = [
  // BIRTHDAY
  {
    id: 'bd-1',
    title: 'Smartwatch',
    price: 1990,
    tags: ['tech', 'daily'],
    image: '',
    suitability: { occasions: ['birthday'], ages: ['18-24', '25-34', '35-44'] },
  },
  {
    id: 'bd-2',
    title: 'Gourmet chocolate box',
    price: 249,
    tags: ['treat'],
    image: '',
    suitability: {
      occasions: ['birthday'],
      ages: ['u18', '18-24', '25-34', '35-44', '45-54', '55plus'],
    },
  },
  {
    id: 'bd-3',
    title: 'Experience gift card (escape room)',
    price: 450,
    tags: ['experience', 'fun'],
    image: '',
    suitability: { occasions: ['birthday'], ages: ['18-24', '25-34', '35-44'] },
  },

  // ANNIVERSARY
  {
    id: 'an-1',
    title: 'Personalized photo book',
    price: 399,
    tags: ['personal', 'memory'],
    image: '',
    suitability: { occasions: ['anniversary', 'romantic'] },
  },
  {
    id: 'an-2',
    title: 'Couple’s spa voucher',
    price: 1190,
    tags: ['relax', 'experience'],
    image: '',
    suitability: {
      occasions: ['anniversary', 'romantic'],
      ages: ['25-34', '35-44', '45-54', '55plus'],
    },
  },
  {
    id: 'an-3',
    title: 'Engraved wine glasses',
    price: 499,
    tags: ['home', 'classy'],
    image: '',
    suitability: { occasions: ['anniversary', 'wedding', 'housewarming'] },
  },

  // GRADUATION
  {
    id: 'gr-1',
    title: 'Professional backpack',
    price: 899,
    tags: ['work', 'practical'],
    image: '',
    suitability: { occasions: ['graduation'], ages: ['18-24', '25-34'] },
  },
  {
    id: 'gr-2',
    title: 'Noise-canceling headphones',
    price: 1590,
    tags: ['tech', 'focus'],
    image: '',
    suitability: { occasions: ['graduation'], ages: ['18-24', '25-34', '35-44'] },
  },
  {
    id: 'gr-3',
    title: 'Fountain pen & notebook set',
    price: 590,
    tags: ['office', 'classic'],
    image: '',
    suitability: { occasions: ['graduation'], ages: ['18-24', '25-34', '35-44'] },
  },

  // CHRISTMAS
  {
    id: 'xm-1',
    title: 'Cozy wool throw blanket',
    price: 799,
    tags: ['home', 'winter'],
    image: '',
    suitability: {
      occasions: ['christmas', 'housewarming'],
      ages: ['25-34', '35-44', '45-54', '55plus'],
    },
  },
  {
    id: 'xm-2',
    title: 'Family board game',
    price: 399,
    tags: ['family', 'fun'],
    image: '',
    suitability: { occasions: ['christmas'], ages: ['u18', '18-24', '25-34', '35-44'] },
  },
  {
    id: 'xm-3',
    title: 'Electric milk frother',
    price: 349,
    tags: ['coffee', 'kitchen'],
    image: '',
    suitability: { occasions: ['christmas', 'housewarming'] },
  },

  // VALENTINE
  {
    id: 'va-1',
    title: 'Rose bouquet & handwritten card',
    price: 399,
    tags: ['romance', 'classic'],
    image: '',
    suitability: { occasions: ['valentine', 'romantic'] },
  },
  {
    id: 'va-2',
    title: 'Perfume / Eau de parfum',
    price: 890,
    tags: ['fragrance'],
    image: '',
    suitability: { occasions: ['valentine', 'romantic'], genders: ['female'] },
  },
  {
    id: 'va-3',
    title: 'Leather bracelet/watch strap',
    price: 590,
    tags: ['style'],
    image: '',
    suitability: { occasions: ['valentine', 'romantic'], genders: ['male'] },
  },

  // MOTHER’S DAY
  {
    id: 'md-1',
    title: 'Spa gift set',
    price: 549,
    tags: ['self-care'],
    image: '',
    suitability: { occasions: ['mothersday'], genders: ['female'] },
  },
  {
    id: 'md-2',
    title: 'Personalized necklace (initials)',
    price: 749,
    tags: ['jewelry', 'personal'],
    image: '',
    suitability: { occasions: ['mothersday', 'romantic'], genders: ['female'] },
  },
  {
    id: 'md-3',
    title: 'Herb garden kit',
    price: 299,
    tags: ['garden', 'home'],
    image: '',
    suitability: { occasions: ['mothersday', 'housewarming'] },
  },

  // FATHER’S DAY
  {
    id: 'fd-1',
    title: 'Whiskey stones & tumblers',
    price: 399,
    tags: ['bar'],
    image: '',
    suitability: { occasions: ['fathersday', 'housewarming'], genders: ['male'] },
  },
  {
    id: 'fd-2',
    title: 'BBQ tool set',
    price: 599,
    tags: ['outdoor', 'cooking'],
    image: '',
    suitability: { occasions: ['fathersday', 'housewarming'], genders: ['male'] },
  },
  {
    id: 'fd-3',
    title: 'Multi-tool pocket knife',
    price: 349,
    tags: ['practical'],
    image: '',
    suitability: {
      occasions: ['fathersday', 'birthday'],
      genders: ['male'],
      ages: ['25-34', '35-44', '45-54'],
    },
  },

  // WEDDING
  {
    id: 'wd-1',
    title: 'Premium bed linen set',
    price: 1290,
    tags: ['home', 'couple'],
    image: '',
    suitability: { occasions: ['wedding', 'housewarming'] },
  },
  {
    id: 'wd-2',
    title: 'Cast iron dutch oven',
    price: 1190,
    tags: ['kitchen', 'quality'],
    image: '',
    suitability: { occasions: ['wedding', 'housewarming'] },
  },
  {
    id: 'wd-3',
    title: 'Gift card for fine dining',
    price: 1200,
    tags: ['experience', 'couple'],
    image: '',
    suitability: { occasions: ['wedding', 'anniversary'] },
  },

  // BABY SHOWER
  {
    id: 'bs-1',
    title: 'Baby clothing bundle (0–6m)',
    price: 499,
    tags: ['baby'],
    image: '',
    suitability: { occasions: ['babyshower'], ages: ['25-34', '35-44'] },
  },
  {
    id: 'bs-2',
    title: 'Swaddle & blanket set',
    price: 399,
    tags: ['baby', 'soft'],
    image: '',
    suitability: { occasions: ['babyshower'] },
  },
  {
    id: 'bs-3',
    title: 'Memory book: Baby’s first year',
    price: 329,
    tags: ['keepsake'],
    image: '',
    suitability: { occasions: ['babyshower'] },
  },

  // HOUSEWARMING
  {
    id: 'hw-1',
    title: 'Scented candle set',
    price: 349,
    tags: ['home', 'decor'],
    image: '',
    suitability: { occasions: ['housewarming', 'christmas'] },
  },
  {
    id: 'hw-2',
    title: 'Olive oil & balsamic gift set',
    price: 449,
    tags: ['kitchen', 'gourmet'],
    image: '',
    suitability: { occasions: ['housewarming'] },
  },
  {
    id: 'hw-3',
    title: 'Indoor plant + pot',
    price: 399,
    tags: ['green', 'decor'],
    image: '',
    suitability: { occasions: ['housewarming'] },
  },

  // RETIREMENT
  {
    id: 'rt-1',
    title: 'Travel carry-on suitcase',
    price: 1590,
    tags: ['travel'],
    image: '',
    suitability: { occasions: ['retirement'], ages: ['55plus'] },
  },
  {
    id: 'rt-2',
    title: 'Kindle / e-reader',
    price: 1190,
    tags: ['reading', 'tech'],
    image: '',
    suitability: { occasions: ['retirement', 'birthday'], ages: ['45-54', '55plus'] },
  },
  {
    id: 'rt-3',
    title: 'Hobby kit (painting/crafts)',
    price: 590,
    tags: ['hobby', 'creative'],
    image: '',
    suitability: { occasions: ['retirement'] },
  },

  // ROMANTIC GIFT
  {
    id: 'ro-1',
    title: 'Weekend getaway voucher',
    price: 2500,
    tags: ['travel', 'romance', 'experience'],
    image: '',
    suitability: { occasions: ['romantic', 'anniversary', 'valentine'] },
  },
  {
    id: 'ro-2',
    title: 'Personalized leather wallet',
    price: 790,
    tags: ['style', 'personal'],
    image: '',
    suitability: { occasions: ['romantic', 'birthday'], genders: ['male'] },
  },
  {
    id: 'ro-3',
    title: 'Jewelry box + earrings set',
    price: 990,
    tags: ['jewelry'],
    image: '',
    suitability: { occasions: ['romantic', 'valentine'], genders: ['female'] },
  },
];
