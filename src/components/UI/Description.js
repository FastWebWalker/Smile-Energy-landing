export default function Description({ children, className }) {
  return (
    <p className={`text-white leading-[19.26px] ${className}`}>{children}</p>
  );
}
