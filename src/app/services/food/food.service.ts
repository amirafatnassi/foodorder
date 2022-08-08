import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll() : Foods[]{
    return [
      {
        id: 1,
        name: 'veggies awith salmon and avocado',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        star:4,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['dlowFood', 'lunch'],
      },
      {
        id: 2,
        name: 'tuna sandwich',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['france', 'japan', 'phillippens'],
        star:3.9,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['sandwich', 'fastfood'],
      },
      {
        id: 3,
        name: 'salad with meatballs',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['mexico', 'middle east', 'china'],
        star:4.2,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['salad', 'healthy'],
      },
      {
        id: 4,
        name: 'spaghetti',
        price: 35,
        cookTime: '30-50',
        favorite: false,
        origins: ['italy'],
        star:4,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['pasta', 'spaghetti'],
      },
      {
        id: 5,
        name: 'french fries',
        price: 5,
        cookTime: '5-10',
        favorite: true,
        origins: ['french', 'belgium'],
        star:3.9,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['fries', 'potato'],
      },
      {
        id: 6,
        name: 'pain perdu',
        price: 12,
        cookTime: '5-10',
        favorite: false,
        origins: ['french'],
        star:4.2,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['breakfast', 'fruits'],
      },
    ];
  }
}
