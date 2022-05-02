import api from "./../services/api";
const list = () => {
  return api.get("/Frontend/showinfo").then((res) => res.data);
};

const InfoService = {
  list,
};
export default InfoService;
