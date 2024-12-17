import { usersTable } from "@/configs/schema";
import { db } from "@/configs/db";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req) {
    const { user } = await req.json();

    // Default missing values to "x"
    const userName = user?.fullName || "x";  // Default to "x" if fullName is missing
    const userEmail = user?.primaryEmailAddress?.emailAddress || "x";  // Default to "x" if email is missing
    const userImage = user?.imageUrl || "x";  // Default to "x" if image is missing

    const userData = await db.select().from(usersTable)
        .where((eq(usersTable.email, userEmail)));

    if (userData?.length <= 0) {
        // Insert new user if not found
        const result = await db.insert(usersTable).values({
            name: userName,  // Use userName (defaulted to "x" if missing)
            email: userEmail,  // Use userEmail (defaulted to "x" if missing)
            image: userImage  // Use userImage (defaulted to "x" if missing)
        }).returning(usersTable);

        return NextResponse.json(result[0]);
    }

    return NextResponse.json(userData[0]);
}
