import { Building2, FolderKanban, MessageSquare, Package, Shield, Users } from 'lucide-react';
import React from 'react'

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: "Business Spaces",
      description: "Create dedicated workspaces for your organization with complete isolation and customization."
    },
    {
      icon: Users,
      title: "Branch Management",
      description: "Organize your business across multiple branches with seamless employee assignment and oversight."
    },
    {
      icon: Shield,
      title: "Advanced Permissions",
      description: "Enterprise-grade IAM system with granular permissions and role-based access control."
    },
    {
      icon: Package,
      title: "Inventory Control",
      description: "Comprehensive inventory management system with real-time tracking and analytics."
    },
    {
      icon: FolderKanban,
      title: "Project Management",
      description: "Streamline your projects with advanced planning, tracking, and collaboration tools."
    },
    {
      icon: MessageSquare,
      title: "Team Collaboration",
      description: "Built-in chat, video calls, and group communication for seamless teamwork."
    }
  ];

  
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Powerful Features for Modern Enterprises
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            EBS provides everything you need to manage your enterprise
            operations efficiently and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200"
              >
                <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features