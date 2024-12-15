import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import { DefaultSidebar } from "./components/sidebar/Sidebar";
import PenjualanObatBhp from "./pages/apotik/PenjualanObatBhp";
import AmprahObatBhp from "./pages/apotik/AmprahObatBhp";
import Login from "./pages/login/Login";
import User from "./pages/admin/User";
import Database from "./pages/admin/Database";
import InputObatBhp from "./pages/gudang/InputObatBhp";
import DataObatBhp from "./pages/gudang/DataObatBhp";
import JenisObatBhp from "./pages/gudang/JenisObatBhp";
import Supplier from "./pages/gudang/Supplier";
import Kategori from "./pages/gudang/Kategori";
import Golongan from "./pages/gudang/Golongan";
import Batch from "./pages/gudang/Batch";
import InputBatch from "./pages/gudang/InputBatch";
import InputUsers from "./pages/admin/InputUsers";

export default function App() {
  return (
    <main>
      <Routers>
        <DefaultSidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          {/* Apotik Route Start*/}
          <Route
            path="/penjualan-obat-dan-bhp"
            element={<PenjualanObatBhp />}
          />
          <Route path="/amprah-obat-dan-bhp" element={<AmprahObatBhp />} />
          {/* Apotik Route End */}
          {/* Gudang Route Start */}
          <Route path="/data-obat-dan-bhp" element={<DataObatBhp />} />
          <Route path="/input-obat-dan-bhp" element={<InputObatBhp />} />
          <Route path="/jenis-obat-dan-bhp" element={<JenisObatBhp />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/kategori" element={<Kategori />} />
          <Route path="/golongan" element={<Golongan />} />
          <Route path="/batch" element={<Batch />} />
          <Route path="/input-batch" element={<InputBatch />} />
          {/* Gudang Route End */}
          {/* Admin Route Start */}
          <Route path="/users" element={<User />} />
          <Route path="/input-users" element={<InputUsers />} />
          <Route path="/database" element={<Database />} />
          {/* Admin Route End */}
        </Routes>
      </Routers>
    </main>
  );
}
