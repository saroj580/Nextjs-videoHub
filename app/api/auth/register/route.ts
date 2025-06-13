import { connectToDB } from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
        //get data 
        const { email, password } = await request.json();

        //validation
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                {status : 400}
            );
        }

        await connectToDB();

        //check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: "User already registered" },
                {status : 400}
            )
        }

        //create user
        User.create({
            email,
            password
        })

        return NextResponse.json(
            { message: "User registered successfully" },
            {status : 201}
        )


    } catch (error) {
        console.error("Registration error", error)
        return NextResponse.json(
            { error: "failed to registered user" },
            {status : 400}
        )
    }
}