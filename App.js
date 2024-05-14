import React from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Insfrastructure/theme";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import {
    SourceSansPro_200ExtraLight,
    SourceSansPro_300Light,
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    SourceSansPro_900Black,
} from "@expo-google-fonts/source-sans-pro";
import {
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
} from "@expo-google-fonts/lato";
import { Ionicons } from "@expo/vector-icons";
import { AuthenticationContextProvider } from "./src/Services/authentication/authentication.context";
import { Navigation } from "./src/Insfrastructure/navigation";
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyD1wT6-jx_hmvIR7DfrqjPQUAGNYPKqlKg",
    authDomain: "mealstogo-766b9.firebaseapp.com",
    projectId: "mealstogo-766b9",
    storageBucket: "mealstogo-766b9.appspot.com",
    messagingSenderId: "820089085906",
    appId: "1:820089085906:web:5f2035751e52e4efd1720b"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export default function App() {
    let [SourceSansLoaded] = useFonts({
        SourceSansPro_200ExtraLight,
        SourceSansPro_300Light,
        SourceSansPro_400Regular,
        SourceSansPro_600SemiBold,
        SourceSansPro_700Bold,
        SourceSansPro_900Black,
    });

    let [LatoLoaded] = useFonts({
        Lato_100Thin,
        Lato_300Light,
        Lato_400Regular,
        Lato_700Bold,
        Lato_900Black,
    });

    if (!SourceSansLoaded || !LatoLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthenticationContextProvider>
                    <Navigation />
                </AuthenticationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}
