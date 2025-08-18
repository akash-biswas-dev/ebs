import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  template: `
    @for(faq of faqs; track $index) {
    <div class="bg-white p-8 rounded-xl shadow-sm">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">
        {{ faq.query }}
      </h3>
      <p class="text-gray-700 leading-relaxed">
        {{ faq.answer }}
      </p>
    </div>
    }
  `,
})
export class FaqSection {
  protected readonly faqs: Faqs[] = faqs;
}

export type Faqs = {
  query: string;
  answer: string;
};

export const faqs: Faqs[] = [
  {
    query: `What makes EBS different from other ERP systems?`,
    answer: `EBS is designed with modern businesses in mind, 
    offering dynamic workspace management, role-based access control, 
    and AI-powered analytics. Our system is highly 
    customizable and scales with your business growth, 
    whether you're managing one branch or hundreds.`,
  },
  {
    query: 'Can I manage multiple businesses with one EBS account?',
    answer: `Absolutely! EBS workspaces are designed to handle multiple business entities. 
    You can create separate workspaces for different companies, each with their own branches, 
    users, and configurations while managing everything from a single dashboard.`,
  },
  {
    query: 'How secure is my business data in EBS?',
    answer: `Security is our top priority. EBS uses enterprise-grade encryption, 
    role-based access controls, regular security audits, and complies with international data 
    protection standards including GDPR and SOC 2. Your data is hosted on secure cloud infrastructure 
    with 99.9% uptime guarantee.`,
  },
  {
    query: 'Do you provide training and support for new users?',
    answer: `Yes! We offer comprehensive onboarding including video tutorials, live training 
    sessions, detailed documentation, and 24/7 customer support. Our success team works with you 
    to ensure smooth implementation and adoption across your organization.`,
  },
];
