import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TodoListModuleBase } from "./base/todoList.module.base";
import { TodoListService } from "./todoList.service";
import { TodoListController } from "./todoList.controller";
import { TodoListResolver } from "./todoList.resolver";

@Module({
  imports: [TodoListModuleBase, forwardRef(() => AuthModule)],
  controllers: [TodoListController],
  providers: [TodoListService, TodoListResolver],
  exports: [TodoListService],
})
export class TodoListModule {}
