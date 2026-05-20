export function stripPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function isValidUSPhone(phone: string): boolean {
  const digits = stripPhone(phone);
  return digits.length === 10;
}

export function formatE164(phone: string): string {
  const digits = stripPhone(phone);
  return `+1${digits}`;
}
