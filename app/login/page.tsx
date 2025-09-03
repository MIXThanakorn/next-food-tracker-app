"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4 text-white">
      <div className="w-full max-w-lg rounded-xl bg-slate-900 p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-400">
          เข้าสู่ระบบ
        </h1>
        <p className="mb-8 text-center text-gray-400">ยินดีต้อนรับกลับมา!</p>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-300">
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              placeholder="กรุณากรอกอีเมล"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-300">
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              placeholder="กรุณากรอกรหัสผ่าน"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          {/* Login Button */}
          <a href="/dashboard" className="block w-full">
            <button
              type="button"
              className="w-full rounded-full bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 md:px-10 md:py-4"
            >
              เข้าสู่ระบบ
            </button>
          </a>
        </form>

        <p className="mt-8 text-center text-gray-400">
          ยังไม่มีบัญชีใช่ไหม?{" "}
          <a
            href="/register"
            className="font-semibold text-blue-400 hover:underline"
          >
            สมัครสมาชิก
          </a>
        </p>
      </div>
    </div>
  );
}
