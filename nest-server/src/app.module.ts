import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ItemsModule } from './items/items.module';
import { LoggerModule } from './logger/logger.module'

@Module({
  imports: [TypeOrmModule.forRoot(), ItemsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
