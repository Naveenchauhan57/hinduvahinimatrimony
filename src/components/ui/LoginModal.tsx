"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, Loader2, Phone } from "lucide-react";

const GoogleIcon = () => (
  <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-3.3-4.53-6.16-4.53z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

// Form validation schema
const loginSchema = z.object({
  identifier: z.string().refine((val) => {
    // Validate either valid email or 10-12 digit mobile number
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

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister?: () => void;
}

export default function LoginModal({ isOpen, onClose, onOpenRegister }: LoginModalProps) {
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
      onClose();
      reset();
    } catch {
      setErrorMsg("Invalid credentials. Please verify and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
          <Dialog.Portal forceMount>
            
            {/* Dark semi-transparent backdrop */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              >
                {/* Modal Container */}
                <Dialog.Content asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                    className="w-full max-w-[440px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden flex flex-col p-8 sm:p-10 text-[#111827] focus:outline-none"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                  >
                    
                    {/* Close Button */}
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 flex items-center justify-center text-[#6B7280] hover:text-[#111827] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/40"
                        aria-label="Close dialog"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </Dialog.Close>

                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center mb-7 select-none">
                      {/* Monogram logo emblem */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#E65100] flex items-center justify-center text-white shadow-md shadow-[#FF7A00]/20 mb-3.5">
                        <span className="font-serif text-xl font-black tracking-wider">HV</span>
                      </div>

                      <Dialog.Title className="text-xs font-black uppercase tracking-[0.2em] text-[#FF7A00] mb-1">
                        Hindu Vahini Matrimony
                      </Dialog.Title>
                      <Dialog.Description className="text-2xl font-black text-[#111827] tracking-tight">
                        Welcome Back
                      </Dialog.Description>
                      <p className="text-sm font-semibold text-[#6B7280] mt-1.5">
                        Sign in to continue to your account
                      </p>
                    </div>

                    {/* Error Banner */}
                    {errorMsg && (
                      <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-red-600">
                        {errorMsg}
                      </div>
                    )}

                    {/* Form Fields */}
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4.5">
                      
                      {/* Identity (Email/Mobile) */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-[#111827]">
                          Mobile Number or Email
                        </label>
                        <input
                          type="text"
                          disabled={isLoading}
                          placeholder="e.g. name@email.com or 9876543210"
                          {...register("identifier")}
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm font-semibold text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/30 transition-all duration-200
                            ${errors.identifier ? "border-red-500 bg-red-50/20" : "border-[#E5E7EB] focus:border-[#FF7A00]"}`}
                        />
                        {errors.identifier && (
                          <span className="text-xs font-bold text-red-500">{errors.identifier.message}</span>
                        )}
                      </div>

                      {/* Password */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-[#111827]">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            disabled={isLoading}
                            placeholder="••••••••"
                            {...register("password")}
                            className={`w-full pl-4 pr-11 py-3 rounded-xl border bg-slate-50/50 text-sm font-semibold text-[#111827] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/30 transition-all duration-200
                              ${errors.password ? "border-red-500 bg-red-50/20" : "border-[#E5E7EB] focus:border-[#FF7A00]"}`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 -translate-y-1/2 right-3.5 p-1 rounded-md text-[#6B7280] hover:text-[#111827] transition-colors focus:outline-none"
                          >
                            {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                          </button>
                        </div>
                        {errors.password && (
                          <span className="text-xs font-bold text-red-500">{errors.password.message}</span>
                        )}
                      </div>

                      {/* Options Row */}
                      <div className="flex items-center justify-between text-xs font-semibold select-none mt-1">
                        <label className="flex items-center gap-2 text-[#6B7280] cursor-pointer">
                          <input
                            type="checkbox"
                            {...register("rememberMe")}
                            className="w-4 h-4 text-[#FF7A00] border-[#E5E7EB] rounded-sm focus:ring-[#FF7A00] accent-[#FF7A00]"
                          />
                          <span>Remember me</span>
                        </label>
                        <a href="#forgot" className="text-[#FF7A00] hover:underline hover:text-[#E65100] transition-all">
                          Forgot Password?
                        </a>
                      </div>

                      {/* Sign In Button */}
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

                    {/* Divider OR */}
                    <div className="relative my-6 text-center select-none">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#E5E7EB]" />
                      </div>
                      <span className="relative z-10 px-3 bg-white text-[11px] font-black text-slate-400 uppercase tracking-widest">
                        OR
                      </span>
                    </div>

                    {/* Secondary Actions */}
                    <div className="flex flex-col gap-3">
                      {/* OTP Login */}
                      <button
                        type="button"
                        onClick={() => setIsOtpMode(true)}
                        className="w-full py-3 rounded-xl border border-[#E5E7EB] hover:border-[#FF7A00] hover:bg-slate-50 text-xs font-black uppercase tracking-wider text-[#111827] flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
                      >
                        <Phone className="w-4 h-4 text-[#6B7280]" />
                        <span>Login with OTP</span>
                      </button>

                      {/* Google Authentication */}
                      <button
                        type="button"
                        className="w-full py-3 rounded-xl border border-[#E5E7EB] hover:border-[#FF7A00] hover:bg-slate-50 text-xs font-black uppercase tracking-wider text-[#111827] flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
                      >
                        <GoogleIcon />
                        <span>Continue with Google</span>
                      </button>
                    </div>

                    {/* Footer */}
                    <div className="mt-7 pt-5 border-t border-slate-100 text-center text-xs font-semibold text-slate-400 select-none">
                      <span>New to Hindu Vahini Matrimony? </span>
                      {onOpenRegister ? (
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onOpenRegister();
                          }}
                          className="text-[#FF7A00] hover:underline font-black cursor-pointer ml-1"
                        >
                          Create Free Profile
                        </button>
                      ) : (
                        <a href="/register" className="text-[#FF7A00] hover:underline font-black ml-1">
                          Create Free Profile
                        </a>
                      )}
                    </div>

                    {/* Trust Footnote */}
                    <p className="text-[10px] font-bold text-center text-[#6B7280] tracking-wide mt-4 uppercase select-none">
                      All profiles are reviewed for authenticity.
                    </p>

                  </motion.div>
                </Dialog.Content>
              </motion.div>
            </Dialog.Overlay>
            
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  );
}
