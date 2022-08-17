import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "../layout.scss";
const LayoutLink = ({ children, href }) => {
  return (
    <Link to={href} className="link">
      <Stack direction={"row"} alignItems="center" spacing={1} fontSize={18}>
        {children}
      </Stack>
    </Link>
  );
};

export default LayoutLink;
