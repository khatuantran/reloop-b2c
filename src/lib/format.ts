// VND, date, relative time formatters (vi-VN)

export function formatVND(n: number): string {
  return n.toLocaleString('vi-VN') + 'đ';
}

export function formatDate(d: string | Date): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export function formatTime(d: string | Date): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

export function formatDateTime(d: string | Date): string {
  return `${formatDate(d)} · ${formatTime(d)}`;
}

const NOW_REF = new Date('2026-05-09T10:00:00');

export function formatRelative(d: string | Date): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  const diffMs = NOW_REF.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60_000);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffMin < 1) return 'vừa xong';
  if (diffMin < 60) return `${diffMin} phút trước`;
  if (diffHour < 24) return `${diffHour} giờ trước`;
  if (diffDay < 7) return `${diffDay} ngày trước`;
  return formatDate(date);
}

export function formatWeight(kg: number): string {
  return `${kg.toFixed(1).replace('.', ',')} kg`;
}

export function statusLabel(s: string): string {
  const map: Record<string, string> = {
    COMPLETED: 'Hoàn tất',
    PENDING_VERIFY: 'Chờ Hub verify',
    IN_TRANSIT: 'Đang đến',
    AT_PICKUP: 'Đang cân tại nhà',
    CANCELLED: 'Đã huỷ',
  };
  return map[s] ?? s;
}
