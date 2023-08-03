import { indexesForCategoryValues } from "../../utils/options";

const SelectCategoryOption = ({ option, index }) => {
  return <option value={indexesForCategoryValues[index]}>{option}</option>;
};

export default SelectCategoryOption;
