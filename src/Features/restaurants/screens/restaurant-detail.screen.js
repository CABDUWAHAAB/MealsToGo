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
							<List.Item title="Sandwich" />
							<List.Item title="Waffles" />
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
							<List.Item title="Pizaa" />
							<List.Item title="Spaghetti with Meatballs" />
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
							<List.Item title="Burritos" />
							<List.Item title="Meatballs and rice" />
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
							<List.Item title="Coca Cola" />
							<List.Item title="Orange Juice" />
						</List.Accordion>
				</ScrollView>
			</SafeArea>
		</>
	);
};
