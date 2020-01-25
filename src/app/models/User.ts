export interface User {
  status: string;
  body: {
    name: string;
    email: string;
    news: Array<any>;
  };
}
