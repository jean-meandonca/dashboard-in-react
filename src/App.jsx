import './App.css'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";


function App() {
   const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex min-h-screen">
      
        <Sidebar open={sidebarOpen} />

        <main className="flex-1 bg-gray-100 p-6">

          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/settings" element={<Settings/>}/>
          </Routes>

        </main>

      </div>
    </Router>
  );
}

export default App
