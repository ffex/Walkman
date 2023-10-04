import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlankPageService } from "./blankPage.service";
import { BlankPageControllerBase } from "./base/blankPage.controller.base";

@swagger.ApiTags("blankPages")
@common.Controller("blankPages")
export class BlankPageController extends BlankPageControllerBase {
  constructor(
    protected readonly service: BlankPageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
