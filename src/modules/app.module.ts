import { GraphqlService } from '@config/graphql/graphql.service';
import { HttpExceptionFilter } from '@config/http-exception.filter';
import { databaseConfig } from '@config/typeorm.config';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import { join } from 'path';
import { TodosModule } from './todos/todos.module';
import { SubjectModule } from './subject/subject.module';
import { SubjectMappingModule } from './subject_mapping/subject_mapping.module';

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
export class AppModule {}
