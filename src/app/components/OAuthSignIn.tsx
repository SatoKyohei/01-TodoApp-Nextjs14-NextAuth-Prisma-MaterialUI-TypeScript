"use client";
import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage, type AuthProvider } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { Button, Stack } from "@mui/material";

const providers = [
    { id: "github", name: "GitHub" },
    // { id: "google", name: "Google" },
    // { id: "facebook", name: "Facebook" },
    // { id: "twitter", name: "Twitter" },
    // { id: "linkedin", name: "LinkedIn" },
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
            <SignInPage signIn={signIn} providers={providers} />
            <Stack direction="row" sx={{ justifyContent: "center", mt: 5 }}>
                <Button
                    href={"/"}
                    sx={{
                        backgroundColor: "#00C853",
                        color: "#fff",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        fontSize: "18px",
                        fontWeight: "bold"
                    }}
                >
                    新規登録はこちら
                </Button>
            </Stack>
        </AppProvider>
    );
}
