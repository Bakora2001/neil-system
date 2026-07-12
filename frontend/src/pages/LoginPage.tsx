import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye, EyeOff, Check, Users, Building2, BarChart3, Mail, Lock,
  User as UserIcon, Upload, GraduationCap, BookOpen, ArrowLeft
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";

// ── Types ─────────────────────────────────────────────────────────
type Tab = "signin" | "register";
type RegStep = "pick-role" | "fill-form";
type RegisterRole = "STUDENT" | "FACULTY" | "INSTITUTION";

// Institution multi-step sections
type InstSection = "A" | "B" | "C" | "D" | "E" | "UPLOAD";

const ROLE_CARDS = [
  {
    role: "STUDENT" as RegisterRole,
    icon: GraduationCap,
    title: "Student",
    desc: "Undergraduate or postgraduate seeking innovation opportunities",
  },
  {
    role: "FACULTY" as RegisterRole,
    icon: BookOpen,
    title: "Faculty / Researcher",
    desc: "Lecturer, researcher or academician at an institution",
  },
  {
    role: "INSTITUTION" as RegisterRole,
    icon: Building2,
    title: "Institution Representative",
    desc: "Official representative applying for institutional membership",
  },
];

const BG_IMAGES = [
  "/images/neil-bg3.webp",
  "/images/neil-bg0.jpg",
  "/images/neil-bg2.jpg",
];

const FEATURES = [
  { icon: Users, label: "Access exclusive resources" },
  { icon: Building2, label: "Connect with institutions" },
  { icon: BarChart3, label: "Track your impact" },
];

