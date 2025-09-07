import { BASE_URL } from "./config";

export const registerUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.error(data);
    if (!response.ok) {
      throw new Error(data.error || "Registration failed");
    }

    return data;
  } catch (error) {
    throw error;
  }
};
