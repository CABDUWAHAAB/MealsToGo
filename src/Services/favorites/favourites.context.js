import React, { createContext, useState, useEffect, useMemo, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from "../authentication/authentication.context";


export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    
    const { user } = useContext(AuthenticationContext);

    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value, uid) => {
      try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
      } catch (e) {
          console.error("Failed to store data", e);
      }
  };
    
    
  const loadFavourites = async (uid) => {
    try {
        const value = await AsyncStorage.getItem(`@favourites-${uid}`);
        if (value !== null) {
            setFavourites(JSON.parse(value));
        }
    } catch (e) {
        console.error("Failed to load data", e);
    }
};


    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(
            (x) => x.placeId !== restaurant.placeId
        );
        setFavourites(newFavourites);
    };

    useEffect(() => {
        if (user && user.uid) {
          loadFavourites(user.uid);
        }
    }, [user]);
    
      useEffect(() => {
        if (user && user.uid && favourites.length) {
          saveFavourites(favourites, user.uid);
        }
      }, [favourites, user]);

    const favouritesController = useMemo(() => ({
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
    }), [favourites]);

    return (
        <FavouritesContext.Provider value={favouritesController}>
            {children}
        </FavouritesContext.Provider>
    );
};