export function LoginPage() {
  const navigate = useNavigate();
  const { loginUser, registerUser } = useAuth();

  const [tab, setTab] = useState<Tab>("signin");
  const [regStep, setRegStep] = useState<RegStep>("pick-role");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);

  // Slide indices
  const [bgIndex, setBgIndex] = useState(0);
  const [bgVisible, setBgVisible] = useState(true);

  // Common form state
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [fullName, setFullName] = useState("");
  const [registerRole, setRegisterRole] = useState<RegisterRole>("STUDENT");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Student-specific
  const [schoolName, setSchoolName] = useState("");

  // Faculty-specific
  const [institution, setInstitution] = useState("");
  const [department, setDepartment] = useState("");

  // Institution multi-section
  const [instSection, setInstSection] = useState<InstSection>("A");
  // Section A
  const [legalName, setLegalName] = useState("");
  const [establishmentYear, setEstablishmentYear] = useState("");
  const [charterNumber, setCharterNumber] = useState("");
  const [institutionType, setInstitutionType] = useState("Public University");
  const [institutionTypeOther, setInstitutionTypeOther] = useState("");
  const [legalFramework, setLegalFramework] = useState("Universities Act");
  const [legalFrameworkOther, setLegalFrameworkOther] = useState("");
  const [county, setCounty] = useState("");
  const [campusesCount, setCampusesCount] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [telephoneNumbers, setTelephoneNumbers] = useState("");
  // Section B
  const [headName, setHeadName] = useState("");
  const [headTitle, setHeadTitle] = useState("");
  const [headEmail, setHeadEmail] = useState("");
  const [headMobile, setHeadMobile] = useState("");
  const [internalUnits, setInternalUnits] = useState<string[]>([]);
  const [internalUnitsOther, setInternalUnitsOther] = useState("");
  const [innovationStaff, setInnovationStaff] = useState("");
  const [academicStaff, setAcademicStaff] = useState("");
  const [supportStaff, setSupportStaff] = useState("");
  const [technicalStaff, setTechnicalStaff] = useState("");
  // Section C
  const [adoptedPolicy, setAdoptedPolicy] = useState("Yes");
  const [existingPrograms, setExistingPrograms] = useState<string[]>([]);
  const [existingProgramsOther, setExistingProgramsOther] = useState("");
  const [activeProjects, setActiveProjects] = useState("");
  const [patentsCount, setPatentsCount] = useState("");
  const [startupsOrigin, setStartupsOrigin] = useState<string[]>([]);
  const [startupsOriginOther, setStartupsOriginOther] = useState("");
  // Section D
  const [appliedCategory, setAppliedCategory] = useState("Foundational Member");
  const [intendedContributions, setIntendedContributions] = useState<string[]>([]);
  const [strategicInterests, setStrategicInterests] = useState("");
  // Section E
  const [attestCorrect, setAttestCorrect] = useState(false);
  const [attestUphold, setAttestUphold] = useState(false);
  const [attestObligations, setAttestObligations] = useState(false);
  const [attestAuthorize, setAttestAuthorize] = useState(false);
  const [representativeName, setRepresentativeName] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setBgVisible(false);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
        setBgVisible(true);
      }, 700);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const resetRegister = () => {
    setRegStep("pick-role");
    setErrorMsg(null);
  };

  const redirectByRole = (role: string) => {
    switch (role) {
      case "STUDENT": navigate("/portal/student"); break;
      case "FACULTY": navigate("/portal/faculty"); break;
      case "INSTITUTION": navigate("/portal/institution"); break;
      case "SECRETARIAT": navigate("/portal/secretariat"); break;
      case "ADMIN": navigate("/portal/admin"); break;
      default: navigate("/"); break;
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !pw) return setErrorMsg("Please fill in all fields");
    setSubmitting(true);
    setErrorMsg(null);
    try {
      const user = await loginUser(email, pw);
      redirectByRole(user.role);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to sign in. Check credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !pw || !confirmPw || !fullName) return setErrorMsg("Please fill in all fields");
    if (pw.length < 8) return setErrorMsg("Password must be at least 8 characters");
    if (pw !== confirmPw) return setErrorMsg("Passwords do not match");

    const institutionProfile = registerRole === "INSTITUTION" ? {
      legalName, establishmentYear, charterNumber,
      institutionType: institutionType === "Other" ? institutionTypeOther : institutionType,
      legalFramework: legalFramework === "Other" ? legalFrameworkOther : legalFramework,
      county, campusesCount, physicalAddress, websiteUrl, officialEmail, telephoneNumbers,
      headName, headTitle, headEmail, headMobile,
      internalUnits: internalUnits.includes("Other") ? [...internalUnits.filter(x => x !== "Other"), internalUnitsOther] : internalUnits,
      innovationStaff, academicStaff, supportStaff, technicalStaff,
      adoptedPolicy,
      existingPrograms: existingPrograms.includes("Other") ? [...existingPrograms.filter(x => x !== "Other"), existingProgramsOther] : existingPrograms,
      activeProjects, patentsCount,
      startupsOrigin: startupsOrigin.includes("Other") ? [...startupsOrigin.filter(x => x !== "Other"), startupsOriginOther] : startupsOrigin,
      membershipCategory: appliedCategory, intendedContributions, strategicInterests,
      attestations: { attestCorrect, attestUphold, attestObligations, attestAuthorize },
      representativeName,
    } : null;

    setSubmitting(true);
    setErrorMsg(null);
    try {
      const user = await registerUser({
        email, password: pw, fullName, role: registerRole,
        schoolName: registerRole === "STUDENT" ? schoolName : null,
        department: registerRole === "FACULTY" ? department : null,
        institutionProfile,
      });
      redirectByRole(user.role);
    } catch (err: any) {
      setErrorMsg(err.message || "Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleCheck = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    setList(list.includes(item) ? list.filter(x => x !== item) : [...list, item]);
  };

  const inputCls = "w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-xs text-gray-800 outline-none focus:border-[#ef9d4a]";
  const inputPlain = "w-full rounded-lg border border-gray-200 py-2 px-3 text-xs text-gray-800 outline-none focus:border-[#ef9d4a]";
  const labelCls = "block text-xs font-semibold text-gray-700 mb-1.5";

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)} }
        .fade-up{animation:fadeUp .4s ease both}
        .thin-scroll::-webkit-scrollbar{width:4px}
        .thin-scroll::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:99px}
      `}</style>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12 overflow-hidden bg-white font-sans">

        {/* LEFT COLUMN: Slideshow banner */}
        <div className="relative hidden lg:flex lg:col-span-6 flex-col justify-between overflow-hidden p-12 text-white select-none">
          <div className="absolute inset-0 z-0">
            <img
              key={bgIndex}
              src={BG_IMAGES[bgIndex]}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700"
              style={{ opacity: bgVisible ? 1 : 0, transform: bgVisible ? "scale(1)" : "scale(1.03)" }}
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/neil-logo.png"
                alt="NEIL Logo"
                className="h-11 w-auto object-contain brightness-0 invert"
              />
            </Link>
          </div>

          <div className="relative z-10 max-w-md my-auto drop-shadow-md">
            <h1 className="text-[2.6rem] font-bold tracking-tight text-white leading-tight">
              Welcome Back!
            </h1>
            <p className="mt-2.5 text-sm text-white/95 leading-relaxed">
              Sign in to your account or quickly register to continue your journey with NEIL.
            </p>

            <div className="mt-8 space-y-4">
              {FEATURES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-[#ef9d4a] group-hover:border-[#ef9d4a] transition-all duration-300">
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-medium text-white/90 group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-white/50 tracking-wider">
            © {new Date().getFullYear()} NEIL. All Rights Reserved.
          </div>
        </div>

        {/* RIGHT COLUMN: Auth panel */}
        <div className="relative lg:col-span-6 flex items-start justify-center p-6 sm:p-12 bg-white min-h-screen overflow-y-auto thin-scroll">

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-[180px] h-[180px] pointer-events-none select-none overflow-hidden opacity-80 z-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
              <path d="M0,0 C30,30 70,10 100,50 L100,0 Z" fill="#FDF5EC" />
            </svg>
          </div>
          <div className="absolute top-10 right-10 pointer-events-none select-none z-10 opacity-70">
            <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
              {Array.from({ length: 5 }).map((_, row) =>
                Array.from({ length: 6 }).map((_, col) => (
                  <circle key={`${row}-${col}`} cx={col * 10 + 5} cy={row * 10 + 5} r="2" fill="#ef9d4a" />
                ))
              )}
            </svg>
          </div>

          <div className="w-full max-w-sm relative z-20 pt-4">

            {/* Tabs */}
            <div className="flex rounded-2xl bg-gray-100 p-1 mb-6">
              {(["signin", "register"] as Tab[]).map(t => (
                <button key={t} onClick={() => { setTab(t); setErrorMsg(null); resetRegister(); }}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    tab === t ? "bg-white shadow-xs text-[#1A237E]" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {t === "signin" ? "Sign In" : "Quick Sign Up"}
                </button>
              ))}
            </div>

            {errorMsg && (
              <div className="mb-4 text-xs text-red-600 font-bold bg-red-50 border border-red-100 p-2.5 rounded-xl">
                {errorMsg}
              </div>
            )}

            {/* ── Tab: Sign In ── */}
            {tab === "signin" && (
              <div className="fade-up w-full text-left">
                <h2 className="text-[2rem] font-bold text-[#00103A] tracking-tight">Sign In</h2>
                <p className="mt-1 text-xs text-gray-500">Enter your credentials to access your account</p>

                <form onSubmit={handleSignIn} className="mt-6 space-y-4">
                  <div>
                    <label className={labelCls}>Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" required className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Password</label>
                    <div className="relative">
                      <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type={showPw ? "text" : "password"} value={pw} onChange={e => setPw(e.target.value)} placeholder="Enter password" required className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-10 text-xs text-gray-800 outline-none focus:border-[#ef9d4a]" />
                      <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1">
                    <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                      <div onClick={() => setRemember(!remember)}
                        className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${remember ? "border-[#ef9d4a] bg-[#ef9d4a]" : "border-gray-300"}`}>
                        {remember && <Check size={8} className="text-white" />}
                      </div>
                      <span className="font-semibold">Remember Me</span>
                    </label>
                    <Link to="/forgot-password" className="font-semibold text-[#ef9d4a] hover:underline">Forgot Password?</Link>
                  </div>

                  <button type="submit" disabled={submitting} className="w-full rounded-lg bg-[#ef9d4a] py-2.5 text-xs font-bold text-white shadow-md hover:brightness-95 active:scale-[0.98]">
                    {submitting ? "Signing in..." : "Sign In"}
                  </button>
                </form>

                <p className="text-center text-xs font-semibold text-gray-500 pt-6">
                  Institution wanting to join NEIL?{" "}
                  <button onClick={() => { setTab("register"); setRegisterRole("INSTITUTION"); }} className="text-[#ef9d4a] hover:underline font-extrabold">
                    Register Institution Here
                  </button>
                </p>
              </div>
            )}

            {/* ── Tab: Register ── */}
            {tab === "register" && (
              <div className="fade-up w-full text-left">

                {/* ── STEP 1: Pick Your Role ── */}
                {regStep === "pick-role" && (
                  <>
                    <h2 className="text-[2rem] font-bold text-[#00103A] tracking-tight">Join NEIL</h2>
                    <p className="mt-1 text-xs text-gray-500">What do you want to join as?</p>

                    <div className="mt-5 space-y-3">
                      {ROLE_CARDS.map(({ role, icon: Icon, title, desc }) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => {
                            setRegisterRole(role);
                            setInstSection("A");
                            setErrorMsg(null);
                            setRegStep("fill-form");
                          }}
                          className="w-full flex items-center gap-4 p-4 rounded-2xl border border-gray-200 bg-white hover:border-[#ef9d4a] hover:shadow-md group transition-all duration-200 text-left"
                        >
                          <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-[#ef9d4a] group-hover:bg-[#ef9d4a] group-hover:text-white group-hover:border-[#ef9d4a] transition-all duration-200">
                            <Icon size={20} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[12.5px] font-black text-[#00103A] leading-none">{title}</p>
                            <p className="text-[10px] font-semibold text-gray-400 mt-1 leading-snug">{desc}</p>
                          </div>
                          <svg className="ml-auto shrink-0 text-gray-300 group-hover:text-[#ef9d4a] transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>
                      ))}
                    </div>

                    <p className="text-center text-xs font-semibold text-gray-500 pt-6 border-t border-gray-100 mt-6">
                      Already have an account?{" "}
                      <button onClick={() => setTab("signin")} className="text-[#ef9d4a] hover:underline font-extrabold">Sign In</button>
                    </p>
                  </>
                )}

                {/* ── STEP 2: Fill Form ── */}
                {regStep === "fill-form" && (
                  <>
                    {/* Back + title */}
                    <button type="button" onClick={resetRegister} className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-gray-400 hover:text-gray-600 mb-4 transition-colors">
                      <ArrowLeft size={13} />
                      <span>Choose different role</span>
                    </button>

                    <h2 className="text-[2rem] font-bold text-[#00103A] tracking-tight">
                      {registerRole === "INSTITUTION" ? "Institution Registration" : "Quick Sign Up"}
                    </h2>
                    <p className="mt-1 text-xs text-gray-500">
                      {registerRole === "INSTITUTION"
                        ? "Complete the membership application below"
                        : registerRole === "STUDENT"
                          ? "Joining as a Student"
                          : "Joining as Faculty / Researcher"}
                    </p>

                <form onSubmit={handleSignUp} className="mt-5 space-y-4">

                  {/* ── STUDENT FIELDS ── */}
                  {registerRole === "STUDENT" && (
                    <>
                      <div>
                        <label className={labelCls}>Full Name</label>
                        <div className="relative">
                          <UserIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="e.g. Jane Wanjiku" required className={inputCls} />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>School / Institution Name</label>
                        <input type="text" value={schoolName} onChange={e => setSchoolName(e.target.value)} placeholder="e.g. Strathmore University" required className={inputPlain} />
                      </div>
                      <div>
                        <label className={labelCls}>Student School Email</label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="jane@student.strathmore.edu" required className={inputCls} />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Password</label>
                        <div className="relative">
                          <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input type={showPw ? "text" : "password"} value={pw} onChange={e => setPw(e.target.value)} placeholder="Min 8 characters" required className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-10 text-xs text-gray-800 outline-none focus:border-[#ef9d4a]" />
                          <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Confirm Password</label>
                        <div className="relative">
                          <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} placeholder="Confirm password" required className={inputCls} />
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── FACULTY FIELDS ── */}
                  {registerRole === "FACULTY" && (
                    <>
                      <div>
                        <label className={labelCls}>Full Name</label>
                        <div className="relative">
                          <UserIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="e.g. Dr. Samuel Osei" required className={inputCls} />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Institution</label>
                        <input type="text" value={institution} onChange={e => setInstitution(e.target.value)} placeholder="e.g. University of Nairobi" required className={inputPlain} />
                      </div>
                      <div>
                        <label className={labelCls}>Specialization / Department</label>
                        <input type="text" value={department} onChange={e => setDepartment(e.target.value)} placeholder="e.g. Computer Science / Innovation Hub" required className={inputPlain} />
                      </div>
                      <div>
                        <label className={labelCls}>Official Email</label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="s.osei@university.edu" required className={inputCls} />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Password</label>
                        <div className="relative">
                          <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input type={showPw ? "text" : "password"} value={pw} onChange={e => setPw(e.target.value)} placeholder="Min 8 characters" required className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-10 text-xs text-gray-800 outline-none focus:border-[#ef9d4a]" />
                          <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Confirm Password</label>
                        <div className="relative">
                          <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} placeholder="Confirm password" required className={inputCls} />
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── INSTITUTION MULTI-SECTION FORM ── */}
                  {registerRole === "INSTITUTION" && (
                    <>
                      {/* Representative's personal login credentials */}
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 space-y-3">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Your Login Credentials</p>
                        <div>
                          <label className={labelCls}>Your Full Name (Representative)</label>
                          <div className="relative">
                            <UserIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="e.g. Chrisman Atandi" required className={inputCls} />
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Your Email Address</label>
                          <div className="relative">
                            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="c.atandi@institution.org" required className={inputCls} />
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Password</label>
                          <div className="relative">
                            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type={showPw ? "text" : "password"} value={pw} onChange={e => setPw(e.target.value)} placeholder="Min 8 characters" required className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-10 text-xs text-gray-800 outline-none focus:border-[#ef9d4a]" />
                            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                              {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Confirm Password</label>
                          <div className="relative">
                            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} placeholder="Confirm password" required className={inputCls} />
                          </div>
                        </div>
                      </div>

                      {/* Section Tab Navigator */}
                      <div>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-wider mb-2">Institution Profile Sections</p>
                        <div className="flex gap-1.5 overflow-x-auto pb-1 thin-scroll">
                          {(["A","B","C","D","E","UPLOAD"] as InstSection[]).map(s => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setInstSection(s)}
                              className={`shrink-0 px-2.5 py-1.5 rounded-lg text-[9.5px] font-black transition-colors ${
                                instSection === s
                                  ? "bg-[#1A237E] text-white"
                                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                              }`}
                            >
                              {s === "UPLOAD" ? "Uploads" : `Sec. ${s}`}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* SECTION A */}
                      {instSection === "A" && (
                        <div className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50/40 text-left">
                          <p className="text-[10px] font-black text-[#ef9d4a] uppercase tracking-wider">A — Institutional Profile</p>
                          <div>
                            <label className={labelCls}>Full Legal Name *</label>
                            <input type="text" value={legalName} onChange={e => setLegalName(e.target.value)} placeholder="Strathmore University" className={inputPlain} />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className={labelCls}>Year Established</label>
                              <input type="text" value={establishmentYear} onChange={e => setEstablishmentYear(e.target.value)} placeholder="e.g. 2002" className={inputPlain} />
                            </div>
                            <div>
                              <label className={labelCls}>Charter/Reg. No.</label>
                              <input type="text" value={charterNumber} onChange={e => setCharterNumber(e.target.value)} placeholder="e.g. RC-48201" className={inputPlain} />
                            </div>
                          </div>
                          <div>
                            <label className={labelCls}>Type of Institution</label>
                            <select value={institutionType} onChange={e => setInstitutionType(e.target.value)} className={inputPlain + " cursor-pointer"}>
                              {["Public University","Private University","TVET","Research Institute","Incubator/Accelerator","Center of Excellence","Innovation Hub","Other"].map(o => <option key={o}>{o}</option>)}
                            </select>
                            {institutionType === "Other" && <input type="text" value={institutionTypeOther} onChange={e => setInstitutionTypeOther(e.target.value)} placeholder="Specify type" className={inputPlain + " mt-1.5"} />}
                          </div>
                          <div>
                            <label className={labelCls}>Legal Framework</label>
                            <select value={legalFramework} onChange={e => setLegalFramework(e.target.value)} className={inputPlain + " cursor-pointer"}>
                              {["Universities Act","TVET Act","NGO Act","Company Act","State Corporations Act","Other"].map(o => <option key={o}>{o}</option>)}
                            </select>
                            {legalFramework === "Other" && <input type="text" value={legalFrameworkOther} onChange={e => setLegalFrameworkOther(e.target.value)} placeholder="Specify framework" className={inputPlain + " mt-1.5"} />}
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className={labelCls}>County (HQ)</label>
                              <select value={county} onChange={e => setCounty(e.target.value)} className={inputPlain + " cursor-pointer"}>
                                <option value="">-- Select --</option>
                                {["Nairobi","Kiambu","Uasin Gishu","Mombasa","Kisumu","Nakuru","Eldoret","Nyeri","Machakos"].map(c => <option key={c}>{c}</option>)}
                              </select>
                            </div>
                            <div>
                              <label className={labelCls}>No. of Campuses</label>
                              <input type="number" value={campusesCount} onChange={e => setCampusesCount(e.target.value)} placeholder="1" className={inputPlain} />
                            </div>
                          </div>
                          <div>
                            <label className={labelCls}>Physical Address</label>
                            <input type="text" value={physicalAddress} onChange={e => setPhysicalAddress(e.target.value)} placeholder="Ole Sangale Rd, Madaraka, Nairobi" className={inputPlain} />
                          </div>
                          <div>
                            <label className={labelCls}>Official Website</label>
                            <input type="url" value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)} placeholder="https://www.institution.edu" className={inputPlain} />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className={labelCls}>Official Email</label>
                              <input type="email" value={officialEmail} onChange={e => setOfficialEmail(e.target.value)} placeholder="info@institution.edu" className={inputPlain} />
                            </div>
                            <div>
                              <label className={labelCls}>Telephone</label>
                              <input type="text" value={telephoneNumbers} onChange={e => setTelephoneNumbers(e.target.value)} placeholder="+254 7XX XXX XXX" className={inputPlain} />
                            </div>
                          </div>
                          <div>
                            <label className={labelCls}>Institution Logo (optional)</label>
                            <div className="border-2 border-dashed border-gray-200 rounded-lg p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
                              <Upload size={14} className="text-gray-400 shrink-0" />
                              <span className="text-[10px] font-bold text-gray-400">Choose file or drag here (max 3MB)</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SECTION B */}
                      {instSection === "B" && (
                        <div className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50/40 text-left">
                          <p className="text-[10px] font-black text-[#ef9d4a] uppercase tracking-wider">B — Institutional Structure</p>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className={labelCls}>Head of Institution Name</label>
                              <input type="text" value={headName} onChange={e => setHeadName(e.target.value)} placeholder="Vice Chancellor" className={inputPlain} />
                            </div>
                            <div>
                              <label className={labelCls}>Title</label>
                              <input type="text" value={headTitle} onChange={e => setHeadTitle(e.target.value)} placeholder="Prof. / Dr." className={inputPlain} />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className={labelCls}>Head Email</label>
                              <input type="email" value={headEmail} onChange={e => setHeadEmail(e.target.value)} placeholder="vc@institution.edu" className={inputPlain} />
                            </div>
                            <div>
                              <label className={labelCls}>Head Mobile</label>
                              <input type="text" value={headMobile} onChange={e => setHeadMobile(e.target.value)} placeholder="0722000000" className={inputPlain} />
                            </div>
                          </div>
                          <div>
                            <label className={labelCls}>Internal Units Supporting Innovation</label>
                            <div className="space-y-1.5 bg-white border border-gray-100 rounded-lg p-2.5">
                              {["Directorate of Research & Innovation","Technology Transfer Office","Entrepreneurship Centre","Incubation/Start-up Centre","Industry Liaison Office","Intellectual Property Office","None – Interested in establishing structures"].map(u => (
                                <label key={u} className="flex items-start gap-2 cursor-pointer">
                                  <input type="checkbox" checked={internalUnits.includes(u)} onChange={() => toggleCheck(internalUnits, setInternalUnits, u)} className="mt-0.5 rounded border-gray-300 text-[#ef9d4a]" />
                                  <span className="text-[10px] font-medium text-gray-700 leading-tight">{u}</span>
                                </label>
                              ))}
                              <label className="flex items-start gap-2 cursor-pointer">
                                <input type="checkbox" checked={internalUnits.includes("Other")} onChange={() => toggleCheck(internalUnits, setInternalUnits, "Other")} className="mt-0.5 rounded border-gray-300" />
                                <span className="text-[10px] font-medium text-gray-700">Other (Specify)</span>
                              </label>
                            </div>
                            {internalUnits.includes("Other") && (
                              <input type="text" value={internalUnitsOther} onChange={e => setInternalUnitsOther(e.target.value)} placeholder="Specify unit" className={inputPlain + " mt-1.5"} />
                            )}
                          </div>
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-wide">Staff Dedicated to Innovation</p>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              ["Innovation/Entrepreneurship", innovationStaff, setInnovationStaff],
                              ["Academic/Research", academicStaff, setAcademicStaff],
                              ["Support/Administrative", supportStaff, setSupportStaff],
                              ["Technical", technicalStaff, setTechnicalStaff],
                            ].map(([lbl, val, setter]) => (
                              <div key={lbl as string}>
                                <label className={labelCls}>{lbl as string}</label>
                                <input type="number" value={val as string} onChange={e => (setter as any)(e.target.value)} placeholder="0" className={inputPlain} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* SECTION C */}
                      {instSection === "C" && (
                        <div className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50/40 text-left">
                          <p className="text-[10px] font-black text-[#ef9d4a] uppercase tracking-wider">C — Innovation Capacity</p>
                          <div>
                            <label className={labelCls}>Formal Innovation Policy Adopted?</label>
                            <div className="flex flex-col gap-1 bg-white border border-gray-100 rounded-lg p-2.5">
                              {["Yes","No, in development","No, but planned within 12 months"].map(p => (
                                <label key={p} className="flex items-center gap-2 cursor-pointer text-[10.5px] font-medium text-gray-700">
                                  <input type="radio" name="pol" checked={adoptedPolicy === p} onChange={() => setAdoptedPolicy(p)} className="text-[#ef9d4a]" />
                                  {p}
                                </label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelCls}>Existing Innovation Programs</label>
                            <div className="space-y-1.5 bg-white border border-gray-100 rounded-lg p-2.5">
                              {["Student Innovation Challenges","Seed Fund or Startup Grants","Faculty Commercialization Support","Industry Co-creation Projects","Joint Research for Innovation","Social/Community Innovation","Start-up Incubation","Curriculum-integrated Entrepreneurship"].map(p => (
                                <label key={p} className="flex items-start gap-2 cursor-pointer">
                                  <input type="checkbox" checked={existingPrograms.includes(p)} onChange={() => toggleCheck(existingPrograms, setExistingPrograms, p)} className="mt-0.5 rounded border-gray-300 text-[#ef9d4a]" />
                                  <span className="text-[10px] font-medium text-gray-700 leading-tight">{p}</span>
                                </label>
                              ))}
                              <label className="flex items-start gap-2 cursor-pointer">
                                <input type="checkbox" checked={existingPrograms.includes("Other")} onChange={() => toggleCheck(existingPrograms, setExistingPrograms, "Other")} className="mt-0.5 rounded border-gray-300" />
                                <span className="text-[10px] font-medium text-gray-700">Other (Specify)</span>
                              </label>
                            </div>
                            {existingPrograms.includes("Other") && <input type="text" value={existingProgramsOther} onChange={e => setExistingProgramsOther(e.target.value)} placeholder="Specify programs" className={inputPlain + " mt-1.5"} />}
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className={labelCls}>Active Projects (last 3 yrs)</label>
                              <input type="number" value={activeProjects} onChange={e => setActiveProjects(e.target.value)} placeholder="e.g. 15" className={inputPlain} />
                            </div>
                            <div>
                              <label className={labelCls}>Patents Filed (last 5 yrs)</label>
                              <input type="number" value={patentsCount} onChange={e => setPatentsCount(e.target.value)} placeholder="e.g. 5" className={inputPlain} />
                            </div>
                          </div>
                          <div>
                            <label className={labelCls}>Startup/Spin-offs Origin</label>
                            <div className="flex flex-wrap gap-2 bg-white border border-gray-100 rounded-lg p-2.5">
                              {["Internal/Student-led","Faculty-led","Industry collaboration"].map(o => (
                                <label key={o} className="flex items-center gap-1.5 cursor-pointer text-[10.5px] font-medium text-gray-700">
                                  <input type="checkbox" checked={startupsOrigin.includes(o)} onChange={() => toggleCheck(startupsOrigin, setStartupsOrigin, o)} className="rounded border-gray-300 text-[#ef9d4a]" />
                                  {o}
                                </label>
                              ))}
                              <label className="flex items-center gap-1.5 cursor-pointer text-[10.5px] font-medium text-gray-700">
                                <input type="checkbox" checked={startupsOrigin.includes("Other")} onChange={() => toggleCheck(startupsOrigin, setStartupsOrigin, "Other")} className="rounded border-gray-300" />
                                Other
                              </label>
                            </div>
                            {startupsOrigin.includes("Other") && <input type="text" value={startupsOriginOther} onChange={e => setStartupsOriginOther(e.target.value)} placeholder="Specify" className={inputPlain + " mt-1.5"} />}
                          </div>
                        </div>
                      )}

                      {/* SECTION D */}
                      {instSection === "D" && (
                        <div className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50/40 text-left">
                          <p className="text-[10px] font-black text-[#ef9d4a] uppercase tracking-wider">D — Membership Category & Commitment</p>
                          <div>
                            <label className={labelCls}>Applying for Category</label>
                            <div className="space-y-2 bg-white border border-gray-100 rounded-lg p-2.5">
                              {[
                                {name:"Foundational Member",desc:"Early-stage, developing ecosystem"},
                                {name:"Associate Member",desc:"Intermediate stage, visible progress"},
                                {name:"Full Member",desc:"Advanced stage, structured & sustainable"},
                              ].map(cat => (
                                <label key={cat.name} className="flex items-start gap-2 cursor-pointer">
                                  <input type="radio" name="cat" checked={appliedCategory === cat.name} onChange={() => setAppliedCategory(cat.name)} className="mt-0.5 text-[#ef9d4a]" />
                                  <div>
                                    <p className="text-[10.5px] font-black text-gray-800 leading-none">{cat.name}</p>
                                    <p className="text-[9px] font-bold text-gray-400 mt-0.5">{cat.desc}</p>
                                  </div>
                                </label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelCls}>Intended Contributions to NEIL</label>
                            <div className="space-y-1.5 bg-white border border-gray-100 rounded-lg p-2.5">
                              {["Technical expertise","Hosting events/trainings","Peer mentorship","Policy input","Resource mobilization","Joint project implementation"].map(c => (
                                <label key={c} className="flex items-start gap-2 cursor-pointer">
                                  <input type="checkbox" checked={intendedContributions.includes(c)} onChange={() => toggleCheck(intendedContributions, setIntendedContributions, c)} className="mt-0.5 rounded border-gray-300 text-[#ef9d4a]" />
                                  <span className="text-[10px] font-medium text-gray-700 leading-tight">{c}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelCls}>Strategic Interests in Joining NEIL (max 300 words)</label>
                            <textarea value={strategicInterests} onChange={e => setStrategicInterests(e.target.value)} rows={4} placeholder="Describe your institution's objectives and how you plan to engage..." className="w-full rounded-lg border border-gray-200 py-2 px-3 text-xs text-gray-800 outline-none resize-none focus:border-[#ef9d4a]" />
                          </div>
                        </div>
                      )}

                      {/* SECTION E */}
                      {instSection === "E" && (
                        <div className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50/40 text-left">
                          <p className="text-[10px] font-black text-[#ef9d4a] uppercase tracking-wider">E — Declaration & Attestation</p>
                          <p className="text-[10px] font-semibold text-gray-600 italic leading-relaxed bg-white border border-gray-100 p-2.5 rounded-lg">
                            I, the undersigned, acting in my official capacity with full authority, do hereby declare that:
                          </p>
                          <div className="space-y-2 bg-white border border-gray-100 rounded-lg p-2.5">
                            {[
                              {label:"The information provided herein is accurate and complete.", state:attestCorrect, set:setAttestCorrect},
                              {label:"The institution commits to upholding the objectives and values of NEIL.", state:attestUphold, set:setAttestUphold},
                              {label:"The institution agrees to fulfill all membership obligations including participation, documentation, and reporting.", state:attestObligations, set:setAttestObligations},
                              {label:"The institution authorizes NEIL to conduct necessary verifications prior to admission.", state:attestAuthorize, set:setAttestAuthorize},
                            ].map((a, i) => (
                              <label key={i} className="flex items-start gap-2 cursor-pointer">
                                <input type="checkbox" checked={a.state} onChange={() => a.set(!a.state)} className="mt-0.5 rounded border-gray-300 text-[#ef9d4a]" />
                                <span className="text-[10px] font-medium text-gray-700 leading-tight">{a.label}</span>
                              </label>
                            ))}
                          </div>
                          <div>
                            <label className={labelCls}>Representative Full Name</label>
                            <input type="text" value={representativeName} onChange={e => setRepresentativeName(e.target.value)} placeholder="e.g. CHRISMAN ATANDI" className={inputPlain} />
                          </div>
                          <div>
                            <label className={labelCls}>Authorized Signature (Upload, max 5MB)</label>
                            <div className="border-2 border-dashed border-gray-200 rounded-lg p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                              <Upload size={14} className="text-gray-400 shrink-0" />
                              <span className="text-[10px] font-bold text-gray-400">Upload signature image or PDF</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* UPLOAD SECTION */}
                      {instSection === "UPLOAD" && (
                        <div className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50/40 text-left">
                          <p className="text-[10px] font-black text-[#ef9d4a] uppercase tracking-wider">Final — Document Uploads</p>
                          <div className="text-[10px] text-gray-500 font-semibold leading-relaxed bg-white border border-gray-100 rounded-lg p-2.5 space-y-1">
                            <p className="font-black text-gray-700">Instructions:</p>
                            <p>• Select all files together in your file chooser</p>
                            <p>• Maximum 5 files in total</p>
                            <p>• Maximum 5MB per file</p>
                            <p>• Supported: PDF, DOC, DOCX, JPG, JPEG, PNG</p>
                          </div>
                          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
                            <Upload size={20} className="text-gray-400" />
                            <span className="text-[10.5px] font-black text-gray-500">Choose Files (max 5)</span>
                            <span className="text-[9px] font-bold text-gray-400">PDF, DOC, JPG — up to 5MB each</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  <button type="submit" disabled={submitting}
                    className="w-full rounded-lg bg-[#ef9d4a] py-2.5 text-xs font-bold text-white shadow-md hover:brightness-95 active:scale-[0.98]">
                    {submitting
                      ? "Submitting..."
                      : registerRole === "INSTITUTION"
                        ? "Submit Membership Application"
                        : "Create Account & Sign In"}
                  </button>
                </form>

                <p className="text-center text-xs font-semibold text-gray-500 pt-5">
                  Already have an account?{" "}
                  <button onClick={() => setTab("signin")} className="text-[#ef9d4a] hover:underline font-extrabold">
                    Sign In
                  </button>
                </p>
                  </>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </>
  );
}
