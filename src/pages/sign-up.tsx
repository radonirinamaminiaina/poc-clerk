import { SignUp } from "@clerk/clerk-react"

export default function SignUpPage() {
  return <div className="h-screen w-screen flex justify-center items-center">
    <SignUp signInUrl="/sign-in" path="/sign-up" />
</div>;
}