import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  AlertCircle,
  Phone
} from 'lucide-react';

export const Contact: React.FC = () => {
  const initialFormData = {
    name: '',
    email: '',
    company: '',
    consultationType: 'Full-Time Business Analyst / Product Specialist Role',
    timeline: 'Immediate (Next 1-2 weeks)',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const consultationTypes = [
    'Full-Time Business Analyst / Product Specialist Role',
    'Salesforce CTMS & Healthcare SaaS Advisory',
    'AI-Assisted Product Discovery & Prototyping',
    'PRD / BRD & User Story Specification',
    'General Inquiry & Collaboration'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide a brief message or opportunity details';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'd9416707-0e2f-4f82-affc-ef47e1862016',
          subject: `Portfolio Inquiry from ${formData.name} (${formData.company.trim() || 'Direct'})`,
          from_name: 'Portfolio Inquiry',
          topic: formData.consultationType,
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || 'Direct / Individual',
          timeline: formData.timeline,
          message: formData.message.trim()
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData(initialFormData);
        setErrors({});

        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setSubmitError(result.message || 'Unable to submit your message right now. Please try again or email directly.');
      }
    } catch {
      setSubmitError('Network error while connecting to the contact service. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Discuss Product Opportunities & Collaborations
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you are looking for a Business Analyst to drive discovery and delivery for B2B SaaS platforms, Salesforce ecosystems, or AI-assisted product workflows—I'm excited to connect.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 flex items-center gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                  <a href="mailto:nikhildzade@outlook.com" className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-500 transition-colors">
                    nikhildzade@outlook.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 flex items-center gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Phone & WhatsApp</div>
                  <a href="tel:+917066720542" className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-500 transition-colors">
                    +91-7066720542
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 flex items-center gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location & Relocation</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Hyderabad, Telangana, India &bull; Open to Hybrid / Remote
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantee Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-brand-500/5 to-transparent border border-indigo-500/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Value Delivery Focus</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Dedicated to bridging the gap between business vision and developer execution with high empathy, clear documentation, and rapid AI-assisted prototyping.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-xl relative">
              
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Transmitted!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    Thank you! Your message has been sent successfully. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError(null);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Direct Message & Inquiry
                    </h3>
                    <span className="text-xs text-slate-400">* Required fields</span>
                  </div>

                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold">{submitError}</p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400">
                          If the problem persists, please email me directly at{' '}
                          <a href="mailto:nikhildzade@outlook.com" className="font-semibold text-brand-600 dark:text-brand-400 underline">
                            nikhildzade@outlook.com
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Consultation Type Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                      Discussion Topic / Role *
                    </label>
                    <select
                      value={formData.consultationType}
                      onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                    >
                      {consultationTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma / Hiring Manager"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border ${
                          errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-white/10 focus:ring-brand-500'
                        } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-white/10 focus:ring-brand-500'
                        } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Timeline Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                      >
                        <option value="Immediate (Next 1-2 weeks)">Immediate (Next 1-2 weeks)</option>
                        <option value="Within 30 days">Within 30 days</option>
                        <option value="Upcoming Quarter">Upcoming Quarter</option>
                        <option value="Exploratory Discussion">Exploratory Discussion</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                      Message & Requirements *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Outline role expectations, product focus, or project details..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-white/10 focus:ring-brand-500'
                      } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
