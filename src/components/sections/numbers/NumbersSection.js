import ContentContainer from "../../UI/ContentContainer";
import NumberItem from "./NumberItem";

export default function NumbersSection() {
  return (
    <section className="relative bg-[#111111] py-[90px]">
      <ContentContainer className="flex justify-between gap-36">
        <NumberItem
          title="80+"
          description="Years of experience in orthopedic dentistry"
        />
        <NumberItem title="3500+" description="Successfully executed cases" />
        <NumberItem title="60+" description="Partners who cooperate with us" />
        <NumberItem title="1500+" description="Satisfied customers" />
      </ContentContainer>
    </section>
  );
}
