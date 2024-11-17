export default function ChooseItem({ image, title, description }) {
  return (
    <div className="relative z-1 flex justify-center items-center">
      <div className="absolute top-0 left-0 z-1">
        <img src={image} alt={title} />
      </div>
      <div className="relative ml-[87px] bg-white p-3">
        <h3 className="font-normal text-[32px] bg-white leading-tight uppercase mb-[20px] max-w-[350px]">
          {title}
        </h3>
        <p className="text-[#191919E5]">{description}</p>
      </div>
    </div>
  );
}
