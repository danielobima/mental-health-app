import { Stack, Typography } from "@mui/material";
import { skobeloff } from "../../../utilities/themes";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import "./doc_home_page.scss";

const DocHomePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function onChange(nextValue) {
    setSelectedDate(nextValue);
  }
  const [anim, setAnim] = useState(false);
  const [session /*,setSession*/] = useState(true);
  const [starting /*,setSession*/] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      <Stack width={"60%"} maxHeight={"100%"} pt="5vh" pl="5vh">
        <Typography variant="h4" color={skobeloff} fontWeight={600}>
          Welcome Dr Sarah
        </Typography>
        <Calendar
          tileClassName={"tile"}
          value={selectedDate}
          onChange={setSelectedDate}
        />
      </Stack>
    </Stack>
  );
};
export default DocHomePage;
