import { OffersFull } from '../types/types';

export const images = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
];

const amsterdamCity = {
  name: 'Amsterdam',
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
};

const offers: OffersFull[] = [
  {
    id: '1',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    rating: 4,
    previewImage: images[0],

    city: amsterdamCity,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },

    isFavorite: false,
    isPremium: false,

    description: 'A quiet cozy place near the river with wooden interior.',
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Heating', 'Kitchen', 'Washing machine'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    images,
  },

  {
    id: '2',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 4.5,
    previewImage: images[1],

    city: amsterdamCity,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },

    isFavorite: true,
    isPremium: true,

    description: 'Luxury apartment in the very heart of Amsterdam.',
    bedrooms: 3,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cable TV'],
    host: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    images,
  },

  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4.7,
    previewImage: images[2],

    city: amsterdamCity,
    location: {
      latitude: 52.365553943508,
      longitude: 4.86109666406198,
      zoom: 8,
    },

    isFavorite: false,
    isPremium: false,

    description: 'Apartment with stunning canal view.',
    bedrooms: 2,
    maxAdults: 3,
    goods: ['Wi-Fi', 'Heating'],
    host: {
      name: 'Sophie',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    images,
  },

  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5,
    previewImage: images[3],

    city: amsterdamCity,
    location: {
      latitude: 52.375553943508,
      longitude: 4.84109666406198,
      zoom: 8,
    },

    isFavorite: true,
    isPremium: false,

    description: 'Perfect place for a comfortable stay.',
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Air conditioning', 'Kitchen', 'Coffee machine'],
    host: {
      name: 'John',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    images,
  },

  {
    id: '5',
    title: 'Modern studio in city center',
    type: 'Studio',
    price: 95,
    rating: 4.3,
    previewImage: images[4],

    city: amsterdamCity,
    location: {
      latitude: 52.358553943508,
      longitude: 4.87109666406198,
      zoom: 8,
    },

    isFavorite: false,
    isPremium: true,

    description: 'Modern studio close to all attractions.',
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Elevator'],
    host: {
      name: 'Emma',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    images,
  },
];

export default offers;
