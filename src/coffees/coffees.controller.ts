import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `this action return all coffees. Limit: ${limit}, Offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action return #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return body;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action delete #${id}`;
  }
}
