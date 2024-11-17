import ContentContainer from "../../UI/ContentContainer";
import Title from "../../UI/Title";
import ChooseItem from "./ChooseItem";
import one from "../../../images/sections/choose/1.svg";
import two from "../../../images/sections/choose/2.svg";
import three from "../../../images/sections/choose/3.svg";
import four from "../../../images/sections/choose/4.svg";

export default function ChooseSection() {
  return (
    <section className="relative bg-white py-[104px]">
      <span className="absolute w-[0.5px] bg-redCustom h-[100%] top-0 left-[50%] opacity-[20%]"></span>
      <span className="absolute w-[50%] bg-redCustom h-[0.5px] top-[55px] left-[50%] opacity-[20%]"></span>
      <span className="absolute w-[50%] bg-redCustom h-[0.5px] bottom-[55px] left-0 opacity-[20%]"></span>
      <ContentContainer>
        <Title className="mb-[46px]">why choose us?</Title>
        <div className="grid grid-cols-2 gap-x-[125px] gap-y-[63px]">
          <ChooseItem
            image={one}
            title="Innovative Dental Solutions"
            description="Stay ahead of the curve with cutting-edge technologies and innovative techniques. Our team continually researches the latest advancements in dental technology to provide high-quality, long-lasting solutions for dental laboratories, implantology, and prosthetics."
          />
          <ChooseItem
            image={two}
            title="Proven Expertise and Experience"
            description="With years of industry experience, Smile Energy Group has built a reputation for excellence. Our specialists have extensive knowledge in dental prosthetics and implants, ensuring that each solution is tailored to the specific 
needs of the patient."
          />
          <ChooseItem
            image={three}
            title="Personalized Client Support"
            description="We believe in providing exceptional customer service, offering personalized solutions and continuous support to every client. Our dedicated team works closely with dental professionals to meet their specific requirements, whether it's providing advanced prosthetics on complex implant procedures."
          />
          <ChooseItem
            image={four}
            title="Comprehensive Range of Services"
            description="Smile Energy Group offers a complete range of services. Our multidisciplinary approach ensures that we can handle every aspect of dental care, making us your one-stop solution for all needs related to dental laboratories, implants, and orthopedic prostheses."
          />
        </div>
      </ContentContainer>
    </section>
  );
}
