export function showError({ message, summary }, toast) {
  toast.add({
    severity: 'error',
    summary: summary,
    detail: message,
    life: 6000,
  })
}

export function showSuccess({ message, summary }, toast) {
  toast.add({
    severity: 'success',
    summary: summary,
    detail: message,
    life: 3000,
  })
}
