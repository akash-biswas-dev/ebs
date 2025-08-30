import React from 'react'


const Stats = () => {

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-blue-200">Active Businesses</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <div className="text-blue-200">Uptime SLA</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500K+</div>
            <div className="text-blue-200">Users Managed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-200">Enterprise Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats