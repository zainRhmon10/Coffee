import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar.jsx";
import MobileNav from "./components/layout/MobileNav.jsx";
import Header from "./components/layout/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { initialCoffees , } from "./data/coffees.js";
import { filters } from "./data/constants.js";
import MyCoffees from "./pages/CollectionPage.jsx";
import Favourite from "./pages/Favourite.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import Statistics from "./pages/Statistics.jsx";


const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />

      <main className="lg:ml-64">
        <Header />

        <div className="p-5 md:p-8 lg:p-10">
          <Routes>
            <Route path="/" element={<Dashboard coffees={initialCoffees} />}/>
            <Route path="/coffees" element={<MyCoffees filters={filters} coffees={initialCoffees} />} />
            <Route path="/favorites" element={<Favourite filters={filters}  coffees={initialCoffees} />} />
            {/* <Route path="/map" element={<h1>Coffee Map</h1>} /> */}
            <Route path="/statistics" element={<Statistics/>} />
            <Route path="/settings" element={<SettingsPage/>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;