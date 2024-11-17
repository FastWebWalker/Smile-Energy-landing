export default function Title({ children, className }) {
  return (
    <h2
      className={`font-normal text-[54px] leading-[65.35px] uppercase tracking-wide ${className}`}>
      {children}
    </h2>
  );
}
