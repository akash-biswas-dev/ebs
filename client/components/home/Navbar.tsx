'use client';

import { Building2, Menu, X } from "lucide-react";
import React, { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";
import Button from '@/components/Button'

const Navbar = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Building2 className="h-8 w-8 text-blue-900" />
              <Link href='/' className="ml-2 text-2xl font-bold text-slate-900">
                EBS
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button href="/auth" variant="ghost">
              Login
            </Button>
            <Button href="/auth/sign-up">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-blue-900 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation isMenuOpen/>
      </div>
    </nav>
  );
};

export default Navbar;
