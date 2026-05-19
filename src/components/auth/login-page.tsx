"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2, ShieldCheck, UserCheck, Heart, Mail, Lock, Phone } from "lucide-react";
import Logo from "../ui/Logo";

// Zod schema for validation
const loginSchema = z.object({
  identifier: z.string().refine((val) => {
    const isEmail = z.string().email().safeParse(val).success;
    const isMobile = /^\+?[1-9]\d{9,12}$/.test(val);
    return isEmail || isMobile;
  }, {
    message: "Please enter a valid email address or 10-12 digit mobile number.",
  }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  rememberMe: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const GoogleIcon = () => (
  <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-3.3-4.53-6.16-4.53z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

export default function LoginPageComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isOtpMode, setIsOtpMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Success simulation
      window.location.href = "/";
    } catch {
      setErrorMsg("Invalid credentials. Please verify and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#FCFAF5]">
      
      {/* LEFT PANEL: Branding & Marketing Showcase */}
      <div className="w-full md:w-[48%] lg:w-[45%] shrink-0 bg-gradient-to-br from-[#FFF9EE] via-[#FCFAF5] to-[#FFF5EB] border-r border-[#E8D7B0] relative overflow-hidden flex flex-col justify-between p-8 md:p-12 lg:p-16 select-none">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-radial from-[#FF7A00]/5 via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-radial from-[#E65100]/5 via-transparent to-transparent blur-3xl pointer-events-none" />

        {/* Top Section: Logo */}
        <div className="relative z-10 flex items-center mb-8 md:mb-0">
          <Logo />
        </div>

        {/* Middle Section: Marketing Message */}
        <div className="relative z-10 my-auto flex flex-col items-center text-center md:items-start md:text-left py-6">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0B132B] tracking-tight leading-[1.1] mb-4 font-serif">
            Trusted Connections.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#E65100]">Sacred Relationships.</span>
          </h1>

          {/* Saffron Flower Emblem Divider */}
          <div className="flex items-center gap-2 my-5">
            <div className="w-10 h-px bg-[#E8D7B0]" />
            <span className="text-xl text-[#FF7A00]">💮</span>
            <div className="w-10 h-px bg-[#E8D7B0]" />
          </div>

          <p className="text-sm sm:text-base font-semibold text-[#5F5A54] leading-relaxed max-w-[380px] mb-8">
            Join thousands of verified Hindu singles finding their perfect life partner.
          </p>

          {/* Three Trust Points */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-[420px]">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-[#FF7A00]" />, title: "100% Verified", desc: "Profiles" },
              { icon: <UserCheck className="w-5 h-5 text-[#FF7A00]" />, title: "Privacy", desc: "Protected" },
              { icon: <Heart className="w-5 h-5 text-[#FF7A00]" />, title: "Trusted by", desc: "Lakhs of Families" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-11 h-11 rounded-full bg-[#FFF0E0] border border-[#FF7A00]/20 flex items-center justify-center mb-2.5">
                  {item.icon}
                </div>
                <span className="text-[11.5px] font-black text-[#0B132B] leading-tight block">
                  {item.title}
                </span>
                <span className="text-[10px] font-bold text-[#6B7280]">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Temple Architecture Silhouettes */}
        <div className="relative z-0 w-full h-36 md:h-44 mt-8 md:mt-0 flex items-end opacity-25">
          <svg viewBox="0 0 400 120" fill="none" className="w-full h-full text-[#FF7A00]">
            {/* Left Temple Gopuram */}
            <path d="M10 120 L10 90 L18 80 L18 60 L24 50 L24 35 L30 30 L30 15 L32 10 L34 15 L34 30 L40 35 L40 50 L46 60 L46 80 L54 90 L54 120 Z" fill="currentColor" opacity="0.4" />
            <path d="M35 120 L35 80 L45 70 L45 50 L52 40 L52 25 L60 20 L60 5 L62 0 L64 5 L64 20 L72 25 L72 40 L79 50 L79 70 L89 80 L89 120 Z" fill="currentColor" opacity="0.6" />
            
            {/* Center Main Mandap */}
            <path d="M120 120 L120 70 C120 50 140 40 160 40 C180 40 200 50 200 70 L200 120 Z" fill="currentColor" opacity="0.3" />
            <path d="M140 120 L140 60 L148 50 L148 30 L156 20 L156 10 L160 5 L164 10 L164 20 L172 30 L172 50 L180 60 L180 120 Z" fill="currentColor" opacity="0.8" />

            {/* Right Side Shikharas */}
            <path d="M220 120 L220 95 L226 85 L226 70 L232 60 L232 45 L238 40 L238 25 L240 20 L242 25 L242 40 L248 45 L248 60 L254 70 L254 85 L260 95 L260 120 Z" fill="currentColor" opacity="0.5" />
            <path d="M280 120 L280 75 L292 65 L292 45 L302 35 L302 20 L310 15 L310 5 L312 0 L314 5 L314 15 L322 20 L322 35 L332 45 L332 65 L344 75 L344 120 Z" fill="currentColor" opacity="0.7" />
          </svg>
        </div>

      </div>

      {/* RIGHT PANEL: Authentication Form */}
      <div className="grow bg-white flex flex-col justify-between p-8 md:p-12 lg:p-16 relative">
        
        {/* Top-Right Sign Up Navigation */}
        <div className="absolute top-8 right-8 text-xs font-semibold text-[#6B7280] select-none">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#FF7A00] hover:text-[#E65100] font-black hover:underline ml-1">
            Sign Up
          </Link>
        </div>

        {/* Centered Login Card Form */}
        <div className="max-w-[400px] w-full mx-auto my-auto flex flex-col pt-10 md:pt-0">
          
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-[#0B132B] tracking-tight mb-2 font-serif">
              Welcome Back
            </h2>
            <p className="text-sm font-semibold text-[#6B7280]">
              Sign in to continue to your account
            </p>
          </div>

          {/* Error message */}
          {errorMsg && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-red-600">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4.5">
            
            {/* Identity input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
                Mobile Number or Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  disabled={isLoading}
                  placeholder="Enter mobile number or email"
                  {...register("identifier")}
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-slate-50/30 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/30 transition-all duration-200
                    ${errors.identifier ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#FF7A00]"}`}
                />
                <span className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400">
                  <Mail className="w-4.5 h-4.5" />
                </span>
              </div>
              {errors.identifier && (
                <span className="text-xs font-bold text-red-500">{errors.identifier.message}</span>
              )}
            </div>

            {/* Password input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  disabled={isLoading}
                  placeholder="Enter your password"
                  {...register("password")}
                  className={`w-full pl-11 pr-11 py-3 rounded-xl border bg-slate-50/30 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/30 transition-all duration-200
                    ${errors.password ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#FF7A00]"}`}
                />
                <span className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400">
                  <Lock className="w-4.5 h-4.5" />
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-3.5 p-1 rounded-md text-slate-400 hover:text-[#0B132B] transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                </button>
              </div>
              {errors.password && (
                <span className="text-xs font-bold text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* Options Checkbox & Link */}
            <div className="flex items-center justify-between text-xs font-semibold select-none mt-1">
              <label className="flex items-center gap-2 text-[#6B7280] cursor-pointer">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="w-4 h-4 text-[#FF7A00] border-[#E8D7B0] rounded-sm focus:ring-[#FF7A00] accent-[#FF7A00]"
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="text-[#FF7A00] hover:underline hover:text-[#E65100] transition-all">
                Forgot Password?
              </a>
            </div>

            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[52px] rounded-xl font-black text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#FF7A00] to-[#E65100] hover:scale-[1.01] active:scale-[0.99] hover:shadow-md hover:shadow-[#FF7A00]/10 transition-all duration-250 cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Signing In...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>

          </form>

          {/* Divider */}
          <div className="relative my-6 text-center select-none">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E8D7B0]" />
            </div>
            <span className="relative z-10 px-3 bg-white text-[11px] font-black text-slate-400 uppercase tracking-widest">
              OR
            </span>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col gap-3">
            {/* OTP login */}
            <button
              type="button"
              onClick={() => setIsOtpMode(true)}
              className="w-full py-3 rounded-xl border border-[#E8D7B0] hover:border-[#FF7A00] hover:bg-[#FCFAF5] text-xs font-black uppercase tracking-wider text-[#0B132B] flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-slate-400" />
              <span>Login with OTP</span>
            </button>

            {/* Google Authentication */}
            <button
              type="button"
              className="w-full py-3 rounded-xl border border-[#E8D7B0] hover:border-[#FF7A00] hover:bg-[#FCFAF5] text-xs font-black uppercase tracking-wider text-[#0B132B] flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
            >
              <GoogleIcon />
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Authenticity verification banner */}
          <div className="mt-8 p-3 rounded-xl bg-[#FFF9EE] border border-[#F2D9A6] flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#FF7A00] shrink-0" />
            <p className="text-[11px] font-black uppercase tracking-wider text-[#0B132B] select-none">
              All profiles are reviewed for authenticity.
            </p>
          </div>

        </div>

        {/* Page Muted Footer */}
        <div className="mt-8 text-center text-xs font-semibold text-slate-400 select-none">
          New to Hindu Vahini Matrimony?{" "}
          <Link href="/register" className="text-[#FF7A00] hover:underline font-black">
            Create Free Profile
          </Link>
        </div>

      </div>

    </div>
  );
}
