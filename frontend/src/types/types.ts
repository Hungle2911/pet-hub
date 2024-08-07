export interface SearchFormInputs {
  address: string;
  startDate: Date;
  endDate: Date;
  maxRate: number;
  maxDistance: number;
}
export interface CatSitter {
  id: number;
  experience?: string; 
  user: {
    name: string;
    latitude: number;
    longitude: number;
    location?: string;
    description?: string;
    first_name?: string;
    last_name?: string;
  };
  rate: number;
  averageRating: number | null;
}