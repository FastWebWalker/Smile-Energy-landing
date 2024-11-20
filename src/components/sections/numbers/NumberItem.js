export default function NumberItem({ title, description, className }) {
  return (
    <div
      className={`flex flex-col gap-4 max-w-[279px] justify-center ${className}`}>
      <h2 className="lg:text-[80px] md:text-[40px] text-[34px] text-white">
        {title}
      </h2>
      <p className="text-white max-w-[196px] sm:text-[16px] text-[12px]">
        {description}
      </p>
    </div>
  );
}
