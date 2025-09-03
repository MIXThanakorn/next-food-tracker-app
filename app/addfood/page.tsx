"use client";

import Link from "next/link";
import { useState } from "react";

export default function AddFoodPage() {
  const [foodName, setFoodName] = useState("");
  const [mealType, setMealType] = useState("");
  const [foodDate, setFoodDate] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.target;
    switch (id) {
      case "foodName":
        setFoodName(value);
        break;
      case "mealType":
        setMealType(value);
        break;
      case "foodDate":
        setFoodDate(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setFoodName("");
    setMealType("");
    setFoodDate("");
    setPreviewImage(null);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4 text-white">
      <div className="w-full max-w-lg rounded-xl bg-slate-900 p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-400">
          เพิ่มอาหาร
        </h1>
        <p className="mb-8 text-center text-gray-400">บันทึกมื้ออาหารของคุณ</p>

        <form className="space-y-6">
          {/* Food Name */}
          <div>
            <label htmlFor="foodName" className="block text-gray-300">
              ชื่ออาหาร
            </label>
            <input
              type="text"
              id="foodName"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              placeholder="กรุณากรอกชื่ออาหาร"
              value={foodName}
              onChange={handleInputChange}
            />
          </div>

          {/* Meal Type */}
          <div>
            <label htmlFor="mealType" className="block text-gray-300">
              มื้ออาหาร
            </label>
            <select
              id="mealType"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-white focus:border-blue-500 focus:outline-none"
              value={mealType}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                เลือกประเภทมื้ออาหาร
              </option>
              <option value="breakfast">อาหารเช้า</option>
              <option value="lunch">อาหารกลางวัน</option>
              <option value="dinner">อาหารเย็น</option>
              <option value="snack">ของว่าง</option>
            </select>
          </div>

          {/* Food Image */}
          <div>
            <label htmlFor="foodImage" className="block text-gray-300">
              รูปภาพอาหาร
            </label>
            <input
              type="file"
              id="foodImage"
              accept="image/*"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-white file:rounded-md file:border-0 file:bg-blue-500 file:text-white file:transition-colors file:duration-300 hover:file:bg-blue-600 focus:outline-none"
              onChange={handleFileChange}
            />
            {previewImage && (
              <div className="mt-4">
                <img
                  src={previewImage}
                  alt="Food Preview"
                  className="mx-auto h-48 w-48 rounded-xl object-cover shadow-lg"
                />
              </div>
            )}
          </div>

          {/* Date */}
          <div>
            <label htmlFor="foodDate" className="block text-gray-300">
              วันที่
            </label>
            <input
              type="date"
              id="foodDate"
              className="mt-1 w-full rounded-md border border-gray-700 bg-slate-800 p-3 text-white focus:border-blue-500 focus:outline-none"
              value={foodDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-4">
            <Link href="/dashboard" className="flex-1">
              <button
                type="button"
                className="flex-1 rounded-full bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                // The save function is not implemented yet
              >
                บันทึก
              </button>
            </Link>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 rounded-full bg-gray-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500"
            >
              รีเซ็ต
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
