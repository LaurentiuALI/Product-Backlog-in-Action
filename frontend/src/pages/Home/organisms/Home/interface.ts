import { type AxiosError, type AxiosResponse } from "axios";

interface IData {
  error: string;
}

interface Response extends AxiosResponse {
  data: IData;
}

export interface IAxiosError extends AxiosError {
  response: Response;
}
