import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TodoItemServiceBase } from "./base/todoItem.service.base";

@Injectable()
export class TodoItemService extends TodoItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
