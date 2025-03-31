import { NextResponse } from "next/server"
import { sendDiscordMessage } from "@/lib/discord-webhook"

export async function POST(request: Request) {
  try {
    // Get the message from the request body
    const { message } = await request.json()

    // Send the message to Discord using our utility function
    await sendDiscordMessage(message)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending to Discord:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

