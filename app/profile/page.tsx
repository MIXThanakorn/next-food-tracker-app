"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = event.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "image":
        if (files && files.length > 0) {
          const file = files[0];
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setImagePreview(null);
  };

  const handleSave = () => {
    // Navigate to the login page
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4 text-white">
      <div className="w-full max-w-lg rounded-xl bg-slate-900 p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-400">
          แก้ไขข้อมูลส่วนตัว
        </h1>
        <p className="mb-8 text-center text-gray-400">
          ปรับปรุงข้อมูลบัญชีของคุณ
        </p>

        <form className="space-y-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-gray-700 bg-slate-800 shadow-lg">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-500">
                  ไม่มีรูป
                </div>
              )}
            </div>
            <label
              htmlFor="image"
              className="cursor-pointer rounded-full bg-blue-500 px-6 py-2 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              เลือกรูปโปรไฟล์
              <input
                type="file"
                id="image"
                accept="image/*"
                className="hidden"
                onChange={handleInputChange}
              />
            </label>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-300">
              ชื่อ
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              placeholder="กรุณากรอกชื่อของคุณ"
              value={name}
              onChange={handleInputChange}
            />
          </div>

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
              รหัสผ่านใหม่
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              placeholder="กรุณากรอกรหัสผ่านใหม่"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={handleSave}
              className="w-full rounded-full bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              บันทึก
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full rounded-full bg-gray-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500"
            >
              รีเซ็ต
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
