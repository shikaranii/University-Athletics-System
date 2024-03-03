import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SportsModule } from './sports/sports.module';
import { EventsModule } from './events/events.module';
// import { StudentsController } from './student/students.controller';
// import { StudentModule } from './student/student.module';
import { PrismaModule } from './prisma/prisma.module';
import { StudentModule } from './student/student.module';


@Module({
  // imports: [ SportsModule, EventsModule, StudentModule],

  imports: [ PrismaModule, StudentModule, EventsModule, SportsModule],
  controllers: [AppController]
  ,
  providers: [AppService],
})
export class AppModule {}
