import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken";



export async function POST(req) {
    const { email, password } = await req.json();

    try {
        const findUser = await prisma.member.findUnique({
            where: {
                email
            }
        });

        // Check if user exist
        if (!findUser) {
            return NextResponse.json({ error: "User Not Found" })
        }

        // Compared Password
        const isPasswordValid = await bcrypt.compare(password, findUser.password)

        if (!isPasswordValid) {
            return NextResponse.json({ error: "invalid password" })
        }

        const payload = {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
        }

        const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "3d" });
        const res = NextResponse.json({ token, data: payload, message: "User Login Succesfully" });
        res.cookies.set("token", token);

        return res

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}