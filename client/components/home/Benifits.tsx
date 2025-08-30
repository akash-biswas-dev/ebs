import { CheckCircle, Star } from 'lucide-react';
import React from 'react'

const Benifits = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Choose EBS?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Built specifically for enterprise needs with security,
              scalability, and flexibility at its core.
            </p>
            <div className="space-y-4">
              {[
                "Enterprise-grade security and compliance",
                "Scalable architecture for growing businesses",
                "Intuitive interface with minimal learning curve",
                "24/7 dedicated support and onboarding",
                "Flexible pricing for teams of any size",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="text-center">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <blockquote className="text-lg text-slate-700 mb-4">
                "EBS transformed how we manage our multi-branch operations. The
                permission system and collaboration tools have improved our
                efficiency by 40%."
              </blockquote>
              <div className="text-sm text-slate-500">
                Sarah Johnson, CTO at TechCorp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benifits