import { Injectable } from '@angular/core';

import { ItemInterface } from 'src/app/core/interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: ItemInterface[] = [
    { 
      name: 'Apple', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      price: 250 
    },
    { 
      name: 'Apple', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      price: 250 
    },
    { 
      name: 'Apple', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      price: 250 
    },
    { 
      name: 'Apple', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      price: 250 
    },
    { 
      name: 'Apple', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      price: 250 
    },
    { 
      name: 'Apple', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      price: 250 
    },
    { 
      name: 'Apple', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      price: 250 
    },
    { 
      name: 'Apple', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      price: 250 
    },
    { 
      name: 'Apple', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      price: 250 
    },
    { 
      name: 'Apple', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      price: 250 
    },
  ]

  constructor() { }

  

}
