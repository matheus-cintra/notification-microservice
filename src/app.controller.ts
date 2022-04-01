import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('appointments')
  async notificate(@Payload() data: any): Promise<any> {
    console.warn('notificate-appointment', data);

    return data;
  }
}
