import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import NavBar from "~/components/nav-bar";

export const meta: MetaFunction = () => {
  return [
    { title: "Generate your tattoo in seconds - TattooGPT" },
    {
      name: "description",
      content: "Generate your tattoo in seconds - TattooGPT",
    },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex flex-col bg-slate-950 text-white">
      <NavBar />

      <div className="flex h-screen">
        {/* Left Section */}
        <div className="w-1/ flex justify-center flex-col items-start pl-20">
          <div className="text-6xl">Ideas to live Tattoos in seconds</div>
          <Link to="/generate">
            <button className="mt-6 bg-white text-slate-900 py-4 px-4 rounded">
              Generate Tattoo
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            className="w-8/12	h-8/12	object-cover rounded-full"
            src="./tattoo-home.png"
            alt="tattoo-gpt"
          />
        </div>
      </div>
    </div>
  );
}
