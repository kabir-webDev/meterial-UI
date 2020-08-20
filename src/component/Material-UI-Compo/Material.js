import React from "react";
import { Button, Typography, makeStyles } from "@material-ui/core";
import Card from "../Material-UI-Compo/Card";

const useStyles = makeStyles({
  font: {
    color: "tomato",
    fontStyle: "oblique",
    marginBottom: "25px",
  },
});

function Material() {
  const puku = useStyles();
  return (
    <div>
      <br />
      <Typography className={puku.font} color="secondary" variant="h3">
        This is material ui test
      </Typography>
      <Button color="primary" variant="outlined">
        Add Product
      </Button>{" "}
      <br />
      <br />
      <Card
        title="Boss of the bosses"
        details="Professional React and React native developer. Who is passionate
              doing creative things... boooom"
      />
    </div>
  );
}

export default Material;
