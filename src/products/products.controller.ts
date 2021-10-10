import {
  Controller,
  Body,
  Param,
  Post,
  Put,
  Get,
  Delete,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/products.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    this.productsService.create(createProductDto);
  }

  @Put(':id')
  async update(
    @Body() createProductDto: CreateProductDto,
    @Param('id') id: string,
  ) {
    this.productsService.update(createProductDto, id);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.productsService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.productsService.delete(id);
  }
}
