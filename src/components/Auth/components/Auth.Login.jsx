"use client";

import { Input, Button } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";


export const AuthLogin = () => {
    const { loading, handleChange, handleSubmitLogin } = useLogin();

    return (
        <main className="h-screen w-full grid grid-cols-2">
            <div className="bg-indigo-500"></div>
            <div className="flex justify-center items-center">
                <div className="w-[320px] space-y-3">
                    <Input name="email" placeholder="email@something.com" onChange={handleChange} />
                    <Input name="password" type="password" placeholder="password" onChange={handleChange} />
                    <Button isLoading={loading} onClick={handleSubmitLogin} color="primary">Login</Button>
                    <label
                        className="ml-2 text-sm font-medium text-gray-500 "> Don't have account? <a href="/register" className="text-blue-600 hover:underline dark:text-blue-500">Sign Up
                        </a>
                    </label>
                </div>

            </div>
        </main>
    )
}
