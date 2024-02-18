import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async createUser(body: any) {
    try {
      const { email, password, role } = body;
      const saltRounds = 10;
      let passwordHash = await bcrypt.hash(password, saltRounds);
      const newUser = this.repository.create({
        email,
        password: passwordHash,
        role,
      });
      let user = await this.repository.save(newUser);
      return user;
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  async findUser(email: string) {
    return await this.repository.findOne({ where: { email } });
  }

  async comparePasswords(password: string, passwordHash: string) {
    const isMatch = await bcrypt.compare(password, passwordHash);
    return isMatch;
  }
}
