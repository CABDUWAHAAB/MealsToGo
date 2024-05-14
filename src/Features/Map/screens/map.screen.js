import React, { useContext, useState, useEffect } from "react";
import MapView, {Callout,Marker} from "react-native-maps";

import styled from "styled-components";

import {LocationContext} from "../../../Services/location/location.context";
import {RestaurantsContext} from "../../../Services/restaurants/restaurants.context";

import { Search } from "../Components/seach.component";
import { MapCallout } from "../Components/map-callout.component";


const Map = styled(MapView)`
	flex: 1;
	width: "100%";
	height: "100%";
`;


export const MapScreen = ( {navigation}) => {

	const { location } = useContext(LocationContext);
	const { restaurants = [] } = useContext(RestaurantsContext);

	const [latDelta, setLatDelta] = useState(0);

  	const { lat, lng, viewport } = location;

	useEffect(() => {
		const northeastLat = viewport.northeast.lat;
		const southwestLat = viewport.southwest.lat;


		setLatDelta(northeastLat - southwestLat);
		}, [location, viewport]);

	return (
		<>
			<Search/>
			<Map
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.01,
				}}
			>
				{restaurants.map((restaurant) => (
                <Marker
                    key={restaurant.name}
                    title={restaurant.name}
                    coordinate={{
                        latitude: restaurant.geometry.location.lat,
                        longitude: restaurant.geometry.location.lng,
                    }}
                >
					<Callout onPress={() => {
						navigation.navigate("RestaurantDetail", { restaurant: restaurant})
					}}>
						<MapCallout restaurant={restaurant}/>
					
					</Callout>
				</Marker>
            ))}
			</Map>
		</>
	);
};
