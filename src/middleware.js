import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(request) {
    try {
        const token = request.cookies.get("token").value;
        const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
        const isValid = await jose.jwtVerify(token, secretKey);
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

}

export const config = {
    matcher: "/dashboard",
};