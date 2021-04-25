import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpBenchmarkService {
  public urlBase: string = 'http://localhost:5000/Test/';

  constructor(private readonly httpClient: HttpClient) {

  }

  public post(): Promise<any> {
    const body = {
      param: 'test'
    }
    return this.httpClient.post(`${this.urlBase}post`, body).toPromise();
  }

  public get(): Promise<any> {
    return this.httpClient.get(`${this.urlBase}get`).toPromise();
  }
}