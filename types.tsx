import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Recipe: { id: number };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type RecipeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Recipe"
>;

export interface Nutrient {
  name: string;
  amount: number;
  unit: string;
}

export interface Nutrition {
  nutrients: Nutrient[];
}

export interface ListRecipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  nutrition: Nutrition;
}

export interface Measure {
  [key: string]: any;
}

export interface ExtendedIngredient {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  measures: Measure[];
  meta: any[];
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  unit: string;
}

export interface Taste {
  bitterness: number;
  fattiness: number;
  saltiness: number;
  savoriness: number;
  sourness: number;
  spiciness: number;
  sweetness: number;
}

export interface WinePairing {
  pairedWines: string[];
  pairingText: string;
  productMatches: any[];
}

export interface Recipe {
  aggregateLikes: number;
  analyzedInstructions: {
    name: string;
    steps: string[];
  }[];
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: string[];
  dishTypes: string[];
  extendedIngredients: ExtendedIngredient[];
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  lowFodmap: boolean;
  occasions: string[];
  originalId: any;
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularScore: number;
  summary: string;
  sustainable: boolean;
  taste: Taste;
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
  winePairing: WinePairing;
}
