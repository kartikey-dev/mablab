'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    companyName: '',
    calendlyLink: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', number: '', companyName: '', calendlyLink: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
      <FormField
        label="NAME"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <FormField
        label="EMAIL"
        name="email"
        type="email"
        placeholder="email@company.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <FormField
        label="NUMBER"
        name="number"
        type="tel"
        placeholder="phone number"
        value={formData.number}
        onChange={handleChange}
      />
      <FormField
        label="COMPANY NAME"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
      />
      <FormField
        label="CALENDLY LINK"
        name="calendlyLink"
        placeholder="Calendly link"
        value={formData.calendlyLink}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-white para-16 py-3.5 px-6 border-2 border-stroke comic-shadow font-normal! hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer mt-6"
      >
        {isSubmitting ? 'SENDING...' : (<>LET&apos;S TALK! <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z" fill="white" />
        </svg>
        </>)}
      </button>

      {submitStatus === 'success' && (
        <p className="text-green-600 para-14 text-center mt-3">
          Thanks! We&apos;ll be in touch soon.
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="text-danger para-14 text-center mt-3">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={`field-${name}`}
        className="block para-16 text-stroke mb-2"
      >
        {label}
      </label>
      <input
        id={`field-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-[#F8F9FF] border-2 border-stroke para-16 font-normal! comic-shadow-sm text-stroke placeholder:text-[#6B7280] focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
