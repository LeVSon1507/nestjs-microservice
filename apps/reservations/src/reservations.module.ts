import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ConfigModule, DatabaseModule } from '@app/common';
import { ReservationDocument, ReservationSchema } from './models';
import { ReservationsRepository } from './reservations.repository';
import { LoggerModule } from '@app/common/logger';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      {
        name: ReservationDocument.name,
        schema: ReservationSchema,
      },
    ]),
    LoggerModule,
    ConfigModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
