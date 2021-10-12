import { Module, OnModuleInit } from "@nestjs/common";
import { HttpAdapterHost } from '@nestjs/core'

@Module({})
export class CoreModule implements OnModuleInit {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    // private readonly loader: AbstractLoader,
    // @Inject(CONFIG_TOKEN)
    // private readonly adminModuleOptions: AdminModuleOptions,
  ) {}

  public onModuleInit() {

  }
}