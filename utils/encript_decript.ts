import { useEffect, useState } from "react"
import CryptoJS from "crypto-js"
import Cookies from "js-cookie"

// Define your secret key (use a secure value in production)
const SECRET_KEY = "kalbela_jobs_bd" // Replace with a more secure key

// Encrypt user data before storing it in the cookie
export const encrypt_user = (userData: any): string => {
  const stringifiedData = JSON.stringify(userData)
  const encrypted = CryptoJS.AES.encrypt(stringifiedData, SECRET_KEY).toString()
  return encrypted
}

// Decrypt the encrypted user data
export const decryptData = (encryptedData: string): any => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY)
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
  return decryptedData ? JSON.parse(decryptedData) : null
}

// Set encrypted user data in cookies
export const set_user_data = (userData: any) => {
  const encryptedData = encrypt_user(userData) // Encrypt the user data
  Cookies.set("kalbelajobs_user", encryptedData, { expires: 30 })
}

// Logout and remove the user data from cookies
export const logout = () => {
  Cookies.remove("kalbelajobs_user")
  window.location.href = "/login"
}

// Custom Hook to manage user data
export const useUserData = () => {
  const [user, setUserData] = useState<any>(null)

  useEffect(() => {
    const encryptedUserData = Cookies.get("kalbelajobs_user") // Retrieve encrypted data from cookies
    if (encryptedUserData) {
      const decryptedData = decryptData(encryptedUserData) // Decrypt the data
      setUserData(decryptedData) // Update state with decrypted data
    }
  }, []) // Empty dependency array ensures this runs once on component mount

  return [user, setUserData]
}
