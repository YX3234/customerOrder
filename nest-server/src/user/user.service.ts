import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.createTime = createUserDto.updateTime = new Date();
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto, res:Response) {
    updateUserDto.updateTime = new Date();
    console.log('upload-patch', updateUserDto);
    await this.userRepository.update(id, updateUserDto)
    return res.headers;
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
