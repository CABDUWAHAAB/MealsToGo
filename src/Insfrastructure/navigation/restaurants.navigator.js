import React from "react";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import { RestaurentsScreen } from "../../Features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../Features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator
			screenOptions={{
				...TransitionPresets.ModalPresentationIOS,
			}}
		>
			<RestaurantStack.Screen
				name="Restaurants"
				options={{ headerShown: false }}
				component={RestaurentsScreen}
			/>
			<RestaurantStack.Screen
				name="RestaurantDetail"
				component={RestaurantDetailScreen}
			/>
		</RestaurantStack.Navigator>
	);
};
