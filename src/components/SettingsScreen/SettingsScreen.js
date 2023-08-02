import "./SettingsScreen.css";

import SelectOption from "../SelectOption/SelectOption";
import { categoryOptions, difficultyOptions } from "../../utils/options";

const SettingsScreen = () => {
  return (
    <div className="settingsContainer">
      <div className="cancelButtonContainer">
        <button>❌</button>
      </div>

      <div className="optionsContainer">
        <label htmlFor="category">
          Category:
          <select name="category" id="category">
            {categoryOptions.map(c => {
              return <SelectOption option={c} />;
            })}
          </select>
        </label>

        <label htmlFor="difficulty">
          Difficulty:
          <select name="difficulty" id="difficulty">
            {difficultyOptions.map(d => {
              return <SelectOption option={d} />;
            })}
          </select>
        </label>
      </div>
    </div>
  );
};

export default SettingsScreen;
