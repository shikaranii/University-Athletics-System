import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@prisma/client";

const createEventSchema = z.object({
    name: z.string().min(1).max(225),
    eventDetails: z.string().min(1).max(255),


})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createEventSchema.safeParse(body)

    const newEvent = await prisma.events.create({
        data: {name: body.name, eventDetails: body.eventDetails}
    })

    return NextResponse.json(newEvent, {status: 201});
}