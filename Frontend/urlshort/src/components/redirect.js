import linkDataService from "../services/linkDataService";

const Redirect = () => {
    const shortLink = window.location.href;
    linkDataService
    .getFullLink(shortLink)
    .then((response) => {
        console.log(response.data)
        window.location.replace(response.data);
    })
    
    
   return (
    <>
        
    </>
   ) 
};

export default Redirect;