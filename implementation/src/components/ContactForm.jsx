import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Loader2, Send, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitToSheets } from '../utils/submitToSheets';

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal focus:ring-4 focus:ring-teal/10';

export default function ContactForm({ defaultService = '', compact = false }) {
  const [status, setStatus] = useState('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      service: defaultService
    }
  });

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await submitToSheets({ type: 'contact', ...data });
      setStatus('success');
      reset({ service: defaultService });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={compact ? '' : 'rounded-2xl border border-slate-200 bg-white p-6 shadow-md md:p-8'}>
      {!compact && (
        <div className="mb-6 text-center">
          <span className="section-label">Contact</span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900">Tell us about your project</h2>
        </div>
      )}
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className={inputClass}
            placeholder="Your name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="mt-1 text-xs font-semibold text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <input
            className={inputClass}
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' }
            })}
          />
          {errors.email && <p className="mt-1 text-xs font-semibold text-red-600">{errors.email.message}</p>}
        </div>
        <input className={inputClass} type="tel" placeholder="Phone (optional)" {...register('phone')} />
        <select className={inputClass} {...register('service')}>
          <option value="">Select a service</option>
          <option value="Video Editing">Video Editing</option>
          <option value="Designing">Designing</option>
          <option value="Website">Website & Support</option>
          <option value="Creator Outreach">Creator Outreach</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          className={`${inputClass} min-h-32 resize-y`}
          placeholder="Tell us about your project"
          rows={4}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <p className="-mt-2 text-xs font-semibold text-red-600">{errors.message.message}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3.5 text-sm font-bold text-white transition hover:bg-teal-light disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting || status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
          {isSubmitting || status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <CheckCircle size={17} /> We'll get back to you within 24 hours.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <AlertCircle size={17} /> Add the Apps Script URL to enable Google Sheets submissions.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
