"use client";

import { Input, Button } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";


export const AuthRegister = () => {

    const { handleChange, handleSubmitRegister } = useRegister();

    return (
        <main className="h-screen w-full grid grid-cols-2">

            <div className="flex justify-center items-center">
                <div className="w-[320px] space-y-3">
                    <Input name="name" placeholder="name" onChange={handleChange} />
                    <Input name="email" placeholder="email@something.com" onChange={handleChange} />
                    <Input name="password" type="password" placeholder="password" onChange={handleChange} />
                    <Button onClick={handleSubmitRegister} color="primary">Register</Button>
                </div>
            </div>
            <div className="bg-indigo-500"></div>
        </main>
    )
}
