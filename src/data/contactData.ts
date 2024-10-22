import { TcontactSchema } from "@/lib/schemas/contactSchema";

//Fügen sie hier ihre WebHook.site Url ein
const webHookUrl: string = "";

export async function sendMessage(
  messageData: TcontactSchema,
): Promise<number | null> {
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

    return res.status;
  } catch (error) {
    return null;
  }
}
