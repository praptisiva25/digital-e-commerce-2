"use client"
import React, { useEffect } from "react";
import Header from "./_components/Header";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

function Provider({ children }) {
    const { user } = useUser();

    useEffect(() => {
       user && CheckIsNewUser();
    }, [user]);

    const CheckIsNewUser = async () => {
        try {
            // Send user data to API with default values for missing fields
            const result = await axios.post('/api/user', {
                user: {
                    fullName: user?.fullName || "x",  // Default to "x" if fullName is missing
                    email: user?.primaryEmailAddress?.emailAddress || "x",  // Default to "x" if email is missing
                    imageUrl: user?.imageUrl || "x"  // Default to "x" if image is missing
                }
            });

            console.log(result.data);
        } catch (error) {
            console.error("Error during user check: ", error);
        }
    };

    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default Provider;
