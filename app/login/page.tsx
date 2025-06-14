"use client";

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })

        if (result?.error) {
            console.log(result.error);
        } else {
            router.push('/');
        }
    }

    return (
        <>
            <div className="max-w-md h-[420px] mx-auto mt-10 p-10 bg-gray-900 rounded-lg shadow-md">
                <h1 className='text-3xl font-bold text-white mb-6 text-center'>Sign In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <label className="block mb-1">Email Address:</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <label className="block mb-1">Password:</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-800 focus:ring-white text-white font-semibold py-2 rounded-md transition-colors"
                  >
                    SignIn
                  </button>
                </form>

                <div className="mt-2 text-center">
                    <button
                        onClick={() => signIn("google")}
                        className="flex w-full items-center justify-center border border-gray-300 rounded-full px-4 py-2 bg-white hover:shadow-md transition">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className="w-5 h-5 mr-2" />
                        <span className="text-sm text-gray-700 font-medium">Sign in with Google</span>
                    </button>
                    <p className='mb-10'>
                      Don't have an account?{" "}
                      <a href="/register" className="text-white hover:underline">
                        SignUp
                      </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default page
