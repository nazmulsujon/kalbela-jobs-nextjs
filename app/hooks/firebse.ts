// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
      createUserWithEmailAndPassword,
      getAuth,
      getRedirectResult,
      GithubAuthProvider,
      GoogleAuthProvider,
      onAuthStateChanged,
      sendPasswordResetEmail,
      signInWithEmailAndPassword,
      signInWithPopup,
      signOut,
} from "firebase/auth";
import { set_user_data } from "@/utils/encript_decript";
import { toast } from "react-toastify";

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
const analytics = getAnalytics(app);

      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();

   const googleLogin = async () => {

            try {
                  const result = await signInWithPopup(auth, googleProvider);
                  console.log(result.user, "result googleLogin");
                  if (result.user) {
                        const data = {
                              name: result.user?.displayName,
                              email: result.user?.email,
                              profile_picture: result?.user?.photoURL
                        }
                        fetch(`${process.env.NEXT_APP_BASE_URL}/api/v1/auth/signin-user-with-google`, {
                              method: "POST",
                              headers: {
                                    "Content-Type": "application/json"
                              },
                              body: JSON.stringify(data)
                        }).then((res) => res.json())
                              .then( (data) => {
                                    if (!data.error) {
                                          set_user_data(data.data);
                                      toast.success("Login Successfully");

                                    }
                                    else {
                                          toast.error(data.message);
                                    }
                              })
                  }

            } catch (error : any) {
                  toast.error(error.message);
            } finally {
  window.location.href = "/user";
            }
      };


export default googleLogin;
