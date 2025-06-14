"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import TermsAndConditions from '../components/TermsAndConditions';


function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }
      console.log(data);
      router.push('/login');

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="max-w-md h-[520px] mx-auto mt-10 p-10 bg-gray-900 rounded-lg shadow-md">
        <h1 className='text-3xl font-bold text-white mb-6 text-center'>Sign Up</h1>
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
          <label className='block-mb-1'>Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <div className='space-x-2 flex items-center'>
            <input type="checkbox" className="accent-purple-500 absolute" />
            <label className="text-sm text-gray-300 ml-5">I Accept <a href='' className="text-blue-400 hover:underline">Terms And Condition</a></label>
          </div>
          <button
            type="submit"
            className="bg-blue-800 focus:ring-white text-white font-semibold py-2 rounded-md transition-colors"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-white hover:underline">
              Sign In
            </a>
          </p>
        </div>
        </div>
    </>
  )
}

export default RegisterPage;
