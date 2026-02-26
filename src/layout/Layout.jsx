import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="relative flex h-screen text-slate-200 overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse top-20 left-10" />
        <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse bottom-20 right-10" />
      </div>

      {/* Sidebar */}
      <aside className="hidden md:block w-80 border-r border-white/10 backdrop-blur-xl bg-white/5">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 md:px-24">
          <Home />
        </div>
      </main>

    </div>
  );
}

export default Layout;