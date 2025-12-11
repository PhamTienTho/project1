export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// Log để debug (chỉ trong development)
if (import.meta.env.DEV) {
  console.log('OAuth Config:', {
    GOOGLE_CLIENT_ID,
    API_BASE_URL
  })
}
