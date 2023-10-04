import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlankPageModuleBase } from "./base/blankPage.module.base";
import { BlankPageService } from "./blankPage.service";
import { BlankPageController } from "./blankPage.controller";
import { BlankPageResolver } from "./blankPage.resolver";

@Module({
  imports: [BlankPageModuleBase, forwardRef(() => AuthModule)],
  controllers: [BlankPageController],
  providers: [BlankPageService, BlankPageResolver],
  exports: [BlankPageService],
})
export class BlankPageModule {}
