import React, { useContext } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
// safeArea.component.js
import { SafeArea } from "../../../Components/Utility/safeArea.component";
// restaurant-info-card-component.js
import { RestaurentInfoCard } from "../components/restaurants-info-card.component";
// spacer.component.js
import { Spacer } from "../../../Components/spacer/spacer.component";
import styled from "styled-components/native";
//
import { RestaurantsContext } from "../../../Services/restaurants/restaurants.context";
// ActivityIndicator and colors
import { ActivityIndicator, MD2Colors } from "react-native-paper";
// search.component.js
import { Search } from "../components/search.component";

const CardFlatList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

const ViewLoader = styled(View)`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const Loader = styled(ActivityIndicator)`
	margin-left: -25px;
`;

export const RestaurentsScreen = ({ navigation }) => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			{isLoading && (
				<ViewLoader>
					<Loader
						size={50}
						animating={true}
						color={MD2Colors.red800}
					/>
				</ViewLoader>
			)}
			<Search />
			<CardFlatList
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
