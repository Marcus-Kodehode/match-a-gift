export type Occasion =
  | 'birthday'
  | 'anniversary'
  | 'graduation'
  | 'christmas'
  | 'valentine'
  | 'mothersday'
  | 'fathersday'
  | 'wedding'
  | 'babyshower'
  | 'housewarming'
  | 'retirement'
  | 'romantic';

export type AgeRange = 'u18' | '18-24' | '25-34' | '35-44' | '45-54' | '55plus';
export type Gender = 'male' | 'female';

export interface Recipient {
  gender?: Gender;
  ageRange?: AgeRange;
}

export interface SuggestionInput {
  occasion: Occasion;
  recipient: Recipient;
}

export interface GiftIdea {
  id: string;
  title: string;
  description?: string;
  price?: number;
  image?: string;
  tags?: string[];
  suitability: {
    occasions: Occasion[];
    genders?: Gender[]; // hvis utelatt = passer alle
    ages?: AgeRange[]; // hvis utelatt = passer alle
  };
}
