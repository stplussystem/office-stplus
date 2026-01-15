use Illuminate\Support\Facades\Route;

// ... (โค้ดเดิม)

Route::get('/test-connection', function () {
return response()->json([
'message' => 'สำเร็จ! ระบบออฟฟิสเชื่อมต่อกับ Laravel ได้แล้ว 🎉',
'status' => 'success',
'time' => now()->toDateTimeString()
]);
});