import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MyModel from "./ImportModel";
import SelectWall from "./Options";

const styles = {
  root: {
    "& .MuiGrid-item": {
      height: "90vh",
      display: "flex",
      alignItems: "center",
    },
    "& .MuiContainer-root": {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    "& div > canvas": {
      alignItems: "center",
      display: "flex !important",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: 10,
      height: "20rem !important",
    },
  },
};

function Scene() {
  const [customRotation, setCustomRotation] = useState(10);

  return (
    <Grid sx={styles.root} container>
      <Grid item xs={12}>
        <Container>
          <MyModel customRotation={customRotation} />
          <SelectWall
            customRotation={customRotation}
            setCustomRotation={setCustomRotation}
          />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Scene;
