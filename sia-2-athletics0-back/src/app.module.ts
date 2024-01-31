import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacultyModule } from './faculty/faculty.module';
import { AthletesModule } from './athletes/athletes.module';

@Module({
  imports: [FacultyModule, AthletesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
