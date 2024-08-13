const local_String = "http://localhost:4000/";
const Production_String =
  "https://saa306kjc7.execute-api.ap-south-1.amazonaws.com/Prod/";

const getBaseUrl = () => {
  return local_String;
};

export default getBaseUrl;
