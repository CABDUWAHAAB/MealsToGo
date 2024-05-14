import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// nav and screens
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../Features/Map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";

// icons
import { Ionicons } from "@expo/vector-icons";
// 
import { FavouritesContextProvider } from "../../Services/favorites/favourites.context";
import { LocationContextProvider } from "../../Services/location/location.context";
import { RestaurantsContextProvider } from "../../Services/restaurants/restaurants.context";





const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: "restaurant",
	Map: "map",
	Settings: "settings",
};

const CreatescreenOptions = ({ route, focused, color, size }) => {
	const iconName = focused ? TAB_ICON[route.name] : TAB_ICON[route.name];
	return {
		tabBarIcon: ({ color, size }) => {
			return <Ionicons name={iconName} size={size} color={color} />;
		},
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "gray",
	};
};

export const AppNavigator = () => {
	return (
		<>
		<FavouritesContextProvider>
			<LocationContextProvider>
				<RestaurantsContextProvider>
					<Tab.Navigator screenOptions={CreatescreenOptions}>
						<Tab.Screen
							name={"Restaurants"}
							options={{headerShown: false}}
							component={RestaurantsNavigator}
						/>
						<Tab.Screen name="Map" component={MapScreen} options={{headerShown: false}} />
						<Tab.Screen name="Settings" component={SettingsNavigator} />
					</Tab.Navigator>
				</RestaurantsContextProvider>
			</LocationContextProvider>
		</FavouritesContextProvider>		
		</>
	);
};
