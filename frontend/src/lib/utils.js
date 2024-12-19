export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
