import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacultyModule } from './faculty/faculty.module';
import { AthletesModule } from './athletes/athletes.module';
import { PersonModule } from './person/person.module';
import { SportsModule } from './sports/sports.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [FacultyModule, AthletesModule, PersonModule, SportsModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
