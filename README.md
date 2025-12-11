# Login-OAuth

## Hướng dẫn cài đặt
1. Sao chép `.env.example` thành `.env.development`.
2. Điền `VITE_GOOGLE_CLIENT_ID` bằng Google OAuth Client ID của bạn.
3. (Tuỳ chọn) Chỉnh `VITE_API_BASE_URL` nếu backend chạy ở địa chỉ khác.
4. Cài dependency và chạy server dev:
   ```bash
   npm install
   npm run dev
   ```

## Ghi chú
- Các file `.env*` bị ignore để tránh đẩy secret lên repo.
- Nếu thêm biến môi trường mới, nhớ cập nhật vào `.env.example`.
