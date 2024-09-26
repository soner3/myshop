import { TcontactSchema } from "@/lib/schemas/contactSchema";

const webHookUrl: string = "";

export async function sendMessage(
  messageData: TcontactSchema,
): Promise<boolean | null> {
  try {
    const jsonData = JSON.stringify(messageData);
    const res = await fetch(webHookUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });

    return res.ok;
  } catch (error) {
    return null;
  }
}
