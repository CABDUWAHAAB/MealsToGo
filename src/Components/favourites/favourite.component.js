import React, { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../Services/favorites/favourites.context";
import { TouchableOpacity } from "react-native";
import { theme } from "../../Insfrastructure/theme";

const FavouriteButton = styled(TouchableOpacity)`
	position: absolute;
	top: 12px;
	right: 15px;
	z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
	const { favourites, addToFavourites, removeFromFavourites } =
		useContext(FavouritesContext);

	const isFavourite = favourites.find(
		(r) => r.placeId === restaurant.placeId
	);
	return (
		<FavouriteButton onPress={() => {
            !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)
        }}>
			<AntDesign
				name={isFavourite ? "heart" : "hearto"}
				size={24}
				color={
					isFavourite
						? theme.colors.text.error
						: theme.colors.bg.pramary
				}
			/>
		</FavouriteButton>
	);
};
