import { useEffect, useState } from "react";
import linkDataService from "../services/linkDataService";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

const EnterLink = () => {
  const [fullLink, setFullLink] = useState("Enter your link here!");
  const [shortened, setShortened] = useState(null);
  const [shortLink, setShortLink] = useState("");

  const submitLink = () => {
    var data = {
      full: fullLink,
    };
    linkDataService
      .createLink(data)
      .then((response) => {
        console.log(response.data);
        setShortLink(response.data.replace("3", "4"));
      })
      .catch((e) => {});
    setShortened(true);
  };

  const onCopy = () => {
    navigator.clipboard.writeText(shortLink);
  };

  return (
    <>
      <Grid container rowSpacing={3} columns={1}>
        <Grid xs={3}>
          <p>URL-SHORT</p>
        </Grid>
        {shortened ? (
          <Grid xs={3}>
            <TextField
              id="outlined-basic"
              value={shortLink}
              variant="outlined"
            ></TextField>
            <Button variant="contained" onClick={onCopy}>
              Copy to Clipboard
            </Button>
          </Grid>
        ) : (
          <Grid xs={3}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Enter Your Link"
              onChange={(e) => setFullLink(e.target.value)}
            ></TextField>
            <Button variant="contained" onClick={submitLink}>
              Shorten Link!
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default EnterLink;
