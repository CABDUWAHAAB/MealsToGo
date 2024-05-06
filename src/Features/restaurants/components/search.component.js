import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../Services/location/location.context";

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[2]};
`;

export const Search = () => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);



	return (
		<SearchContainer>
			<Searchbar
				placeholder="Zoek voor een Locatie"
				value={searchKeyword}
				onSubmitEditing={() => {
					search(searchKeyword);

				}}
				onChangeText={(text) => {
					setSearchKeyword(text);
				}}
			/>
		</SearchContainer>
	);
};
