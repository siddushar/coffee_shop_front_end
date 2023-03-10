import { createAction, props } from "@ngrx/store"
// import { Dish, User } from "../models/models"
import { Cart } from "./reducers"

export const loadStart = createAction("[App] HTTP Loading Start")
export const loadEnd = createAction("[App] HTTP Loading End")

export const setIsSmallScreen = createAction(
  "[App] Set Screen Size",
  props<{ isSmallScreen: boolean }>(),
)

export const setUserInfo = createAction("[User] Set User Info", props<{ user: any }>())
export const deleteUserInfo = createAction("[User] Clear User Info")

export const addDishToCart = createAction("[Cart] Add Dish", props<{ dish: any }>())

export const setDishQuantity = createAction(
  "[Cart] Set Dish Quantity",
  props<{ id: number; quantity: number }>(),
)

export const replaceCart = createAction("[Cart] Replace", props<{ cart: Cart }>())
export const clearCart = createAction("[Cart] Clear")
