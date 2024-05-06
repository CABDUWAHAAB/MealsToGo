import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeArea } from "../../../Components/Utility/safeArea.component";
import MapView from "react-native-maps";
import styled from "styled-components";
import { Search } from "../Components/seach.component";

const Map = styled(MapView)`
	flex: 1;
	width: "100%";
	height: "100%";
`;

export const MapScreen = () => {
	return (
		<>
			<Search/>
			<Map />
		</>
	);
};
