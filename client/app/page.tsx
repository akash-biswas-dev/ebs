
import Benifits from '@/components/home/Benifits';
import Cta from '@/components/home/Cta';
import Features from '@/components/home/Features';
import Footer from '@/components/home/Footer';
import Hero from '@/components/home/Hero';
import Navbar from '@/components/home/Navbar';
import Stats from '@/components/home/Status';

const EBSHomepage = () => {

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <Hero/>

      {/* Features Section */}
      <Features/>

      {/* Stats Section */}
      <Stats/>

      {/* Benefits Section */}
      <Benifits/>

      {/* CTA Section */}
      <Cta/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default EBSHomepage;
