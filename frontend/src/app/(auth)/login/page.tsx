"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "@/lib/axios" // เรียกใช้ตัวส่งข้อมูลที่เราเพิ่งทำ
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            // 1. ขอ CSRF Token ก่อน (สำคัญมาก!)
            await axios.get('/sanctum/csrf-cookie')

            // 2. ส่งข้อมูลไปล็อกอิน
            await axios.post('/login', { email, password })

            // 3. ถ้าผ่าน ให้เด้งไปหน้า Dashboard (เดี๋ยวเราค่อยสร้าง)
            router.push('/')
        } catch (err: any) {
            console.error(err)
            setError("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <Card className="w-full max-w-md shadow-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-blue-600">เข้าสู่ระบบ Office System</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        {error && <div className="p-3 text-sm text-red-500 bg-red-50 rounded">{error}</div>}
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input 
                                type="email" 
                                placeholder="admin@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Password</label>
                            <Input 
                                type="password" 
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>

                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                            {loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}