import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-2">
        <Outlet />
      </main>
    </div>
  );
}
