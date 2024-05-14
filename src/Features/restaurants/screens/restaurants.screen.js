import React, { useContext, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { SafeArea } from "../../../Components/Utility/safeArea.component";
import { Spacer } from "../../../Components/spacer/spacer.component";
import {FavouriteBar} from "../../../Components/favourites/favourites-bar.component";

import { RestaurantsContext } from "../../../Services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../Services/favorites/favourites.context";

import { Search } from "../components/search.component"; 
import { RestaurentInfoCard } from "../components/restaurants-info-card.component";

import { RestaurantList } from "../components/restaurant-list.styles";


const LoadeContainer = styled(View)`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const Loader = styled(ActivityIndicator)`
	margin-left: -25px;
`;

export const RestaurentsScreen = ({ navigation }) => {
	const { isLoading, restaurants } = useContext(RestaurantsContext);
	const {favourites} = useContext(FavouritesContext);
	const [isToggled, setIsToggled] = useState(false);

	return (
		<SafeArea>
			{isLoading && (
				<LoadeContainer>
					<Loader
						size={50}
						animating={true}
						color={MD2Colors.red800}
					/>
				</LoadeContainer>
			)}
			<Search isFavouriteToggled={isToggled} onFavouriteToggled={() => setIsToggled(!isToggled)} />
			{isToggled && (<FavouriteBar favourites={favourites} onNavigate={navigation.navigate}/>)}
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("RestaurantDetail", {
									restaurant: item,
								})
							}
						>
							<Spacer position="bottom" size="large">
								<RestaurentInfoCard restaurant={item} />
							</Spacer>
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
