// src/pages/ClientPortal/clientData.js

export async function checkClientLogin(clientId, credential) {
  try {
    const formData = new FormData();
    formData.append("clientId", clientId);
    formData.append("credential", credential);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwXoxWvuWvs_QQhIrP50sFpDSe3gNC_oYST-fn07jiP7bs2obrcF_6HhyPRzhYAmnZ_iA/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data && data["Client ID"] ? data : null;
  } catch (error) {
    console.error("Login request failed:", error);
    return null;
  }
}
