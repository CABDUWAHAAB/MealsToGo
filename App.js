import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
// react-native
import { Text } from "react-native";
// ThemeProviderScreen from styled component
import { ThemeProvider } from "styled-components/native";
// theme theme heeft colors, bg, fonts, sizes, ui, spacings, etc,
import { theme } from "./src/Insfrastructure/theme";
// voor navigatiebar from the bottom nav
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// safeArea.component.js
import { SafeArea } from "./src/Components/Utility/safeArea.component";
// import sans-serif.
import {
	useFonts,
	SourceSansPro_200ExtraLight,
	SourceSansPro_300Light,
	SourceSansPro_400Regular,
	SourceSansPro_600SemiBold,
	SourceSansPro_700Bold,
	SourceSansPro_900Black,
} from "@expo-google-fonts/source-sans-pro";
// import lato
import {
	Lato_100Thin,
	Lato_300Light,
	Lato_400Regular,
	Lato_700Bold,
	Lato_900Black,
} from "@expo-google-fonts/lato";
// icons
import { Ionicons } from "@expo/vector-icons";
//
import { RestaurantsContextProvider } from "./src/Services/restaurants/restaurants.context";
//
import { LocationContextProvider } from "./src/Services/location/location.context";
import { Navigation } from "./src/Insfrastructure/navigation";
//

export default function App() {
	// for sans-serif fonts
	let [SourceSansLoaded] = useFonts({
		SourceSansPro_200ExtraLight,
		SourceSansPro_300Light,
		SourceSansPro_400Regular,
		SourceSansPro_600SemiBold,
		SourceSansPro_700Bold,
		SourceSansPro_900Black,
	});
	// for lato fonts
	let [LatoLoaded] = useFonts({
		Lato_100Thin,
		Lato_300Light,
		Lato_400Regular,
		Lato_700Bold,
		Lato_900Black,
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<LocationContextProvider>
					<RestaurantsContextProvider>
						{/* alle navigaties worden in Navigation opgeslagen. */}
						<Navigation />
					</RestaurantsContextProvider>
				</LocationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
