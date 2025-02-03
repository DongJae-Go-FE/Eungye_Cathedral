import queryRequest from "@/utils/queryRequest";
import { RequestGetListType } from "@/type";

export type ListParamsType = {
  page?: string;
  limit?: string;
  search?: string;
};

class getList extends queryRequest {
  getNews({ page, limit, search }: ListParamsType) {
    return this.http.get<RequestGetListType>(
      `/news?page=${page}&limit=${limit}&q=${search}`,
    );
  }

  getNotices({ page, limit, search }: ListParamsType) {
    return this.http.get<RequestGetListType>(
      `/notices?page=${page}&limit=${limit}&q=${search}`,
    );
  }

  getWeeklys({ page, limit, search }: ListParamsType) {
    return this.http.get<RequestGetListType>(
      `/weeklys?page=${page}&limit=${limit}&q=${search}`,
    );
  }
}

export default new getList();
