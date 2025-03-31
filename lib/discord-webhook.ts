/**
 * Sends a message to a Discord webhook
 * @param message The message to send to Discord
 * @returns Promise that resolves when the message is sent
 */
export const sendDiscordMessage = async (message: string) => {
  // Get the webhook URL from environment variables
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  // Check if webhook URL is defined
  if (!webhookUrl) {
    console.error("Discord webhook URL is not defined in environment variables")
    throw new Error("Discord webhook URL is not configured")
  }

  // Create a message payload with embeds explicitly disabled
  const messagePayload = {
    content: message,
    embeds: [], // This disables automatic URL embeds
    flags: 4, // This sets the SUPPRESS_EMBEDS flag (4)
  }

  // Use fetch API to send the POST request
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messagePayload),
  })

  if (!response.ok) {
    throw new Error(`Discord webhook error: ${response.status}`)
  }

  return response
}

