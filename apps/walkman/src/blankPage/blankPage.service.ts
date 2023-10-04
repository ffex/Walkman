import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlankPageServiceBase } from "./base/blankPage.service.base";

@Injectable()
export class BlankPageService extends BlankPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
