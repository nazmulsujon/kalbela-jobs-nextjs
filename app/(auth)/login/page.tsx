import dynamic from "next/dynamic"

const LoginForm = dynamic(() => import("./components/login-form"), {
  ssr: false,
})

const LoginPage = () => (
  <div>
    <LoginForm />
  </div>
)

export default LoginPage
