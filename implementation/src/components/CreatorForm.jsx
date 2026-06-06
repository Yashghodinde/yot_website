import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitToSheets } from '../utils/submitToSheets';

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal focus:ring-4 focus:ring-teal/10';

export default function CreatorForm() {
  const [status, setStatus] = useState('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await submitToSheets({ type: 'creator', ...data });
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <input className={inputClass} placeholder="Name" {...register('name', { required: true })} />
      <input
        className={inputClass}
        type="email"
        placeholder="Email"
        {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
      />
      <input className={inputClass} type="tel" placeholder="Phone" {...register('phone')} />
      <input className={inputClass} placeholder="Niche / Content type" {...register('niche', { required: true })} />
      <select className={inputClass} {...register('platform', { required: true })}>
        <option value="">Primary platform</option>
        <option value="YouTube">YouTube</option>
        <option value="Instagram">Instagram</option>
        <option value="Both">Both</option>
      </select>
      <input className={inputClass} placeholder="Subscriber / follower count" {...register('followers')} />
      <input className={inputClass} placeholder="Portfolio / channel link" {...register('portfolioLink', { required: true })} />
      {Object.keys(errors).length > 0 && (
        <p className="text-xs font-semibold text-red-600">Please complete the required creator details.</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3.5 text-sm font-bold text-white transition hover:bg-teal-light disabled:opacity-70"
      >
        {isSubmitting || status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
        {isSubmitting || status === 'loading' ? 'Sending...' : 'Join as Creator'}
      </button>
      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <CheckCircle className="mr-2 inline" size={17} /> Application sent.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <AlertCircle className="mr-2 inline" size={17} /> Add the Apps Script URL to enable submissions.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
