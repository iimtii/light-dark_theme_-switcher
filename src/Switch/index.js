import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      ハロー
      <input
        type="checkbox"
        checked={theme === "light"}
        onClick={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
