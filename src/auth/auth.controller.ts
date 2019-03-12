import { Controller, Get, Req, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private authService: AuthService) {}

    @Get('/redirect')
    async redirect(@Req() request) {
        this.logger.log('*Redirect*');
        return this.authService.oauth(request);
    }
}
