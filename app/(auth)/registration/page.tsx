import dynamic from "next/dynamic"

const RegistrationForm = dynamic(() => import("./components/register-form"), {
  ssr: false,
})

const RegistrationPage = () => (
  <div>
    <RegistrationForm />
  </div>
)

export default RegistrationPage
