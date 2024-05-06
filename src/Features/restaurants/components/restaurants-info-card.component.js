import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../Components/spacer/spacer.component.js";
import { Text } from "../../../Components/typography/text.component.js";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open.js";

import {
	CardContainer,
	ImageCover,
	Info,
	Section,
	SectionEnd,
	ViewRating,
	Address,
	Icon,
} from "./restaurant-info-card.styles.js";

export const RestaurentInfoCard = ({ restaurant = {} }) => {
	const {
		placeId,
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		name = "FBI Restaurant",
		photos = [
			"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
		],
		address = "De zevende honden straat",
		ratings = 4,
		isOpenNow = true,
		isClosedTemporarily = true,
	} = restaurant;

	const ratingsAvarage = Array.from(new Array(Math.floor(ratings)));

	return (
		<CardContainer elevation={5} mode="elevated">
			<ImageCover source={{ uri: photos[0] }} />
			<Info>
				<Text variant="label">{name}</Text>
				<Spacer>
					<Section>
						<ViewRating>
							{ratingsAvarage.map((_, i) => (
								<SvgXml
									key={`star-${placeId}-${i}`}
									xml={star}
									width={15}
									height={15}
								/>
							))}
						</ViewRating>
						<SectionEnd>
							<Spacer position="right" size="large">
								{isClosedTemporarily && (
									<Text variant="error">
										Closed Temporarily
									</Text>
								)}
							</Spacer>
							<Spacer position="left" size="extr_large">
								{isOpenNow && (
									<SvgXml xml={open} width={20} height={20} />
								)}
							</Spacer>
							<Spacer position="left" size="large">
								<Icon source={{ uri: icon }} />
							</Spacer>
						</SectionEnd>
					</Section>
				</Spacer>
				<Address>{address}</Address>
			</Info>
		</CardContainer>
	);
};
