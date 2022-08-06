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
        name: 'vtuna sandwich',
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
        name: 'sald with meatballs',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['mexico', 'middle east', 'china'],
        star:4.2,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['salad', 'healthy'],
      },
    ];
  }
}
