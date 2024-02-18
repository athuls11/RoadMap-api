import { Module } from '@nestjs/common';
import { SalesController } from './controller/sales.controller';
import { SalesService } from './service/sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sales } from './model/sales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sales])],
  controllers: [SalesController],
  providers: [SalesService],
  exports: [SalesService],
})
export class SalesModule {}
