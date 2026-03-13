"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building2,
  Loader2,
} from "lucide-react";
import { getAvailableSlots, createBooking } from "@/lib/api";
import type { AvailableSlot, BookingData } from "@/lib/api";

interface BookingSlotsProps {
  discussionType: string;
  onComplete: (message: string) => void;
  onError: (error: string) => void;
}

export default function BookingSlots({
  discussionType,
  onComplete,
  onError,
}: BookingSlotsProps) {
  const [slots, setSlots] = useState<AvailableSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    mobile: "",
    companyName: "",
    discussionType: discussionType,
    bookingDate: "",
    timeSlot: "",
  });

  useEffect(() => {
    loadSlots();
  }, []);

  const loadSlots = async () => {
    try {
      const data = await getAvailableSlots();
      setSlots(data);
    } catch (error) {
      onError("Failed to load available slots");
    } finally {
      setLoading(false);
    }
  };

  const handleSlotSelect = (date: string, slot: string) => {
    setSelectedDate(date);
    setSelectedSlot(slot);
    setFormData((prev) => ({
      ...prev,
      bookingDate: date,
      timeSlot: slot,
    }));
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createBooking(formData);
      const selectedDay = slots.find((s) => s.date === selectedDate);
      onComplete(
        `✅ Meeting confirmed!\n\n📅 ${selectedDay?.label}\n⏰ ${selectedSlot}\n\nA confirmation has been sent to ${formData.email}`,
      );
    } catch (error) {
      onError(error instanceof Error ? error.message : "Failed to book slot");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (showForm) {
    return (
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-6 border border-secondary/10 shadow-lg max-w-2xl"
      >
        <h3 className="text-xl font-bold text-secondary mb-2">
          Confirm Your Booking
        </h3>
        <p className="text-sm text-highlight mb-4">
          {selectedSlot} on {slots.find((s) => s.date === selectedDate)?.label}
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-secondary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              placeholder="John Doe"
            />
          </div>

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
              placeholder="john@company.com"
            />
          </div>

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
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              <Building2 className="w-4 h-4 inline mr-2" />
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-secondary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              placeholder="ABC Corporation"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="flex-1 px-6 py-3 border border-secondary/20 text-secondary font-semibold rounded-xl hover:bg-secondary/5 transition-colors"
          >
            Back
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Booking...
              </>
            ) : (
              "Confirm Booking"
            )}
          </motion.button>
        </div>
      </motion.form>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 border border-secondary/10 shadow-lg max-w-3xl"
    >
      <h3 className="text-xl font-bold text-secondary mb-4">
        <Calendar className="w-5 h-5 inline mr-2" />
        Select a Time Slot
      </h3>

      <div className="space-y-4">
        {slots.map((day) => (
          <div
            key={day.date}
            className="border border-secondary/10 rounded-xl p-4"
          >
            <h4 className="font-semibold text-secondary mb-3">{day.label}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {day.slots.length > 0 ? (
                day.slots.map((slot) => (
                  <motion.button
                    key={slot.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSlotSelect(day.date, slot.slot_label)}
                    className="px-4 py-2 border border-primary/30 hover:border-primary hover:bg-primary/5 rounded-lg text-sm font-medium text-secondary transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Clock className="w-4 h-4" />
                    {slot.slot_label}
                  </motion.button>
                ))
              ) : (
                <p className="col-span-full text-sm text-highlight italic">
                  No slots available
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
