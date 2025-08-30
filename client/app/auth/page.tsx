'use client';



import React, { FormEvent, useState } from "react";
import { Building2, Eye, EyeOff, Loader2 } from "lucide-react";
import Input from '@/components/Input';
import Button from "@/components/Button";


const AuthPage = () => {

  type ErrorType = {email:string|null, password:string|null};

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorType>({email:null, password:null});

  const onChangeEmail = (value:string)=>{
    setFormData((prev)=>({...prev,email:value}))

    setErrors((prev)=>({...prev,email:null}))
  }

  const onChangePassword = (value:string)=>{
    setFormData((prev) => ({ ...prev, password: value }));

    setErrors((prev) => ({ ...prev, password: null }));
  }

  const validateForm = () => {
    const newErrors:ErrorType = {email:null,password:null};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    console.log("Submitted")

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Sign in successful!");
    }, 2000);
  };


  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="h-12 w-12 text-blue-900" />
            <span className="ml-2 text-3xl font-bold text-slate-900">EBS</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-600">
            Sign in to your Enterprise Business Suite
          </p>
        </div>

        {/* Sign In Form */}
        <form className="bg-white rounded-lg shadow-lg border border-slate-200 p-8" onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Email Field */}
            <Input label='Email or Username' placeHolder="abc@gmail.com" onChange={onChangeEmail}/>
            {/* Password Field */}
            <Input label='Password' inputType='password' placeHolder='&*@((@!*(&*(!*(' onChange={onChangePassword}/>

          
            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 text-blue-900 focus:ring-blue-500 border-slate-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-slate-600"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="text-blue-900 hover:text-blue-800 font-medium transition-colors"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              loading={loading}
              className="w-full"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-blue-900 hover:text-blue-800 font-medium transition-colors"
              >
                Contact your administrator
              </a>
            </p>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            By signing in, you agree to our{" "}
            <a href="#" className="text-blue-900 hover:text-blue-800">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-900 hover:text-blue-800">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

