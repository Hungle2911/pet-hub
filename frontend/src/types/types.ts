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
  availability: Availability[]
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
export interface Availability {
  id?: number;
  start_date: Date;
  end_date: Date;
  isAvailable: boolean;
}

interface BookingFormData {
  startDate: Date;
  endDate: Date;
}

interface AppointmentRequestProps {
  
}