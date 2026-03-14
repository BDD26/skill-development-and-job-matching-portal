import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import RoleRoute      from './components/RoleRoute';

// ── Public Pages ──────────────────────────────────────────────────────────────
import HomePage          from './pages/public/HomePage';
import AboutPage         from './pages/public/AboutPage';
import JobsPage          from './pages/public/JobsPage';
import JobDetailPage     from './pages/public/JobDetailPage';
import SkillsPage        from './pages/public/SkillsPage';

// ── Auth Pages ────────────────────────────────────────────────────────────────
import RegisterPage      from './pages/auth/RegisterPage';
import LoginPage         from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';

// ── Student Pages ─────────────────────────────────────────────────────────────
import StudentDashboard  from './pages/student/StudentDashboard';
import StudentProfile    from './pages/student/StudentProfile';

// ── Employer Pages ────────────────────────────────────────────────────────────
import EmployerDashboard  from './pages/employer/EmployerDashboard';
import EmployerProfile    from './pages/employer/EmployerProfile';
import EmployerJobsList   from './pages/employer/EmployerJobsList';
import EmployerJobNew     from './pages/employer/EmployerJobNew';
import EmployerJobEdit    from './pages/employer/EmployerJobEdit';
import EmployerApplicants from './pages/employer/EmployerApplicants';
import EmployerInterviews from './pages/employer/EmployerInterviews';

// ── Admin Pages ───────────────────────────────────────────────────────────────
import AdminDashboard      from './pages/admin/AdminDashboard';
import AdminApprovals      from './pages/admin/AdminApprovals';
import AdminAnalytics      from './pages/admin/AdminAnalytics';
import AdminExports        from './pages/admin/AdminExports';
import AdminSkillsTaxonomy from './pages/admin/AdminSkillsTaxonomy';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── 1. Public / Guest Routes ──────────────────────────────────── */}
        <Route path="/"                         element={<HomePage />} />
        <Route path="/about"                    element={<AboutPage />} />
        <Route path="/jobs"                     element={<JobsPage />} />
        <Route path="/jobs/:id"                 element={<JobDetailPage />} />
        <Route path="/skills"                   element={<SkillsPage />} />
        <Route path="/register"                 element={<RegisterPage />} />
        <Route path="/login"                    element={<LoginPage />} />
        <Route path="/forgot-password"          element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token"    element={<ResetPasswordPage />} />

        {/* ── 2. Student Routes (require student role) ──────────────────── */}
        <Route
          path="/dashboard"
          element={
            <RoleRoute roles={['student']}>
              <StudentDashboard />
            </RoleRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <RoleRoute roles={['student']}>
              <StudentProfile />
            </RoleRoute>
          }
        />

        {/* ── 3. Employer Routes (require employer role) ────────────────── */}
        <Route
          path="/employer/dashboard"
          element={
            <RoleRoute roles={['employer']}>
              <EmployerDashboard />
            </RoleRoute>
          }
        />
        <Route
          path="/employer/profile"
          element={
            <RoleRoute roles={['employer']}>
              <EmployerProfile />
            </RoleRoute>
          }
        />
        <Route
          path="/employer/jobs"
          element={
            <RoleRoute roles={['employer']}>
              <EmployerJobsList />
            </RoleRoute>
          }
        />
        <Route
          path="/employer/jobs/new"
          element={
            <RoleRoute roles={['employer']}>
              <EmployerJobNew />
            </RoleRoute>
          }
        />
        <Route
          path="/employer/jobs/:id/edit"
          element={
            <RoleRoute roles={['employer']}>
              <EmployerJobEdit />
            </RoleRoute>
          }
        />
        <Route
          path="/employer/jobs/:id/applicants"
          element={
            <RoleRoute roles={['employer']}>
              <EmployerApplicants />
            </RoleRoute>
          }
        />
        <Route
          path="/employer/interviews"
          element={
            <RoleRoute roles={['employer']}>
              <EmployerInterviews />
            </RoleRoute>
          }
        />

        {/* ── 4. Admin / Placement Cell Routes ────────────────────────────── */}
        <Route
          path="/admin/dashboard"
          element={
            <RoleRoute roles={['admin', 'super_admin']}>
              <AdminDashboard />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/approvals"
          element={
            <RoleRoute roles={['admin', 'super_admin']}>
              <AdminApprovals />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <RoleRoute roles={['admin', 'super_admin']}>
              <AdminAnalytics />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/exports"
          element={
            <RoleRoute roles={['admin', 'super_admin']}>
              <AdminExports />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/skills-taxonomy"
          element={
            <RoleRoute roles={['admin', 'super_admin']}>
              <AdminSkillsTaxonomy />
            </RoleRoute>
          }
        />

        {/* ── 404 Fallback ─────────────────────────────────────────────── */}
        <Route path="*" element={<div><h1>404 – Page Not Found</h1></div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
