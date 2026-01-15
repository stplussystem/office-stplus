import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true, // สำคัญมาก! บรรทัดนี้ช่วยให้ส่ง Cookie ข้ามบ้านได้
    withXSRFToken: true 
})

export default axiosInstance