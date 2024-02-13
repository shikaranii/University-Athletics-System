import { IsString, IsNotEmpty, IsDateString, IsEnum, IsInt } from 'class-validator';

enum EventType {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL'
}

export class CreateEventDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsEnum(EventType)
  eventType: EventType;

  @IsInt()
  sportId: number;

  @IsString()
  eventDetails: string | null;
}