import "./SettingsScreen.css";

import SelectOption from "../SelectOption/SelectOption";
import { categoryOptions, difficultyOptions } from "../../utils/options";

const SettingsScreen = ({ setStartGame }) => {
  return (
    <div className="settingsContainer">
      <div className="cancelButtonContainer">
        <button onClick={() => setStartGame(false)}>❌</button>
      </div>

      <div className="optionsContainer">
        <div className="settingsTextContainer">
          <p>Settings</p>
        </div>
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
        <button className="settingsPlayButton">Play</button>
      </div>
    </div>
  );
};

export default SettingsScreen;
