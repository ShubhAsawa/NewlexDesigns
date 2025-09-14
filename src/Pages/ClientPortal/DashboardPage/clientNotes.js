const SHEET_GET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzbUDYo8wEtR0O9Zwmz1SHv6Lk6RqBilk9yO8s7_iZtEN0n4aNUv_vNc3K7M8dE707XCg/exec";

// ✅ Fetch existing notes for a client
export async function fetchClientNotes(clientId) {
  try {
    const url = `${SHEET_GET_ENDPOINT}?clientId=${encodeURIComponent(
      clientId
    )}`;
    const response = await fetch(url);

    const result = await response.json();

    if (result.success !== true || typeof result.notes !== "string") {
      throw new Error("Invalid response from server.");
    }

    // Split notes by newline, then separate timestamp and message
    return result.notes
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((entry) => {
        const match = entry.match(/^\[(.*?)\]\s*(.*)$/);
        return {
          timestamp: match ? match[1] : "",
          message: match ? match[2] : entry,
        };
      });
  } catch (error) {
    console.error("❌ Error fetching client notes:", error);
    return [];
  }
}

// ✅ Send new note to backend
export async function appendClientNote(clientId, noteText) {
  try {
    const response = await fetch(`/add-note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientId, note: noteText }),
    });

    const result = await response.json();

    if (!response.ok || result.success !== true) {
      throw new Error(result.error || "Unknown error");
    }

    return true;
  } catch (error) {
    console.error("❌ Error sending note to backend:", error);
    return false;
  }
}
