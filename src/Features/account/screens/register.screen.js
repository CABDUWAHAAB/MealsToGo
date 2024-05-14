import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { 
    AccountBackground, 
    AccountContainer, 
    AccountCover, 
    AuthButton, 
    AuthInput,
    ErrorContainer,
    Title,
} from "../components/account.styles";
import {Text} from "../../../Components/typography/text.component";
import { Spacer } from "../../../Components/spacer/spacer.component";
import { colors } from "../../../Insfrastructure/theme/colors";
import { AuthenticationContext } from "../../../Services/authentication/authentication.context";



export const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, error,isLoading } = useContext(AuthenticationContext);

    return (
        <>
            <AccountBackground>
                <AccountCover />
                <Title>Meals To Go</Title>
                <AccountContainer>
                    <AuthInput
                        label="E-mail"
                        value={email}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(u) => setEmail(u)}
                    />
                    <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                    </Spacer>
                    <Spacer size="large">
                    <AuthInput
                        label="Repeat Password"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />
                    </Spacer>
                    {error && (
                    <ErrorContainer size="large">
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                    )}
                    <Spacer size="large">
                        {!isLoading ? (
                            <AuthButton
                            icon="email"
                            mode="contained"
                            onPress={() => onRegister(email, password, repeatedPassword)}
                            >
                            Register
                            </AuthButton>
                        ) : (
                            <ActivityIndicator animating={true} color={colors.brand.pramary} />
                        )}
                    </Spacer>
                </AccountContainer>
                <Spacer size="large">
                    <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                    Back
                    </AuthButton>
                </Spacer>
            </AccountBackground>
        </>
    )
}