import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { SalesService } from '../service/sales.service';
import { Sales } from '../model/sales.entity';
import { CreateSalesDto } from '../dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() sales: CreateSalesDto): Promise<Sales> {
    console.log('sales', sales);
    return this.salesService.create(sales);
  }

  @Get()
  findAll(): Promise<Sales[]> {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sales> {
    return this.salesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() sales: Sales): Promise<Sales> {
    return this.salesService.update(+id, sales);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.salesService.remove(+id);
  }

  @Get('search/:itemName')
  searchItem(@Param('itemName') itemName: string): Promise<Sales | undefined> {
    return this.salesService.searchItem(itemName);
  }
}
