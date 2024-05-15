import { useEffect, useState } from "react";
import linkDataService from "../services/linkDataService";

const EnterLink = () => {
     const [fullLink, setFullLink] = useState("Enter your link here!");

    function handleSubmit(e) {
      //TODO maybe remove
      //e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);

      const formJson = Object.fromEntries(formData.entries());
      //console.log(formJson);

    }

    const submitLink = () => {
        var data = {
          full: fullLink,
        };
        linkDataService.createLink(data)
        .then((response) => {
            console.log(response)
        })
        .catch((e) => {});
        console.log(data)
      };

  return (
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
  );
}

export default EnterLink;
