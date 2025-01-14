import { Module } from '@nestjs/common';
import { ClockService } from './clock.service';
import { ClockController } from './clock.controller';
import { AppConfigModule } from 'src/config/config.module';

@Module({
  imports: [AppConfigModule],
  controllers: [ClockController],
  providers: [ClockService],
})
export class ClockModule {}
