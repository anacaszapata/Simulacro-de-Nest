import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  convert(id: number) {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
