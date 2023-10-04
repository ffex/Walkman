import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TodoItemService } from "./todoItem.service";
import { TodoItemControllerBase } from "./base/todoItem.controller.base";

@swagger.ApiTags("todoItems")
@common.Controller("todoItems")
export class TodoItemController extends TodoItemControllerBase {
  constructor(
    protected readonly service: TodoItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
