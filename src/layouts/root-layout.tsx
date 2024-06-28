import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="flex justify-between p-5 border-b border-solid border-gray-200">
        <SignedIn>
          <ul className="flex gap-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
          <ul className="flex gap-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </SignedOut>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  );
}
