import React from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import { RestaurentInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../Components/Utility/safeArea.component";


export const RestaurantDetailScreen = ({ route }) => {
	const [breakfastExpanded, setBreakfastExpanded] = React.useState(false);
	const [lunchExpanded, setlunchExpanded] = React.useState(false);
	const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
	const [drinksExpanded, setDrinksExpanded] = React.useState(false);

	const { restaurant } = route.params;

	return (
		<>
			<SafeArea>
				<RestaurentInfoCard restaurant={restaurant} />
				<ScrollView>
						{/* Breakfast */}
						<List.Accordion
							title="Breakfast"
							left={(props) => (
								<List.Icon {...props} icon="bread-slice" />
							)}
							expanded={breakfastExpanded}
							onPress={() =>
								setBreakfastExpanded(!breakfastExpanded)
							}
						>
							<List.Item title="First item" />
							<List.Item title="Second item" />
						</List.Accordion>

						{/* Lunch */}
						<List.Accordion
							title="Lunch"
							left={(props) => (
								<List.Icon {...props} icon="hamburger" />
							)}
							expanded={lunchExpanded}
							onPress={() => setlunchExpanded(!lunchExpanded)}
						>
							<List.Item title="First item" />
							<List.Item title="Second item" />
						</List.Accordion>

						{/* Dinner */}
						<List.Accordion
							title="Dinner"
							left={(props) => (
								<List.Icon {...props} icon="food-drumstick" />
							)}
							expanded={dinnerExpanded}
							onPress={() => setDinnerExpanded(!dinnerExpanded)}
						>
							<List.Item title="First item" />
							<List.Item title="Second item" />
						</List.Accordion>

						{/* Drinks */}
						<List.Accordion
							title="Drinks"
							left={(props) => (
								<List.Icon {...props} icon="cup" />
							)}
							expanded={drinksExpanded}
							onPress={() => setDrinksExpanded(!drinksExpanded)}
						>
							<List.Item title="First item" />
							<List.Item title="Second item" />
						</List.Accordion>
				</ScrollView>
			</SafeArea>
		</>
	);
};
