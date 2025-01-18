import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import React from "react";
import { Context } from "./context/Context";
import ProtectedRoute from "./components/route/ProtectedRoute";

export default function App() {
  const { user } = React.useContext(Context);
  return (
    <main>
      <Routers>
        <ProtectedRoute user={user}>
          <DefaultSidebar />
        </ProtectedRoute>
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />{" "}
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Apotik Route Start*/}
          <Route
            path="/penjualan-obat-dan-bhp"
            element={
              <ProtectedRoute user={user}>
                <PenjualanObatBhp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/amprah-obat-dan-bhp"
            element={
              <ProtectedRoute user={user}>
                <AmprahObatBhp />
              </ProtectedRoute>
            }
          />
          {/* Apotik Route End */}
          {/* Gudang Route Start */}
          <Route
            path="/data-obat-dan-bhp"
            element={
              <ProtectedRoute user={user}>
                <DataObatBhp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/input-obat-dan-bhp"
            element={
              <ProtectedRoute user={user}>
                <InputObatBhp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jenis-obat-dan-bhp"
            element={
              <ProtectedRoute user={user}>
                <JenisObatBhp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/supplier"
            element={
              <ProtectedRoute user={user}>
                <Supplier />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kategori"
            element={
              <ProtectedRoute user={user}>
                <Kategori />
              </ProtectedRoute>
            }
          />
          <Route
            path="/golongan"
            element={
              <ProtectedRoute user={user}>
                <Golongan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/batch"
            element={
              <ProtectedRoute user={user}>
                <Batch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/input-batch"
            element={
              <ProtectedRoute user={user}>
                <InputBatch />
              </ProtectedRoute>
            }
          />
          {/* Gudang Route End */}
          {/* Admin Route Start */}
          <Route
            path="/users"
            element={
              <ProtectedRoute user={user}>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="/input-users"
            element={
              <ProtectedRoute user={user}>
                <InputUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/database"
            element={
              <ProtectedRoute user={user}>
                <Database />
              </ProtectedRoute>
            }
          />
          {/* Admin Route End */}
        </Routes>
      </Routers>
    </main>
  );
}
