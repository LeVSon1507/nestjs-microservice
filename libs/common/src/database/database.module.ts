import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      useFactory(configService: ConfigService) {
        return {
          uri: configService.get('MONGO_URI'),
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
