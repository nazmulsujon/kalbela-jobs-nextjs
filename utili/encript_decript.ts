import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

// Define your secret key (you can change it to something more secure)
const SECRET_KEY = 'kalbela_jobs_bd'; // Replace with a more secure key

// Encrypt user data before storing in the cookie
export const encrypt_user = (userData: any): string => {
  const stringifiedData = JSON.stringify(userData);
  const encrypted = CryptoJS.AES.encrypt(stringifiedData, SECRET_KEY).toString();
  return encrypted;
};

// Decrypt the encrypted user data
export const decryptData = (encryptedData: string): any => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData ? JSON.parse(decryptedData) : null;
};

// Get decrypted user data from cookies
export const get_user_data = (): any => {
  const encryptedUserData = Cookies.get('kalbelajobs_user'); // Retrieve encrypted data from cookies
  if (encryptedUserData) {
    return decryptData(encryptedUserData);  // Decrypt and return the data
  }
  return null;  // If no data is found, return null
};

// Set encrypted user data in cookies
export const set_user_data = (userData: any) => {
  const encryptedData = encrypt_user(userData);  // Encrypt the user data
  Cookies.set('kalbelajobs_user', encryptedData, { expires: 30 });
};


export  const logout = () => {
  Cookies.remove('kalbelajobs_user');
};
