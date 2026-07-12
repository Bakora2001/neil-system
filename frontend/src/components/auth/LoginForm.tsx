import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/lib/api-client";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (values: LoginFormValues) => {
    setServerError(null);
    setSubmitting(true);
    try {
      await login({ email: values.email, password: values.password });
      navigate("/portal");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Unable to sign in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full text-left">
      {/* Title & Subtitle */}
      <h2 className="text-[2rem] font-bold text-[#00103A] tracking-tight">Sign In</h2>
      <p className="mt-1 text-sm text-gray-500">
        Enter your credentials to access your account
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
        
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold text-gray-700">
            Email Address
          </label>
          <div className="relative">
            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#ef9d4a] focus:ring-1 focus:ring-[#ef9d4a] transition-all"
              {...register("email")}
            />
          </div>
          {errors.email && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="mb-2 block text-xs font-semibold text-gray-700">
            Password
          </label>
          <div className="relative">
            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-10 text-sm text-gray-800 outline-none focus:border-[#ef9d4a] focus:ring-1 focus:ring-[#ef9d4a] transition-all"
              {...register("password")}
            />
            {/* Eye Suffix icon to toggle show/hide password */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.password.message}</p>}
        </div>

        {/* Remember Me & Forgot Password Row */}
        <div className="flex items-center justify-between text-xs py-1 select-none">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-[#ef9d4a] focus:ring-[#ef9d4a]"
              {...register("rememberMe")}
            />
            <span className="font-semibold">Remember Me</span>
          </label>
          <Link to="/forgot-password" className="font-semibold text-[#ef9d4a] hover:brightness-90 transition-all">
            Forgot Password?
          </Link>
        </div>

        {serverError && <p className="text-xs text-red-600 font-medium">{serverError}</p>}

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-[#ef9d4a] py-3 text-sm font-bold text-white shadow-md hover:brightness-95 disabled:opacity-60 transition-all active:scale-[0.98]"
        >
          {submitting ? "Signing in…" : "Sign In"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 text-xs text-gray-400 py-2">
          <div className="h-px flex-1 bg-gray-200" />
          <span>or continue with</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-3">
          {/* Google Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69a5.74 5.74 0 0 1-2.5 3.77v3.13h4.04c2.37-2.18 3.74-5.39 3.74-8.75z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-4.04-3.13c-1.12.75-2.56 1.2-3.89 1.2-3 0-5.54-2.03-6.44-4.76H1.42v3.23C3.4 21.67 7.42 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.56 14.4c-.23-.68-.36-1.41-.36-2.15s.13-1.47.36-2.15V6.87H1.42a11.93 11.93 0 0 0 0 10.76l4.14-3.23z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.93 1.19 15.24 0 12 0 7.42 0 3.4 2.33 1.42 6.87l4.14 3.23c.9-2.73 3.44-4.75 6.44-4.75z"
              />
            </svg>
            <span>Google</span>
          </button>

          {/* Microsoft Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 23 23" fill="none">
              <path d="M0 0h11v11H0z" fill="#F25022"/>
              <path d="M12 0h11v11H12z" fill="#7FBA00"/>
              <path d="M0 12h11v11H0z" fill="#00A4EF"/>
              <path d="M12 12h11v11H12z" fill="#FFB900"/>
            </svg>
            <span>Microsoft</span>
          </button>
        </div>

        {/* Register footer */}
        <p className="text-center text-xs font-semibold text-gray-500 pt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#ef9d4a] hover:brightness-90 transition-all font-bold">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}
