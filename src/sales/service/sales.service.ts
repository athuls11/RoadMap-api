import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sales } from '../model/sales.entity';
import { CreateSalesDto } from '../dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sales)
    private readonly salesRepository: Repository<Sales>,
  ) {}

  async create(sales: CreateSalesDto): Promise<Sales> {
    return await this.salesRepository.save(sales);
  }

  async findAll(): Promise<Sales[]> {
    return await this.salesRepository.find();
  }

  async findOne(id: number): Promise<Sales> {
    return await this.salesRepository.findOneBy({ id });
  }

  async update(id: number, sales: Sales): Promise<Sales> {
    await this.salesRepository.update(id, sales);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.salesRepository.delete(id);
  }

  async searchItem(itemName: string): Promise<Sales | undefined> {
    return this.salesRepository.findOneBy({ itemName });
  }
}
