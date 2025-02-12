import { useEffect, useState } from "react"
import CryptoJS from "crypto-js"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"


const SECRET_KEY = "kalbela_jobs_bd"

export const encrypt_user = (userData: any): string => {
  const stringifiedData = JSON.stringify(userData)
  const encrypted = CryptoJS.AES.encrypt(stringifiedData, SECRET_KEY).toString()
  return encrypted
}


export const decryptData = (encryptedData: string): any => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY)
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
  return decryptedData ? JSON.parse(decryptedData) : null
}



export const set_user_data = (userData: any) => {
  const encryptedData = encrypt_user(userData)
  Cookies.set("kalbelajobs_user", encryptedData, { expires: 30 })
}

export const logout = () => {
      const router = useRouter()
      Cookies.remove("kalbelajobs_user")
      router.push("/login")
}


// Custom Hook to manage user data
export const useUserData = () => {
  const [user, setUserData] = useState<any>(null)

  useEffect(() => {
    const encryptedUserData = Cookies.get("kalbelajobs_user")
    if (encryptedUserData) {
      const decryptedData = decryptData(encryptedUserData)
      setUserData(decryptedData)
    }
  }, [])

  return [user, setUserData]
}
