// mocks/reviews.ts
import { Review } from '../types/types';

export const reviews: Review[] = [
  {
    'id': '1',
    'date': '2023-06-12',
    'user': {
      'name': 'Max',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'Всё было отлично, но чайник смотрел на меня с осуждением.',
    'rating': 4
  },
  {
    'id': '2',
    'date': '2023-07-01',
    'user': {
      'name': 'Anna',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'comment': 'Кровать настолько удобная, что я чуть не опоздала на самолёт.',
    'rating': 5,
  },
  {
    'id': '3',
    'date': '2023-05-20',
    'user': {
      'name': 'John',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'Хорошее место, но Wi-Fi иногда уходил в отпуск.',
    'rating': 3
  },
  {
    'id': '4',
    'date': '2023-08-14',
    'user': {
      'name': 'Kate',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'comment': 'Вид из окна шикарный. Соседский кот тоже.',
    'rating': 5
  },
  {
    'id': '5',
    'date': '2023-04-02',
    'user': {
      'name': 'Alex',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'Чисто, уютно, но я всё равно забыл пароль от двери.',
    'rating': 4
  },
  {
    'id': '6',
    'date': '2023-09-09',
    'user': {
      'name': 'Olga',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'comment': 'Если бы можно было поставить 6 звёзд — поставила бы.',
    'rating': 5
  },
  {
    'id': '7',
    'date': '2023-03-18',
    'user': {
      'name': 'Dmitry',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'Хорошо, но холодильник явно жил своей жизнью.',
    'rating': 2
  },
  {
    'id': '8',
    'date': '2023-10-01',
    'user': {
      'name': 'Sergey',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'Очень уютно. Осталась бы ещё, но закончился отпуск.',
    'rating': 4
  },
  {
    'id': '9',
    'date': '2023-11-11',
    'user': {
      'name': 'Sergey',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'comment': 'Заселился на ночь, остался в сердечке навсегда.',
    'rating': 5
  },
  {
    'id': '10',
    'date': '2023-12-03',
    'user': {
      'name': 'Elena',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'comment': 'Минус один балл за то, что пришлось уезжать.',
    'rating': 4
  }
];
