import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <header className="flex justify-between p-5 border-b border-solid border-gray-200">
      <div>My poc</div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}