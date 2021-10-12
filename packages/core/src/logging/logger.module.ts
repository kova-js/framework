// import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
// import { LoggerApiController } from './api.controller'
// import { LoggerApiService } from './api.service'
import { LoggerCoreModule } from './logger-core.module'

@Module({
  imports: [LoggerCoreModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class LoggerModule {}
