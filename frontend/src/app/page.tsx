import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

async function getBackendData() {
  try {
    // ดึงข้อมูลจาก API Laravel (รันบน Port 80 ผ่าน Docker)
    const res = await fetch('http://localhost/api/test-connection', { 
      cache: 'no-store' 
    })
    
    if (!res.ok) throw new Error('ไม่สามารถดึงข้อมูลได้')
 
    return res.json()
  } catch (error) {
    return { message: 'การเชื่อมต่อกับหลังบ้านขัดข้อง ❌', time: '-' }
  }
}

export default async function Home() {
  const data = await getBackendData()

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-lg border-t-4 border-blue-600">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Office System Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="rounded-lg bg-white p-6 border shadow-inner">
            <p className="text-sm text-slate-500 uppercase font-semibold mb-2">Message from Laravel:</p>
            <p className="text-xl font-bold text-blue-700">
              {data.message}
            </p>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Sync Time: {data.time}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}