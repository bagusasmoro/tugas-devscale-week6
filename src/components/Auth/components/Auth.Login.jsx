"use client";

import { Input, Button } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";


export const AuthLogin = () => {
    const { loading, loginData, handleChange, handleSubmitLogin } = useLogin();

    return (
        <main className="h-screen w-full grid grid-cols-2">
            <div className="bg-indigo-500"></div>
            <div className="flex justify-center items-center">
                <div className="w-[320px] space-y-3">
                    <Input name="email" placeholder="email@something.com" onChange={handleChange} />
                    <Input name="password" type="password" placeholder="password" onChange={handleChange} />
                    <Button isLoading={loading} onClick={handleSubmitLogin} color="primary">Login</Button>
                </div>
            </div>
        </main>
    )
}
