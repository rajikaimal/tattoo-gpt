import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  );
}
