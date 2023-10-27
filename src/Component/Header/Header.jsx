import classes from "./Header.module.css";
import HighlightIcon from "@mui/icons-material/Highlight";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>
        <HighlightIcon fontSize="medium" />
        ToDoList
      </h1>
    </div>
  );
};
export default Header;
