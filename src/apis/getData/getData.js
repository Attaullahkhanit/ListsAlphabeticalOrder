import axios from "axios";

const getallAsset = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getallAsset;
