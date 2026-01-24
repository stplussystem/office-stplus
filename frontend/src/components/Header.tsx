"use client"

import { useRouter } from "next/navigation"
import axios from "@/lib/axios"
import { Button } from "@/components/ui/button"

export default function Header({ user }: { user: any }) {
    const router = useRouter()

    const handleLogout = async () => {
        try {
            await axios.post('/logout')
            router.push('/login')
        } catch (error) {
            console.error("Logout failed", error)
        }
    }

    return (
        <header className="bg-white shadow h-16 flex items-center justify-between px-6">
            {/* ฝั่งซ้าย: ชื่อหน้าปัจจุบัน */}
            <h2 className="text-xl font-semibold text-gray-800">
                Dashboard
            </h2>

            {/* ฝั่งขวา: ข้อมูล User และปุ่มออก */}
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                    สวัสดี, <b>{user?.name}</b>
                </span>
                <Button 
                    onClick={handleLogout} 
                    variant="outline" 
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50"
                >
                    ออกจากระบบ
                </Button>
            </div>
        </header>
    )
}