"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ตัวช่วยเปลี่ยนหน้า
import axios from "@/lib/axios"; // ตัวส่งข้อมูลคู่ใจ
import Sidebar from "@/components/Sidebar"; // นำเข้าเมนูแถบข้าง
import Header from "@/components/Header";   // นำเข้าแถบด้านบน (มีปุ่ม Logout)

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ดึงข้อมูล User เมื่อหน้าเว็บโหลด
    axios
      .get("/api/user")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("ยังไม่ได้ล็อกอิน หรือ เชื่อมต่อไม่ได้", error);
        setLoading(false);
        // ถ้าดึง User ไม่ได้ แสดงว่ายังไม่ล็อกอิน ให้ดีดไปหน้า Login
        router.push("/login");
      });
  }, [router]);

  // ถ้ากำลังโหลด ให้แสดงข้อความรอ
  if (loading)
    return (
      <div className="flex h-screen items-center justify-center text-gray-500">
        กำลังโหลดระบบ Office...
      </div>
    );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 1. ส่วนเมนูข้าง (Sidebar) */}
      <Sidebar />

      {/* 2. พื้นที่ขวา (Header + เนื้อหาหลัก) */}
      <div className="flex-1 flex flex-col">
        
        {/* แถบบน: ส่งข้อมูล user ไปโชว์ และจัดการปุ่ม Logout ที่นี่ */}
        <Header user={user} />

        {/* 3. เนื้อหาหลัก (Dashboard Content) */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* การ์ดที่ 1: แสดงจำนวนพนักงาน */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-gray-500 text-sm font-medium">พนักงานทั้งหมด</h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">1 คน</p>
            </div>

            {/* การ์ดที่ 2: แสดงเอกสาร */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-gray-500 text-sm font-medium">เอกสารรออนุมัติ</h3>
              <p className="text-3xl font-bold text-orange-500 mt-2">0 ฉบับ</p>
            </div>

            {/* การ์ดที่ 3: สถานะระบบ */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-gray-500 text-sm font-medium">สถานะระบบ</h3>
              <p className="text-3xl font-bold text-green-500 mt-2">ปกติ</p>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}