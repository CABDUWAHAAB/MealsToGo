import React from "react";
// restaurants.screen.js
// import { RestaurentsScreen } from "../../Features/restaurants/screens/restaurants.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";
// import map.screen.js
import { MapScreen } from "../../Features/Map/screens/map.screen";
// voor navigatiebar from the bottom nav
// import settings.screen.js
import { SettingsScreen } from "../../Features/Settings/screens/settings.creen";
// voor navigatiebar from the bottom nav
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// safeArea.component.js
import { SafeArea } from "../../Components/Utility/safeArea.component";
//// icons
import { Ionicons } from "@expo/vector-icons";

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
			/* You can return any component that you like here!
            but for now {iconName} and the Ionicons it self.*/
			return <Ionicons name={iconName} size={size} color={color} />;
		},
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "gray",
	};
};

export const AppNavigator = () => {
	return (
		<>
			<NavigationContainer>
				<Tab.Navigator screenOptions={CreatescreenOptions}>
					<Tab.Screen
						name={"Restaurants"}
						options={{headerShown: false}}
						component={RestaurantsNavigator}
					/>
					<Tab.Screen name="Map" component={MapScreen} options={{headerShown: false}} />
					<Tab.Screen name="Settings" component={SettingsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
};
