export type Occasion =
  | 'birthday'
  | 'anniversary'
  | 'christmas'
  | 'graduation'
  | 'new-baby'
  | 'just-because';

export interface Recipient {
  relation: 'partner' | 'friend' | 'parent' | 'sibling' | 'coworker' | 'child' | 'other';
  ageRange?: 'u18' | '18-24' | '25-34' | '35-44' | '45-54' | '55plus';
  gender?: 'male' | 'female';
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
  tags?: string[];
  occasions?: Occasion[];
  image?: string;
  vendorUrl?: string;
}
