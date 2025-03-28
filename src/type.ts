export type RequestFilterListType = {
  page: string;
  limit: string;
  search?: string;
};

export type RequestGetListType = {
  page: string;
  limit: string;
  data: {
    total: number;
    totalPages: number;
    list: {
      id: number;
      title: string;
      content?: string;
      created_at: string;
      imgUrl?: string;
    }[];
  };
};

export type RequestGetDetailType = {
  id: number;
  title: string;
  content?: string;
  created_at: string;
  imgUrl?: string;
};

export type AdjacentType = {
  previous: {
    id?: number | string;
    title: string;
    created_at?: string;
  };
  next: {
    id?: number | string;
    title: string;
    created_at?: string;
  };
};

export type SchoolCardType = {
  title: string;
  contentTitle: string;
  contentInfo: string;
  bgImg?: string;
};
