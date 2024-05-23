import { useEffect, useState } from "react";
import linkDataService from "../services/linkDataService";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

const EnterLink = () => {
  const [fullLink, setFullLink] = useState("Enter your link here!");
  const [shortened, setShortened] = useState(null);
  const [shortLink, setShortLink] = useState("");
  const [placeholder, setPlaceHolder] = useState("")

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
      <Box display="flex" justifyContent={"center"} alignItems={"center"}>
        <p>URL-SHORT</p>
      </Box>

      {shortened ? (
        <Box 
        display="flex" 
        justifyContent={"center"} 
        alignItems={"center"}
        >
          <TextField
            id="outlined-basic"
            value={shortLink}
            variant="outlined"
          ></TextField>
          <Button variant="contained" onClick={onCopy}>
            Copy to Clipboard
          </Button>
        </Box>
      ) : (
        <Box display="flex" justifyContent={"center"} alignItems={"center"}
        borderRadius={'100px'}
        bgcolor={'#E1F7F5'}
        width={'50%'}
        ml={'25%'}
        mt={'10%'}
        >
          <TextField
            id="standard-basic"
            variant="standard"
            label="Enter Your Link"
            onChange={(e) => setFullLink(e.target.value)}
            fullWidth
            margin="dense"
            InputProps={{disableUnderline: true,}}
            InputLabelProps={{shrink: false,}}
            style={{
              marginLeft: '1em',
              marginBottom: '1em'
            }}
          ></TextField>
          <Button variant="contained" onClick={submitLink}
          
          >
            Shorten Link!
          </Button>
        </Box>
      )}
    </>
  );
};

export default EnterLink;
