import styles from "./StartScreen.module.css";

const StartScreen = () => {
  return (
    <div className={styles.startScreenContainer}>
      <div className={styles.backgroundContainer}>
        <div className={styles.backgroundImage}></div>
      </div>
      <button className={styles.startButton}>Start Game</button>
    </div>
  );
};

export default StartScreen;
