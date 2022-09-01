import { api } from "./api";

const Get = async (uri: string, filter?: string) => {
  return await api.get(uri, {
    params: { "Filters[orderBy]": filter },
  });
};

const GetDetails = async (shortName: string) => {
  return await api.get(`${shortName}/details`);
};

export const HttpApiService = { Get, GetDetails };
