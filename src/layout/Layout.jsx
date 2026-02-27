import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

function Layout() {
  return (
    <div className="flex min-h-screen bg-[#0a0f1a] text-slate-200">

      {/* SIDEBAR */}
      <aside className="w-80 lg:w-96 min-h-screen bg-[#111827] border-r border-white/10 sticky top-0">
        <Sidebar />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-12 lg:px-24 py-20">
          <Home />
        </div>
      </main>

    </div>
  );
}

export default Layout;