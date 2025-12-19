
export interface MainPageProps {
  offers: OfferCardProps[];
}

export interface OfferCardProps {
  id: number;
  price: number;
  rating: number; // 0–100 (%)
  title: string;
  type: string;
  image: string;
}

export interface Review {
  id: number;
  offerId: number;
  userName: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}
