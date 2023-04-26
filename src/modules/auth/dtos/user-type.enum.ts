import { registerEnumType } from "@nestjs/graphql";

export enum UserType {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  AGENT = 'agent',
}

