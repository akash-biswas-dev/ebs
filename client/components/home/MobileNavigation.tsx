
const MobileNavigation = ({isMenuOpen}:{isMenuOpen:boolean}) => {

  return (
    <>
    
    {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
                <a href="#features" className="block text-slate-600 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                  Features
                </a>
                <a href="#about" className="block text-slate-600 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#pricing" className="block text-slate-600 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                  Pricing
                </a>
                <div className="pt-4 pb-3 border-t border-slate-200">
                  <button className="block w-full text-left text-slate-600 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                    Login
                  </button>
                  <button className="block w-full mt-2 bg-blue-900 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
    </>
  )
}

export default MobileNavigation