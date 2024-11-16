import Description from "../../UI/Description";
import HeroTitle from "../../UI/HeroTitle";
import LShape from "../../UI/LShape";
import LShapeReverse from "../../UI/LShapeReverse";

export default function MainTitleBlock() {
  return (
    <div className="flex flex-col relative">
      <LShapeReverse />
      <LShape />
      <div className="flex justify-between items-center">
        <HeroTitle>global leaders</HeroTitle>
        <Description className="max-w-[320px]">
          Unlock the potential of your smile with our advanced solutions for
          dental laboratories, orthopedics and implantology.
        </Description>
      </div>
      <div className="flex justify-center items-center">
        <HeroTitle>and experts</HeroTitle>
      </div>
      <div className="flex justify-between items-center">
        <Description className="max-w-[324px] mt-8">
          Don't waste time!
          <br /> Order a call now and find out all the details.
        </Description>
        <HeroTitle>global leaders</HeroTitle>
      </div>
    </div>
  );
}
