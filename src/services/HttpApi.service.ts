import { api } from "./api";

const Get = async (uri: string, filter?: string) => {
  return await api.get(uri, {
    params: { "Filters[orderBy]": filter },
  });
};

export const HttpApiService = { Get };
