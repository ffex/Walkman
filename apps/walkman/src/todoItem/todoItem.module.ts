import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TodoItemModuleBase } from "./base/todoItem.module.base";
import { TodoItemService } from "./todoItem.service";
import { TodoItemController } from "./todoItem.controller";
import { TodoItemResolver } from "./todoItem.resolver";

@Module({
  imports: [TodoItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [TodoItemController],
  providers: [TodoItemService, TodoItemResolver],
  exports: [TodoItemService],
})
export class TodoItemModule {}
