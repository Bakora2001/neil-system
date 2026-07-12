import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { StudentDashboard } from "./pages/StudentDashboard";
import { FacultyDashboard } from "./pages/FacultyDashboard";
import { InstitutionDashboard } from "./pages/InstitutionDashboard";
import { SecretariatDashboard } from "./pages/SecretariatDashboard";
import { AdminDashboard } from "./pages/AdminDashboard";
import { KnowledgeHub } from "./pages/KnowledgeHub";

export default function App() {
  return (
    <Routes>
      {/* ── Public Website ──────────────────────────────────────── */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* ── Role-based Dashboards ────────────────────────────────── */}
      <Route path="/portal/student" element={<StudentDashboard />} />
      <Route path="/portal/faculty" element={<FacultyDashboard />} />
      <Route path="/portal/institution" element={<InstitutionDashboard />} />
      <Route path="/portal/secretariat" element={<SecretariatDashboard />} />
      <Route path="/portal/admin" element={<AdminDashboard />} />
      <Route path="/portal/knowledge-hub" element={<KnowledgeHub />} />

      {/* ── Catch-all → Home ────────────────────────────────────── */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
