import { Injectable } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';
import { PrismaService } from 'src/prisma.service';
import { listURL, Prisma } from '../generated/prisma/client.js';

@Injectable()
export class ShortUrlService {

  constructor(private prisma: PrismaService) {}

  async create(longUrl: string): Promise<listURL> {
    let data: Prisma.listURLCreateInput = {
      long_url: longUrl,
      short_url: ""
    }
    console.log("longURL: "+longUrl)

    return this.prisma.listURL.create({ data })
  }

  findAll() {
    return `This action returns all shortUrl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortUrl`;
  }

  update(id: number, updateShortUrlDto: UpdateShortUrlDto) {
    return `This action updates a #${id} shortUrl`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortUrl`;
  }
}
