// lib/utils.ts

// Merge class names (useful for conditional Tailwind classes)
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Format phone for display (e.g., +60 1112345678 -> +60 11-1234 5678)
export function formatPhone(phone: string) {
  return phone.replace(/(\+\d{2})(\d{2})(\d{4})(\d+)/, "$1 $2-$3 $4");
}

// Get current year (footer copyright)
export function currentYear() {
  return new Date().getFullYear();
}
