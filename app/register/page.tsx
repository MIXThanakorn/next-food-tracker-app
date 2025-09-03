"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const [isMounted, setIsMounted] = useState(false);

  // State variables for each form input
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "fullName") setFullName(value);
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setGender("");
    setProfileImage(null);
    setPreviewImage(null);

    // To clear the file input field, you must reset its value.
    const fileInput = document.getElementById(
      "profileImage"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4 text-white">
      <div className="w-full max-w-lg rounded-xl bg-slate-900 p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-400">
          ลงทะเบียน
        </h1>
        <p className="mb-8 text-center text-gray-400">
          กรุณากรอกข้อมูลเพื่อสร้างบัญชี
        </p>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-gray-300">
              ชื่อเต็ม
            </label>
            <input
              type="text"
              id="fullName"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              placeholder="กรุณากรอกชื่อเต็ม"
              value={fullName}
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
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              placeholder="กรุณาตั้งรหัสผ่าน"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-300">เพศ</label>
            <div className="mt-2 flex space-x-4">
              <div className="flex items-center">
                <input
                  id="male"
                  name="gender"
                  type="radio"
                  className="h-4 w-4 border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500"
                  value="ชาย"
                  checked={gender === "ชาย"}
                  onChange={handleGenderChange}
                />
                <label htmlFor="male" className="ml-2 text-gray-400">
                  ชาย
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="female"
                  name="gender"
                  type="radio"
                  className="h-4 w-4 border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500"
                  value="หญิง"
                  checked={gender === "หญิง"}
                  onChange={handleGenderChange}
                />
                <label htmlFor="female" className="ml-2 text-gray-400">
                  หญิง
                </label>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div>
            <label htmlFor="profileImage" className="block text-gray-300">
              รูปภาพ
            </label>
            <input
              type="file"
              id="profileImage"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-gray-400 file:mr-4 file:rounded-full file:border-0 file:bg-blue-500 file:px-4 file:py-2 file:text-white hover:file:bg-blue-600"
              onChange={handleFileChange}
              accept="image/*"
            />
            {previewImage && (
              <div className="mt-4 flex flex-col items-center space-y-4">
                <img
                  src={previewImage as string}
                  alt="Image Preview"
                  className="h-40 w-40 rounded-full object-cover"
                />
                <p className="text-sm text-gray-400">ตัวอย่างรูปภาพ</p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            {/* Submit Button (non-functional) */}
            <button
              type="button"
              className="w-full rounded-full bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 md:px-10 md:py-4"
            >
              สมัคร
            </button>

            {/* Reset Button (functional) */}
            <button
              type="button"
              className="w-full rounded-full bg-slate-700 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-500 md:px-10 md:py-4"
              onClick={handleReset}
            >
              รีเซ็ต
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
