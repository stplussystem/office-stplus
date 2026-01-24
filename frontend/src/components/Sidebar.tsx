import Link from 'next/link'

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen hidden md:block">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-blue-400">Office STPlus</h1>
                <p className="text-xs text-gray-400 mt-1">ระบบจัดการภายใน</p>
            </div>
            
            <nav className="mt-6 px-4 space-y-2">
                {/* ปุ่มเมนูต่างๆ */}
                <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-slate-800 bg-slate-800 text-white">
                    📊 แดชบอร์ด
                </Link>
                
                <Link href="/employees" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-slate-800 text-gray-300 hover:text-white">
                    👥 ข้อมูลพนักงาน
                </Link>
                
                <Link href="/documents" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-slate-800 text-gray-300 hover:text-white">
                    📂 เอกสาร/สัญญา
                </Link>

                <Link href="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-slate-800 text-gray-300 hover:text-white">
                    ⚙️ ตั้งค่าระบบ
                </Link>
            </nav>
        </aside>
    )
}