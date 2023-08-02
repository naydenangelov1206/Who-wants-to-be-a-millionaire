import SelectOption from "../SelectOption/SelectOption";
import { categoryOptions, difficultyOptions } from "../../utils/options";

const SettingsScreen = () => {
  return (
    <div>
      <button>❌</button>

      <label htmlFor="category">
        <select name="category" id="category">
          {categoryOptions.map(c => {
            return <SelectOption option={c} />;
          })}
        </select>

        <select name="difficulty" id="difficulty">
          {difficultyOptions.map(d => {
            return <SelectOption option={d} />;
          })}
        </select>
      </label>
    </div>
  );
};

export default SettingsScreen;
