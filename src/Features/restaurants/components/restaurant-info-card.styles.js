import styled from "styled-components/native";
import { Card } from "react-native-paper";



export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const CardContainer = styled(Card)`
	display: flex;
	flex-direction: column;
`;

export const ImageCover = styled(Card.Cover)`
`;

export const Info = styled.View`
	padding: ${(props) => props.theme.lineHeight.title};
`;

export const Section = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
`;

export const ViewRating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Address = styled.Text`
	fontWeight: ${(props) => props.theme.fontWeight.regular};
	fontSize: ${(props) => props.theme.fontSizes.paragraph};
`;
