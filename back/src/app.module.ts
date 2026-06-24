import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortUrlController } from './short-url/short-url.controller';
import { ShortUrl2Module } from './short-url2/short-url2.module';
import { ShortUrlModule } from './short-url/short-url.module';

@Module({
  imports: [ShortUrl2Module, ShortUrlModule],
  controllers: [AppController, ShortUrlController],
  providers: [AppService],
})
export class AppModule {}
