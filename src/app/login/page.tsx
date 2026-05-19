import React from "react";
import LoginPageComponent from "@/components/auth/login-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Hindu Vahini Matrimony",
  description: "Sign in to your premium Hindu Vahini Matrimony account to find and connect with verified matches.",
};

export default function LoginPage() {
  return <LoginPageComponent />;
}
