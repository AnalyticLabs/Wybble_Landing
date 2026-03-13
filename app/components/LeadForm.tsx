"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Mail, Phone, Users, Package, Loader2 } from "lucide-react";
import { submitLead } from "@/lib/api";
import type { LeadData } from "@/lib/api";

interface LeadFormProps {
  onComplete: (message: string) => void;
  onError: (error: string) => void;
}

export default function LeadForm({ onComplete, onError }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadData>({
    companyName: "",
    industry: "",
    numUsers: "",
    productInterested: "",
    email: "",
    mobile: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitLead(formData);
      onComplete(
        `✅ Thank you! Our team will reach out to you at ${formData.email} within 24 business hours.`,
      );
    } catch (error) {
      onError(error instanceof Error ? error.message : "Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 border border-secondary/10 shadow-lg max-w-2xl"
    >
      <h3 className="text-xl font-bold text-secondary mb-4">
        Share Your Details
      </h3>
      <p className="text-sm text-highlight mb-6">
        Help us understand your requirements better
      </p>

      <div className="space-y-4">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">
            <Building2 className="w-4 h-4 inline mr-2" />
            Company Name *
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-secondary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            placeholder="ABC Corporation"
          />
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">
            Industry
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-secondary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          >
            <option value="">Select industry</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Construction">Construction & Infrastructure</option>
            <option value="Government">Government & PSU</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Services">Service-based</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Number of Users */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">
            <Users className="w-4 h-4 inline mr-2" />
            Number of Users
          </label>
          <select
            name="numUsers"
            value={formData.numUsers}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-secondary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          >
            <option value="">Select range</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="101-500">101-500</option>
            <option value="500+">500+</option>
          </select>
        </div>

        {/* Product Interested */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">
            <Package className="w-4 h-4 inline mr-2" />
            Product Interested In
          </label>
          <select
            name="productInterested"
            value={formData.productInterested}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-secondary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          >
            <option value="">Select product</option>
            <option value="ERP Solution">ERP Solution</option>
            <option value="Society Management System">
              Society Management System
            </option>
            <option value="HRMS">HRMS</option>
            <option value="Custom Software">Custom Software Development</option>
            <option value="Multiple">Multiple Products</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-secondary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            placeholder="you@company.com"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Mobile Number *
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[6-9]\d{9}"
            className="w-full px-4 py-2.5 border border-secondary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            placeholder="9876543210"
          />
          <p className="text-xs text-highlight mt-1">
            10-digit Indian mobile number
          </p>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">
            Additional Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2.5 border border-secondary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
            placeholder="Any specific requirements or questions?"
          />
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Details"
        )}
      </motion.button>
    </motion.form>
  );
}
