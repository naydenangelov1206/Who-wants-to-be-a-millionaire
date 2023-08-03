import "./SettingsScreen.css";

import { categoryOptions, difficultyOptions } from "../../utils/options";
import SelectDifficultyOption from "../SelectOption/SelectDifficultyOption";
import SelectCategoryOption from "../SelectOption/SelectCategoryOption";
import { useState } from "react";

const SettingsScreen = ({ setSettingsScreen, setStartGame }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value);
  };

  const handleDifficultyChange = e => {
    setSelectedDifficulty(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (selectedCategory === "" || selectedDifficulty === "") {
      return alert("You need too choose category and difficulty");
    }

    setSelectedCategory("");
    setSelectedDifficulty("");

    setStartGame(true);
  };

  return (
    <div className="settingsContainer">
      <div className="cancelButtonContainer">
        <button onClick={() => setSettingsScreen(false)}>❌</button>
      </div>

      <form className="optionsContainer" onSubmit={handleSubmit}>
        <div className="settingsTextContainer">
          <p>Settings</p>
        </div>
        <label htmlFor="category">
          Category:
          <select
            name="category"
            id="category"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="">Select Category</option>
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
          <select
            name="difficulty"
            id="difficulty"
            onChange={handleDifficultyChange}
            value={selectedDifficulty}
          >
            <option value="">Select Difficulty</option>
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
