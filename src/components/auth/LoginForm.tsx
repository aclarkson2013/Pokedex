"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import {
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle,
  resetPassword,
} from "@/lib/firebase/auth";
import { cn } from "@/lib/utils/cn";

type FormMode = "login" | "signup" | "reset";

export function LoginForm() {
  const router = useRouter();
  const { user, isConfigured } = useAuth();
  const [mode, setMode] = useState<FormMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already logged in
  if (user) {
    router.push("/profile");
    return null;
  }

  // Show message if Firebase is not configured
  if (!isConfigured) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6" style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 1.5rem)` }}>
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Authentication
          </h1>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 dark:bg-amber-900/20 dark:border-amber-800">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Firebase is not configured yet. Add your Firebase config to{" "}
              <code className="rounded bg-amber-100 px-1 text-xs dark:bg-amber-900/50">
                .env.local
              </code>{" "}
              to enable login.
            </p>
          </div>
          <Link
            href="/"
            className="mt-4 block text-center text-sm text-red-500 hover:text-red-600"
          >
            ← Back to Pokedex
          </Link>
        </div>
      </main>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      if (mode === "login") {
        await signInWithEmail(email, password);
        router.push("/profile");
      } else if (mode === "signup") {
        if (!displayName.trim()) {
          setError("Please enter a display name.");
          setIsSubmitting(false);
          return;
        }
        if (password.length < 6) {
          setError("Password must be at least 6 characters.");
          setIsSubmitting(false);
          return;
        }
        await signUpWithEmail(email, password, displayName.trim());
        router.push("/profile");
      } else if (mode === "reset") {
        await resetPassword(email);
        setSuccess("Password reset email sent! Check your inbox.");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      // Clean up Firebase error messages
      if (message.includes("auth/invalid-email")) {
        setError("Invalid email address.");
      } else if (message.includes("auth/user-not-found")) {
        setError("No account found with this email.");
      } else if (message.includes("auth/wrong-password")) {
        setError("Incorrect password.");
      } else if (message.includes("auth/email-already-in-use")) {
        setError("An account with this email already exists.");
      } else if (message.includes("auth/weak-password")) {
        setError("Password must be at least 6 characters.");
      } else if (message.includes("auth/too-many-requests")) {
        setError("Too many attempts. Please try again later.");
      } else if (message.includes("auth/popup-closed-by-user")) {
        setError("Sign-in popup was closed.");
      } else {
        setError(message);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleGoogleSignIn() {
    setError("");
    setIsSubmitting(true);
    try {
      await signInWithGoogle();
      router.push("/profile");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Google sign-in failed";
      if (message.includes("auth/popup-closed-by-user")) {
        setError("Sign-in popup was closed.");
      } else {
        setError(message);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900" style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 1.5rem)` }}>
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {mode === "login" && "Welcome Back"}
            {mode === "signup" && "Create Account"}
            {mode === "reset" && "Reset Password"}
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {mode === "login" && "Sign in to your Pokedex account"}
            {mode === "signup" && "Join the Pokedex community"}
            {mode === "reset" && "We'll send you a reset link"}
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
          {/* Google Sign-In */}
          {mode !== "reset" && (
            <>
              <button
                onClick={handleGoogleSignIn}
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>

              {/* Divider */}
              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-600" />
                <span className="text-xs text-gray-400">or</span>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-600" />
              </div>
            </>
          )}

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {mode === "signup" && (
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300">
                  Display Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Ash Ketchum"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-colors focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-red-500"
                />
              </div>
            )}

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ash@pokemon.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-colors focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-red-500"
              />
            </div>

            {mode !== "reset" && (
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-colors focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-red-500"
                />
              </div>
            )}

            {/* Error / Success messages */}
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 dark:bg-red-900/20 dark:border-red-800">
                <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}
            {success && (
              <div className="rounded-lg bg-green-50 border border-green-200 p-3 dark:bg-green-900/20 dark:border-green-800">
                <p className="text-xs text-green-600 dark:text-green-400">
                  {success}
                </p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full rounded-xl py-3 text-sm font-semibold text-white shadow-sm transition-all",
                "bg-red-500 hover:bg-red-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Please wait...
                </span>
              ) : (
                <>
                  {mode === "login" && "Sign In"}
                  {mode === "signup" && "Create Account"}
                  {mode === "reset" && "Send Reset Link"}
                </>
              )}
            </button>
          </form>

          {/* Mode switches */}
          <div className="mt-4 space-y-2 text-center text-xs text-gray-500 dark:text-gray-400">
            {mode === "login" && (
              <>
                <button
                  onClick={() => { setMode("reset"); setError(""); setSuccess(""); }}
                  className="hover:text-red-500 transition-colors"
                >
                  Forgot password?
                </button>
                <p>
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => { setMode("signup"); setError(""); setSuccess(""); }}
                    className="font-semibold text-red-500 hover:text-red-600"
                  >
                    Sign Up
                  </button>
                </p>
              </>
            )}
            {mode === "signup" && (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => { setMode("login"); setError(""); setSuccess(""); }}
                  className="font-semibold text-red-500 hover:text-red-600"
                >
                  Sign In
                </button>
              </p>
            )}
            {mode === "reset" && (
              <button
                onClick={() => { setMode("login"); setError(""); setSuccess(""); }}
                className="font-semibold text-red-500 hover:text-red-600"
              >
                ← Back to Sign In
              </button>
            )}
          </div>
        </div>

        {/* Back to Pokedex */}
        <Link
          href="/"
          className="mt-4 block text-center text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          ← Back to Pokedex
        </Link>
      </div>
    </main>
  );
}
