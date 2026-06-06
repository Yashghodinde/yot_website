import { useCountUp } from '../hooks/useCountUp';

export default function StatCounter({ number, suffix = '', label, textValue }) {
  const numeric = typeof number === 'number';
  const { count, ref } = useCountUp(numeric ? number : 0);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-extrabold text-teal md:text-6xl">
        {numeric ? count : textValue || number}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-semibold text-slate-500 md:text-base">{label}</p>
    </div>
  );
}
