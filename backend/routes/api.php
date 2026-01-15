<?php

use Illuminate\Support\Facades\Route;

// ต้องมีบรรทัดนี้เพื่อให้ Next.js เรียกใช้งานได้
Route::get('/test-connection', function () {
    return response()->json([
        'message' => 'สำเร็จ! ระบบออฟฟิสเชื่อมต่อกับ Laravel ได้แล้ว 🎉',
        'status' => 'success',
        'time' => now()->toDateTimeString()
    ]);
});
