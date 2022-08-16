import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "../layout.scss";
const LayoutLink = ({ children, href }) => {
  return (
    <Link to={href} className="link">
      <Stack direction={"row"}>{children}</Stack>
    </Link>
  );
};

export default LayoutLink;
