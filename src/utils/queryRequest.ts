interface HTTPInstance {
  get<T>(url: string, config?: RequestInit): Promise<T>;
}

class queryRequest {
  public http: HTTPInstance;

  private baseURL: string;

  private headers: Record<string, string>;

  constructor() {
    this.baseURL = `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}`;
    this.headers = {
      Referer: this.baseURL,
    };

    this.http = {
      get: this.get.bind(this),
    };
  }

  private async request<T = unknown>(
    method: string,
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    try {
      const response = await fetch(this.baseURL + url, {
        method,
        headers: {
          ...this.headers,
          "Content-Type": "application/json",
          ...config?.headers,
        },
        credentials: "include",
        body: data ? JSON.stringify(data) : undefined,
        ...config,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData: T = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  private get<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>("GET", url, undefined, config);
  }
}

export default queryRequest;
