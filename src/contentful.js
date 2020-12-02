import { createClient } from "contentful";

export default createClient({
  space: "tbgjni2aa2e9",
  accessToken: process.env.REACT_APP_API_KEY,
});
