import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}
  async oauth(req: any): Promise<any> {
    const CLIENT_ID = '6a455673a6b68f3b47ed';
    const CLIENT_SECRET = 'fe080a985a14a5446ccf79703c67b53676f30b71';
    const requestToken = req.query.code;
    const url = `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${requestToken}`;
    const response = await this.httpService.post(url).toPromise();
    return response.data;
  }
}
