import React, { useState, createContext, useEffect, useMemo, } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [keyword, setKeyword] = useState("San Francisco");
	const [location, setLocation] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSearch = (searchKeyword) => {
        setIsLoading(true);
		setKeyword(searchKeyword);
	};

	useEffect(() => {
		if(!keyword.length) {
			// niks doen
			return;
		}

        locationRequest(keyword.toLowerCase())
        .then(locationTransform)

        .then((result) => {
                setIsLoading(false);
				setLocation(result);
				console.log(result);
			})
			
            .catch(err => {
                setIsLoading(false);
				setError(err);
            });
	}, [keyword])


	const locationContextValues = useMemo(() => ({
		isLoading,
		error,
		location,
		search: onSearch,
		keyword,
	}), [isLoading, error, location, keyword]);


	return (
		<LocationContext.Provider value={locationContextValues}>
			{children}
		</LocationContext.Provider>
	);
};
