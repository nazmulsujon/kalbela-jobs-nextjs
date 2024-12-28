import { Fragment } from "react"
import dynamic from "next/dynamic"

const RegistrationForm = dynamic(() => import("./components/RegisterForm"), {
  ssr: false,
})

const RegistrationPage = () => (
  <Fragment>
    <RegistrationForm />
  </Fragment>
)

export default RegistrationPage
