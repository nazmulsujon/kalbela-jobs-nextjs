import dynamic from "next/dynamic"

const LoginForm = dynamic(() => import("./components/LoginForm"), {
  ssr: false,
})

const LoginPage = () => (
  <div>
    <LoginForm />
  </div>
)

export default LoginPage
