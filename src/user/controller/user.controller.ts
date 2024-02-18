import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Logger,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { AuthService } from 'src/auth/service/auth.service';

@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  @HttpCode(201)
  async createUser(@Body() body: any) {
    try {
      let user = await this.userService.findUser(body.email);
      if (user) {
        throw new HttpException(
          {
            success: false,
            message: 'User with given email already exists.',
            statusCode: HttpStatus.CONFLICT,
          },
          HttpStatus.CONFLICT,
        );
      }
      await this.userService.createUser(body);
      return {
        success: true,
        message: 'User registered successfully.',
        statusCode: HttpStatus.CREATED,
      };
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw error;
    }
  }

  @Post('login')
  @HttpCode(200)
  async loginUser(@Body() body: any) {
    try {
      let user = await this.userService.findUser(body.email);
      if (!user) {
        throw new HttpException(
          {
            success: false,
            message: 'Incorrect email.',
            statusCode: HttpStatus.UNAUTHORIZED,
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
      let ismatch: boolean = await this.userService.comparePasswords(
        body.password,
        user.password,
      );
      if (!ismatch) {
        throw new HttpException(
          {
            success: false,
            message: 'Incorrect password.',
            statusCode: HttpStatus.UNAUTHORIZED,
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
      let accessToken = await this.authService.generateAccessToken(
        user.email,
        user.id,
      );
      return {
        success: true,
        message: 'You are signed in successfully.',
        statusCode: HttpStatus.OK,
        accessToken,
      };
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw error;
    }
  }
}
