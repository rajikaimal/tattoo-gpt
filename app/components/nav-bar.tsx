import { Link } from "@remix-run/react";

export default function NavBar() {
  return (
    <nav className="pt-4 pb-4 pl-20">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <div className="text-2xl font-bold">TattooGPT</div>
        </Link>
        {/* <button className="font-semibold py-2 px-4 rounded">Login</button> */}
      </div>
    </nav>
  );
}
