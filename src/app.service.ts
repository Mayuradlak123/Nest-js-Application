import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  sendMessage(): Object {
    return {
      data:[],
      message:"Data Fetched Successfully",
      status:true
    };
  }
}
