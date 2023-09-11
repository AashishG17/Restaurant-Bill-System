import { Injectable } from '@angular/core';

import { ItemInterface } from 'src/app/core/interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: ItemInterface[] = [
    { 
      id: 1,
      name: 'Burger', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
      category: 'main course',
      price: 250,
    },
    { 
      id: 2,
      name: 'Pizza', 
      thumbnail: 'https://www.thecookierookie.com/wp-content/uploads/2023/06/featured-white-pizza-recipe.jpg',
      category: 'main course',
      price: 250,
    },
    { 
      id: 3,
      name: 'Fries', 
      thumbnail: 'https://www.recipetineats.com/wp-content/uploads/2022/09/Crispy-Fries_8.jpg?w=500&h=500&crop=1',
      category: 'appetizer',
      price: 250,
    },
    { 
      id: 4,
      name: 'Sandwich', 
      thumbnail: 'https://cdn.cleaneatingmag.com/wp-content/uploads/2013/04/clean-reuben-sandwich-1.jpg?crop=1:1&width=1000',
      category: 'main course',
      price: 250,
    },
    {
      id: 5,
      name: 'Habanero BBQ Shrimp', 
      thumbnail: 'https://assets.epicurious.com/photos/5f2333d0841506e1b11da70b/1:1/w_2580%2Cc_limit/ShrimpSkewers_RECIPE_072920_10116.jpg',
      category: 'main course',
      price: 250,
    },
    {
      id: 6,
      name: 'Grilled Pork Spareribs', 
      thumbnail: 'https://assets.epicurious.com/photos/60abf60a0e303494c8490c11/1:1/w_2580%2Cc_limit/PorkSpareribs_RECIPE_052021_16270.jpg',
      category: 'main course',
      price: 250,
    },
    {
      id: 7,
      name: 'grilled Shrimp', 
      thumbnail: 'https://assets.epicurious.com/photos/5ebadc7fd3e2cba2a7b37b4e/1:1/w_2580%2Cc_limit/GrilledShrimpShishito_HERO_050420_7490.jpg',
      category: 'main course',
      price: 250,
    },
    {
      id: 8,
      name: 'Paneer Biryani',
      thumbnail: 'https://assets.epicurious.com/photos/5fa44b985cbe6116eb406a35/1:1/w_2580%2Cc_limit/grand-vegetable-biryani-recipe-110520.jpg',
      category: 'main course',
      price: 250,
    },
    {
      id: 9,
      name: 'Seared Scallops',
      thumbnail: 'https://assets.epicurious.com/photos/60abd3d94128fb7fa6411297/1:1/w_2580%2Cc_limit/ScallopsPineAppleRisotto_HERO_RECIPE_052021_16402.jpg',
      category: 'main course',
      price: 250,
    },
    {
      id: 10,
      name: 'Tamarind-Glazed Black Bass',
      thumbnail: 'https://assets.epicurious.com/photos/5e67a4473221b000088c1422/1:1/w_2580%2Cc_limit/tamarind-glazed-black-bass-with-coconut-herb-salad-recipe-BA-031020.jpg',
      category: 'main course',
      price: 250,
    },
    {
      id: 11,
      name: 'Cashew Curry',
      thumbnail: 'https://assets.epicurious.com/photos/5ff8785c5941a8ebf9455dcc/1:1/w_2580%2Cc_limit/CashewCurry_RECIPE_121620_6498.jpg',
      category: 'main course',
      price: 250,
    },
    {
      id: 12,
      name: 'Pork Tenderloin with Golden Beets',
      thumbnail: 'https://assets.epicurious.com/photos/59e8f2f0d7423f64057d4439/1:1/w_2580%2Cc_limit/pork-tenderloin-with-golden-beets-recipe-BA-101917.jpg',
      category: 'main course',
      price: 250,
    },
    {
      id: 13,
      name: 'Grilled Halibut With Chimichurri',
      thumbnail: 'https://assets.epicurious.com/photos/5535473267c3a7e837c3d024/1:1/w_2580%2Cc_limit/242584_grilled-halibut-chimichurri_6x4.jpg',
      category: 'main course',
      price: 250,
    },
    {
      id: 14,
      name: 'Red Snapper With Coconut-Clam Broth',
      thumbnail: 'https://assets.epicurious.com/photos/568a8fca2e3d7397230d8842/1:1/w_2580%2Cc_limit/Red-Snapper-With-Coconut-Clam.jpg',
      category: 'main course',
      price: 250,
    },
    {
      id: 15,
      name: 'Classic Daiquiri',
      thumbnail: 'https://assets.epicurious.com/photos/605c8c8a8af215759419a491/1:1/w_2580%2Cc_limit/Daiquiri_RECIPE_2_032321_11384.jpg',
      category: 'beverage',
      price: 250,
    },
    {
      id: 16,
      name: 'Gin Rickey',
      thumbnail: 'https://assets.epicurious.com/photos/605c8748b1622a8602ec4bab/1:1/w_2580%2Cc_limit/GinRickey_RECIPE_2_032321_11568.jpg',
      category: 'beverage',
      price: 250,
    },
    {
      id: 17,
      name: 'The Classic Margarita',
      thumbnail: 'https://assets.epicurious.com/photos/627e777232116283cbeb3626/1:1/w_2580%2Cc_limit/Margarita_RECIPE_051222_34068.jpg',
      category: 'beverage',
      price: 250,
    },
    {
      id: 18,
      name: 'Queens Park Swizzle',
      thumbnail: 'https://assets.epicurious.com/photos/620433d72f9a37ddf8cc00e5/1:1/w_2580%2Cc_limit/queens-park-swizzle-andy-sewell.jpg',
      category: 'beverage',
      price: 250,
    },
    {
      id: 19,
      name: 'Caipirinha',
      thumbnail: 'https://assets.epicurious.com/photos/643979cc6957537dfd61b47f/1:1/w_2580%2Cc_limit/Caipirinha_RECIPE_041223_51459.jpg',
      category: 'beverage',
      price: 250,
    },
    {
      id: 20,
      name: 'Mojito',
      thumbnail: 'https://assets.epicurious.com/photos/62700495b2eaa778eefd00e8/1:1/w_2580%2Cc_limit/Mojito_RECIPE_042822_33166.jpg',
      category: 'beverage',
      price: 250,
    },
    {
      id: 21,
      name: 'Siesta',
      thumbnail: 'https://assets.epicurious.com/photos/6499d397a6da959acf49be33/1:1/w_2580%2Cc_limit/Siesta_RECIPE_062223_55695.jpg',
      category: 'beverage',
      price: 250,
    },
    {
      id: 22,
      name: 'Rosie Ranch Water',
      thumbnail: 'https://assets.epicurious.com/photos/62fa60b076285708982d6a05/1:1/w_2580%2Cc_limit/Ranch_Water_RECIPE_081120_38479.jpg',
      category: 'beverage',
      price: 250,
    },
    {
      id: 23,
      name: 'Orange-Glazed Meatballs',
      thumbnail: 'https://www.tasteofhome.com/wp-content/uploads/2018/07/Orange-Glazed-Meatballs_EXPS_THSO18_228881_D04_19_9b-1.jpg?fit=700,700',
      category: 'appetizer',
      price: 250,
    },
    {
      id: 24,
      name: 'Fried Prosciutto Tortellini',
      thumbnail: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Fried-Prosciutto-Tortellini_EXPS_THN16_196633_C06_16_1b-5.jpg?fit=700,700',
      category: 'appetizer',
      price: 250,
    },
    {
      id: 25,
      name: 'Ham n Cheese Biscuit Stacks',
      thumbnail: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Ham-n-Cheese-Biscuit-Stacks_EXPS_HC17_31947_D10_19_8b-2.jpg?fit=700,700',
      category: 'appetizer',
      price: 250,
    },
    {
      id: 26,
      name: 'Cheese Fries',
      thumbnail: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps26787_FF163882B01_12_2b-6.jpg?fit=700,700',
      category: 'appetizer',
      price: 250,
    },
    {
      id: 27,
      name: 'Crispy Sriracha Spring Rolls',
      thumbnail: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Sriracha-Spring-Rolls_EXPS_THCA17_196774_C11_01_1b-2.jpg?fit=700,700',
      category: 'appetizer',
      price: 250,
    },
    {
      id: 28,
      name: 'Spicy Sweet Potato Chips & Cilantro Dip',
      thumbnail: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/exps47453_HC153382D09_18_10b.jpg?fit=700,700',
      category: 'appetizer',
      price: 250,
    },
    {
      id: 29,
      name: 'Sweet Gingered Chicken Wings',
      thumbnail: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Sweet-Gingered-Chicken-Wings_exps718_RCCF143496D04_16_2bC_RMS-3.jpg?fit=700,700',
      category: 'appetizer',
      price: 250,
    },
    {
      id: 30,
      name: 'Buffalo Chicken Meatballs',
      thumbnail: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps163028_SD132779C06_13_5b_WEB-3.jpg?fit=700,700',
      category: 'appetizer',
      price: 250,
    },
  ]

  constructor() { }



}
