import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-500 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Enterprise Business Suite
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The all-in-one platform for managing your enterprise operations.
            Create business spaces, manage teams, control permissions, and
            streamline operations with enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero