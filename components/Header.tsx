import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-3">
        {/* Logo Section - Aligned to Left */}
        <div className="flex items-center justify-start w-auto ">
          <Link href="/" className="font-bold shrink-0 pr-10">
            <Image
              src="/logo.png" // Ensure the image is placed in the public folder
              alt="logo"
              width={100}
              height={100}
              className="w-20 sm:w-24 lg:w-30 object-contain"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <SearchBar />
        </div>

        {/* Navigation & User Options */}
        <div className="hidden lg:flex items-center gap-6 ml-auto">
          <SignedIn>
            <div className="flex items-center gap-4">
              <Link href="/seller" aria-label="Sell Tickets">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                  Sell Tickets
                </button>
              </Link>
              <Link href="/tickets" aria-label="My Tickets">
                <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm border border-gray-300 hover:bg-gray-200 transition">
                  My Tickets
                </button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm border border-gray-300 hover:bg-gray-200 transition"
                aria-label="Sign In"
              >
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden w-full flex justify-center gap-3 mt-4">
          <SignedIn>
            <Link href="/seller" className="flex-1">
              <button className="w-full bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                Sell Tickets
              </button>
            </Link>
            <Link href="/tickets" className="flex-1">
              <button className="w-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                My Tickets
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
