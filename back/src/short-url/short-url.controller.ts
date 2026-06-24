import { Controller, Get, Post } from '@nestjs/common'; //il faut ajouter les methodes ici

@Controller('short-url')
export class ShortUrlController {
    @Post()
    create(): string{
        return "This action adds an url"
    }
    
    @Get()
    findAll(): string{
        return "this action returns last url shortened";
    }
}
