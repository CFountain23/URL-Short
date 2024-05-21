import { useEffect, useState } from "react";
import linkDataService from "../services/linkDataService";

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
    navigator.clipboard.writeText(shortLink)
  }

  return (
    <>
      {shortened ? (
        <>
          <label>
            <input
              type="text"
              value={shortLink}
            />
          </label>
          <button type="submit" onClick={onCopy}>
            Copy to Clipboard
          </button>
        </>
      ) : (
        <>
          <label>
            <input
              type="text"
              value={fullLink}
              onChange={(e) => setFullLink(e.target.value)}
            />
          </label>
          <button type="submit" onClick={submitLink}>
            Shorten Link!
          </button>
        </>
      )}
    </>
  );
};

export default EnterLink;
