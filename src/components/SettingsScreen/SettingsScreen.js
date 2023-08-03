import "./SettingsScreen.css";

import { categoryOptions, difficultyOptions } from "../../utils/options";
import SelectDifficultyOption from "../SelectOption/SelectDifficultyOption";
import SelectCategoryOption from "../SelectOption/SelectCategoryOption";

const SettingsScreen = ({ setStartGame }) => {
  return (
    <div className="settingsContainer">
      <div className="cancelButtonContainer">
        <button onClick={() => setStartGame(false)}>❌</button>
      </div>

      <form className="optionsContainer">
        <div className="settingsTextContainer">
          <p>Settings</p>
        </div>
        <label htmlFor="category">
          Category:
          <select name="category" id="category">
            {categoryOptions.map((category, index) => {
              return (
                <SelectCategoryOption
                  key={index}
                  option={category}
                  index={index}
                />
              );
            })}
          </select>
        </label>
        <label htmlFor="difficulty">
          Difficulty:
          <select name="difficulty" id="difficulty">
            {difficultyOptions.map((diff, index) => {
              return <SelectDifficultyOption key={index} option={diff} />;
            })}
          </select>
        </label>

        <button type="submit" className="settingsPlayButton">
          Play
        </button>
      </form>
    </div>
  );
};

export default SettingsScreen;
