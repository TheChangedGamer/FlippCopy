import client from "./client";

const companyEndPoint = "/company/explore";
const companyByLastest = "/company/lastest";

const getListings = () => client.get(companyEndPoint);
const getLastest = () => client.get(companyByLastest);

export default {
  getListings,
  getLastest,
};
