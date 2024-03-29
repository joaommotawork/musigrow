import {
	combineReducers,
	configureStore,
	PreloadedState,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import reactBurgerMenuReducer from '@features/reactBurgerMenu/reactBurgerMenuSlice';

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
	reactBurgerMenu: reactBurgerMenuReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
	return configureStore({
		reducer: rootReducer,
		// Adding the api middleware enables caching, invalidation, polling,
		// and other useful features of `rtk-query`.
		middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
		preloadedState,
	});
}

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(setupStore().dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
