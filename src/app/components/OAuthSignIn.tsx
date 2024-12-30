"use client";
import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage, type AuthProvider } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { Button, Stack } from "@mui/material";

const providers: AuthProvider[] = [
    { id: "github", name: "GitHub" },
    { id: "google", name: "Google" },
    { id: "facebook", name: "Facebook" },
    { id: "twitter", name: "Twitter" },
    { id: "linkedin", name: "LinkedIn" },
];

const signIn: (provider: AuthProvider) => void = async (provider) => {
    const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log(`Sign in with ${provider.id}`);
            resolve();
        }, 500);
    });
    return promise;
};

export default function OAuthSignIn() {
    const theme = useTheme();
    return (
        <AppProvider theme={theme}>
            <Stack sx={{ mt: 5 }}>
                <SignInPage signIn={signIn} providers={providers} />
            </Stack>
            <Stack direction="row" sx={{ justifyContent: "center", mt: 5 }}>
                <Button
                    href={"/"}
                    variant="contained"
                    size="large"
                    color="success"
                >
                    SignUp
                </Button>
            </Stack>
        </AppProvider>
    );
}
