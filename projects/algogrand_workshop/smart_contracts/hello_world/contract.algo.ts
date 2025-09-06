//import { Contract, GlobalState } from "@algorandfoundation/algokit-utils"
import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript'  

export class FavoriteFood extends Contract {
  // Global state to store favorite food
  food = GlobalState<string>({ key: "food", initialValue: "Not set yet" })

  // Function to set favorite food
  setFavoriteFood(foodName: string): string {
    this.food.value = foodName
    return `Favorite food set to: ${foodName}`
  }

  // Function to retrieve favorite food
  getFavoriteFood(): string {
    return this.food.value
  }
}
