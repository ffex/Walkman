import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TodoListServiceBase } from "./base/todoList.service.base";

@Injectable()
export class TodoListService extends TodoListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
