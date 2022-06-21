export const url = "http://52.221.214.193:8080/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "authorization": localStorage.getItem("token"),
    },
  };

  return headers;
};