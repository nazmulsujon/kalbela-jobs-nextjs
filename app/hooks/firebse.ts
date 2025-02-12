'use client';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { set_user_data } from '@/utils/encript_decript';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const firebaseConfig = {
      apiKey: "AIzaSyDAa7je8Dx5PKtBLZX5jnT_VSPbr9px9TQ",
      authDomain: "auth.kalbelajobs.com",
      projectId: "kalbela-jobs-bd",
      storageBucket: "kalbela-jobs-bd.firebasestorage.app",
      messagingSenderId: "468184987683",
      appId: "1:468184987683:web:31656c3ffff1fd5c955996",
      measurementId: "G-EVB5C1613L"
};

const app = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
  getAnalytics(app);
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const googleLogin = async () => {
  const router = useRouter();
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (result.user) {
      const data = {
        name: result.user.displayName,
        email: result.user.email,
        profile_picture: result.user.photoURL,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin-user-with-google`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      if (!responseData.error) {
        set_user_data(responseData.data);
        toast.success('Login Successfully');
      } else {
        toast.error(responseData.message);
      }
    }
  } catch (error : any) {
    toast.error(error?.message  || 'Something went wrong');
  } finally {
    router.push('/login');
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success('Logged out successfully');
  } catch (error : any) {
    toast.error(error.message);
  }
};
