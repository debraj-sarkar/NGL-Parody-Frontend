import { BASE_URL } from "./config";

export const sendMessage = async (message, linkId) => {
  try {
    const res = await fetch(`${BASE_URL}/send/${linkId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      throw new Error("Failed to send");
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
};
