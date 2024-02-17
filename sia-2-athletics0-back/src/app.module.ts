import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { SportsModule } from './sports/sports.module';
import { EventsModule } from './events/events.module';
import { StudentsController } from './student/students.controller';

@Module({
  imports: [PersonModule, SportsModule, EventsModule],
  controllers: [AppController,StudentsController]
  ,
  providers: [AppService],
})
export class AppModule {}
