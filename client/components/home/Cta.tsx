
const Cta = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business Operations?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands of enterprises already using EBS to streamline their
          operations and boost productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
            Create Your First Business Space
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta