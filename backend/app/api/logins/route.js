import { NextResponse } from "next/server";

export async function POST(req) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json(
            { error: "Missing credentials" },
            { status: 400 }
        );
    }
    console.log("logged in" , email, password)
    return NextResponse.json(
        { message: "Login success" },
        { status: 200 }
    );
}
