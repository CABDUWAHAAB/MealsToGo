import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { theme } from "../../Insfrastructure/theme";

const sizeVarient = {
    small: 1,
    medium: 2,
    large: 3,
    extra_large: 4,
};

const positionVarient =  {
    top: "marginTop",
    left: "marginLeft",
    right: "marginRight",
    bottom: "marginBottom",
};

const SpacerView = styled(View)`
    ${({ variant }) => variant};
`;

const getVarient = (position, size, theme) => {
    const sizeIndex = sizeVarient[size];
    const property = positionVarient[position];
    const value = theme.space[sizeIndex];
    return `${property}:${value}`;
};

export const Spacer = ({position, size, children}) => {
    const theme = useTheme();
    const varient  = getVarient(position, size, theme);
    return (
        <SpacerView variant={varient}>{children}</SpacerView>
    )
};

Spacer.defaultProps = {
    position: 'top',
    size: 'small'
}