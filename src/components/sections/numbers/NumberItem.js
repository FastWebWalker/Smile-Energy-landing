export default function NumberItem({ title, description }) {
  return (
    <div className="flex flex-col gap-4 max-w-[279px]">
      <h2 className="text-[80px] text-white">{title}</h2>
      <p className="text-white max-w-[196px]">{description}</p>
    </div>
  );
}
