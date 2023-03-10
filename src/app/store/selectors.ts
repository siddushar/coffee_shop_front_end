import { createSelector } from "@ngrx/store"
import { AppState } from "./reducers"

export const selectUser = (state: AppState) => state.user
export const selectCart = (state: AppState) => state.cart

export const openRequests = (state: AppState) => state.openRequests

// export const selectCartCount = (state: AppState) => state.selectCartCount

export const selectIsLoading = createSelector(
  (state: AppState) => state.openRequests,
  openRequests => openRequests != 0,
)

export const selectIsSmallScreen = (state: AppState) => state.isSmallScreen

export const selectIsLoggedIn = createSelector(selectUser, user => !!user)
export const selectIsAdmin = createSelector(selectUser, user => !!user?.is_admin)
