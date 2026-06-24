import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortUrlController } from './short-url/short-url.controller';

@Module({
  imports: [],
  controllers: [AppController, ShortUrlController],
  providers: [AppService],
})
export class AppModule {}
