import { GraphqlService } from '@config/graphql/graphql.service';
import { HttpExceptionFilter } from '@config/http-exception.filter';
import { databaseConfig } from '@config/typeorm.config';
import { ApolloDriver } from '@nestjs/apollo';
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import { join } from 'path';
<<<<<<< HEAD
import { TodosModule } from './todos/todos.module';
import { SubjectModule } from './subject/subject.module';
import { SubjectMappingModule } from './subject_mapping/subject_mapping.module';
=======
import { TodosModule } from '../todos/module/todos.module';
import { UserModule } from './auth/module/users.module'; 
import { CookieParserMiddleware } from '@nest-middlewares/cookie-parser';
>>>>>>> 9a63d1a4441a897612cbb9081111381c90d3eea6

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GraphqlService,
    }),
    TypeOrmModule.forRoot(databaseConfig),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: join(__dirname, '../lang/'),
      },
    }),
    TodosModule,
    SubjectModule,
    SubjectMappingModule,
    
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
<<<<<<< HEAD
export class AppModule {}
export { TodosModule };
=======
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CookieParserMiddleware).forRoutes('*');
  }
}
>>>>>>> 9a63d1a4441a897612cbb9081111381c90d3eea6
