"use client";

import { useState, useMemo } from "react";

// Mock data
const MOCK_FOODS = [
  {
    id: 1,
    date: "2024-07-25",
    meal: "เช้า",
    name: "ข้าวผัด",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
  {
    id: 2,
    date: "2024-07-25",
    meal: "กลางวัน",
    name: "ส้มตำ",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
  {
    id: 3,
    date: "2024-07-25",
    meal: "เย็น",
    name: "แกงเขียวหวาน",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
  {
    id: 4,
    date: "2024-07-24",
    meal: "เช้า",
    name: "โจ๊กหมู",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
  {
    id: 5,
    date: "2024-07-24",
    meal: "กลางวัน",
    name: "ก๋วยเตี๋ยว",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
  {
    id: 6,
    date: "2024-07-23",
    meal: "เช้า",
    name: "ข้าวไข่เจียว",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
  {
    id: 7,
    date: "2024-07-23",
    meal: "กลางวัน",
    name: "พิซซ่า",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
  {
    id: 8,
    date: "2024-07-22",
    meal: "เช้า",
    name: "ขนมปัง",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
  {
    id: 9,
    date: "2024-07-22",
    meal: "กลางวัน",
    name: "สเต็ก",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
  {
    id: 10,
    date: "2024-07-22",
    meal: "เย็น",
    name: "ซูชิ",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
  {
    id: 11,
    date: "2024-07-21",
    meal: "เช้า",
    name: "แกงส้ม",
    imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Food",
  },
];

const ITEMS_PER_PAGE = 10;

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFoods = useMemo(() => {
    return MOCK_FOODS.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredFoods.length / ITEMS_PER_PAGE);

  const paginatedFoods = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredFoods.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, filteredFoods]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white md:p-10">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <h1 className="text-4xl font-bold text-blue-400">Dashboard</h1>
        <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
          <input
            type="text"
            placeholder="ค้นหาชื่ออาหาร..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full rounded-full border border-gray-700 bg-slate-800 px-6 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none md:w-64"
          />
          <a href="/addfood">
            <button className="w-full rounded-full bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
              เพิ่มอาหาร
            </button>
          </a>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl bg-slate-900 p-4 shadow-2xl">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="border-b border-gray-700 text-gray-400">
              <th className="px-4 py-3">วันที่</th>
              <th className="px-4 py-3">รูปภาพ</th>
              <th className="px-4 py-3">ชื่ออาหาร</th>
              <th className="px-4 py-3">มื้ออาหาร</th>
              <th className="px-4 py-3 text-center">การจัดการ</th>
            </tr>
          </thead>
          <tbody>
            {paginatedFoods.length > 0 ? (
              paginatedFoods.map((food) => (
                <tr
                  key={food.id}
                  className="border-b border-gray-800 transition-colors duration-200 hover:bg-slate-800"
                >
                  <td className="px-4 py-4">{food.date}</td>
                  <td className="px-4 py-4">
                    <img
                      src={food.imageUrl}
                      alt={food.name}
                      width={50}
                      height={50}
                      className="rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-4">{food.name}</td>
                  <td className="px-4 py-4">{food.meal}</td>
                  <td className="flex justify-center gap-2 px-4 py-4">
                    <a href="/updatefood">
                      <button className="rounded-full bg-yellow-500 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-yellow-600">
                        แก้ไข
                      </button>
                    </a>
                    <button className="rounded-full bg-red-500 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-red-600">
                      ลบ
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-8 text-center text-gray-500">
                  ไม่พบข้อมูลอาหาร
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-full bg-gray-700 px-4 py-2 font-semibold text-gray-300 disabled:opacity-50"
          >
            ก่อนหน้า
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`rounded-full px-4 py-2 font-semibold transition-colors duration-200 ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-full bg-gray-700 px-4 py-2 font-semibold text-gray-300 disabled:opacity-50"
          >
            ถัดไป
          </button>
        </div>
      )}
    </div>
  );
}
