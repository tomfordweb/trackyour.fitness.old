import { NextPage } from "next";
import { CalculatorList } from "../../component/calculator-list";
import { BODYFAT_CALCULATORS } from "../../lib/constant";
import { CalculatorLink } from "../../lib/interface";

const BodyfatCalculators: NextPage = () => {
  const calculators: CalculatorLink[] = BODYFAT_CALCULATORS;

  return (
    <div>
      <CalculatorList calculators={calculators} />
    </div>
  );
};

export default BodyfatCalculators;
