// Single source of truth for mock data. Round 2 critical path.
// Persona: Linh, 32, Q.7 TPHCM (PRIMARY per requirement.md §2.1)

export type Tier = 'S' | 'B' | 'C' | 'H';
export type OrderStatus =
  | 'COMPLETED'
  | 'PENDING_VERIFY'
  | 'IN_TRANSIT'
  | 'AT_PICKUP'
  | 'CANCELLED';

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  trustScore: number;
  greenPoints: number;
  memberSince: string;
}

export interface Wallet {
  zaloPayBalance: number;
  holdAmount: number;
}

export interface Collector {
  id: string;
  name: string;
  tier: 1 | 2 | 3;
  vehicle: string;
  plate: string;
  rating: number;
  completedOrders: number;
  phone: string;
  avatarColor: string;
}

export interface Order {
  id: string;
  tier: Tier;
  status: OrderStatus;
  item: string;
  itemSlug: 'pet' | 'carton' | 'aluminum' | 'motor-wm' | 'mainboard' | 'wire-cu' | 'fridge' | 'tv' | 'sofa' | 'washer' | 'pin-aa' | 'pin-li' | 'bulb' | 'oil';
  mode?: 'speed' | 'auction'; // Tier B mode
  winningBid?: number; // Tier B Auction winning amount
  speedFloor?: number; // Tier B Auction reference floor
  hazardousItems?: { name: string; count: number; unit: string }[]; // Tier H
  weight: number; // kg
  amount?: number; // Tier S final, hoặc Tier C total
  advance?: number; // Tier C tạm ứng
  settled?: number; // Tier C phần chênh
  expectedRange?: [number, number]; // Tier C
  createdAt: string;
  completedAt?: string;
  collectorId?: string;
  bomReal?: { Cu: number; Fe: number; Al: number; plastic: number };
  massBalance?: number;
}

export interface Transaction {
  id: string;
  type: 'IN' | 'OUT' | 'HOLD' | 'RELEASE';
  amount: number;
  date: string;
  orderId?: string;
  description: string;
}

export interface Price {
  material: string;
  perKg: number;
  unit: string;
}

export interface BomItem {
  id: string;
  name: string;
  weightRange: [number, number];
  defaultWeight: number;
  expectedBom: { Cu: number; Fe: number; Al: number; plastic: number };
  realBom: { Cu: number; Fe: number; Al: number; plastic: number };
  expectedRange: [number, number];
}

// ============================================================
// Mock data
// ============================================================

export const USER: User = {
  id: 'u-001',
  name: 'Linh',
  phone: '0901 234 567',
  email: 'linh.nguyen@example.com',
  address: '123 Nguyễn Văn Linh, P. Tân Phong',
  district: 'Q.7, TP.HCM',
  trustScore: 65,
  greenPoints: 1240,
  memberSince: '2026-03-15',
};

export const WALLET: Wallet = {
  zaloPayBalance: 528_400,
  holdAmount: 60_000,
};

export const COLLECTORS: Record<string, Collector> = {
  'c-001': {
    id: 'c-001',
    name: 'Anh Tuấn',
    tier: 1,
    vehicle: 'Xe máy Honda Wave',
    plate: '51A-12345',
    rating: 4.8,
    completedOrders: 87,
    phone: '0912 345 678',
    avatarColor: 'bg-tier-s',
  },
  'c-002': {
    id: 'c-002',
    name: 'Chị Hoa',
    tier: 2,
    vehicle: 'Xe ba gác',
    plate: '51B-67890',
    rating: 4.9,
    completedOrders: 124,
    phone: '0908 222 333',
    avatarColor: 'bg-tier-b',
  },
  'c-003': {
    id: 'c-003',
    name: 'Anh Sơn',
    tier: 1,
    vehicle: 'Xe máy Yamaha Sirius',
    plate: '59X1-44321',
    rating: 4.7,
    completedOrders: 56,
    phone: '0939 111 555',
    avatarColor: 'bg-success',
  },
};

export const ORDERS: Order[] = [
  {
    id: 'RL-2026-001234',
    tier: 'S',
    status: 'COMPLETED',
    item: 'Chai PET 500ml',
    itemSlug: 'pet',
    weight: 3.2,
    amount: 38_400,
    createdAt: '2026-05-08T08:30:00',
    completedAt: '2026-05-08T09:55:00',
    collectorId: 'c-001',
  },
  {
    id: 'RL-2026-001235',
    tier: 'S',
    status: 'COMPLETED',
    item: 'Hộp carton khô',
    itemSlug: 'carton',
    weight: 2.5,
    amount: 6_250,
    createdAt: '2026-05-05T14:00:00',
    completedAt: '2026-05-05T15:20:00',
    collectorId: 'c-003',
  },
  {
    id: 'RL-2026-001236',
    tier: 'C',
    status: 'COMPLETED',
    item: 'Mô tơ máy giặt 1HP',
    itemSlug: 'motor-wm',
    weight: 8.2,
    amount: 213_700,
    advance: 175_000,
    settled: 38_700,
    expectedRange: [200_000, 260_000],
    createdAt: '2026-05-01T10:00:00',
    completedAt: '2026-05-02T14:00:00',
    collectorId: 'c-002',
    bomReal: { Cu: 1.85, Fe: 5.10, Al: 0, plastic: 1.05 },
    massBalance: 0.97,
  },
  {
    id: 'RL-2026-001237',
    tier: 'S',
    status: 'COMPLETED',
    item: 'Lon nhôm Coca',
    itemSlug: 'aluminum',
    weight: 1.8,
    amount: 68_400,
    createdAt: '2026-04-28T09:00:00',
    completedAt: '2026-04-28T10:15:00',
    collectorId: 'c-001',
  },
  {
    id: 'RL-2026-001239',
    tier: 'C',
    status: 'COMPLETED',
    item: 'Dây điện 1.5mm² đồng',
    itemSlug: 'wire-cu',
    weight: 2.0,
    amount: 218_400,
    advance: 150_000,
    settled: 68_400,
    expectedRange: [200_000, 240_000],
    createdAt: '2026-04-22T11:00:00',
    completedAt: '2026-04-23T16:00:00',
    collectorId: 'c-002',
    bomReal: { Cu: 1.26, Fe: 0, Al: 0, plastic: 0.74 },
    massBalance: 0.95,
  },
  {
    id: 'RL-2026-001240',
    tier: 'C',
    status: 'PENDING_VERIFY',
    item: 'Mainboard PC',
    itemSlug: 'mainboard',
    weight: 1.0,
    advance: 60_000,
    expectedRange: [25_000, 60_000],
    createdAt: '2026-05-08T11:00:00',
    collectorId: 'c-002',
  },
  // === Tier B (Speed + Auction) ===
  {
    id: 'RL-2026-001241',
    tier: 'B',
    status: 'COMPLETED',
    item: 'Tủ lạnh đôi 300L Samsung',
    itemSlug: 'fridge',
    weight: 62,
    amount: 1_650_000,
    createdAt: '2026-05-04T14:22:00',
    completedAt: '2026-05-04T17:40:00',
    collectorId: 'c-002',
    mode: 'speed',
  },
  {
    id: 'RL-2026-001242',
    tier: 'B',
    status: 'COMPLETED',
    item: 'Tivi LCD 42" Samsung',
    itemSlug: 'tv',
    weight: 14,
    amount: 850_000,
    createdAt: '2026-04-25T10:15:00',
    completedAt: '2026-04-25T15:30:00',
    collectorId: 'c-002',
    mode: 'auction',
    winningBid: 850_000,
    speedFloor: 580_000,
  },
  {
    id: 'RL-2026-001243',
    tier: 'B',
    status: 'IN_TRANSIT',
    item: 'Sofa 3 chỗ vải',
    itemSlug: 'sofa',
    weight: 38,
    amount: 320_000,
    createdAt: '2026-05-09T09:00:00',
    collectorId: 'c-002',
    mode: 'speed',
  },
  // === Tier H (chất thải nguy hại) ===
  {
    id: 'RL-H-2026-000086',
    tier: 'H',
    status: 'COMPLETED',
    item: 'Pin AA + bóng đèn huỳnh quang',
    itemSlug: 'pin-aa',
    weight: 0.8,
    amount: 0,
    createdAt: '2026-04-15T11:00:00',
    completedAt: '2026-04-17T15:00:00',
    collectorId: 'c-001',
    hazardousItems: [
      { name: 'Pin AA/AAA', count: 18, unit: 'cục' },
      { name: 'Bóng huỳnh quang', count: 3, unit: 'bóng' },
    ],
  },
  {
    id: 'RL-H-2026-000087',
    tier: 'H',
    status: 'PENDING_VERIFY',
    item: 'Pin xe máy + pin AA',
    itemSlug: 'pin-li',
    weight: 4.8,
    amount: 0,
    createdAt: '2026-05-10T14:42:00',
    collectorId: 'c-001',
    hazardousItems: [
      { name: 'Pin AA/AAA', count: 12, unit: 'cục' },
      { name: 'Pin xe máy', count: 1, unit: 'cục' },
    ],
  },
];

export const TRANSACTIONS: Transaction[] = [
  { id: 't-001', type: 'IN', amount: 38_400, date: '2026-05-08T09:55:00', orderId: 'RL-2026-001234', description: 'PET 3.2kg → ZaloPay' },
  { id: 't-002', type: 'HOLD', amount: 60_000, date: '2026-05-08T11:30:00', orderId: 'RL-2026-001240', description: 'Mainboard PC tạm ứng HOLD' },
  { id: 't-003', type: 'IN', amount: 6_250, date: '2026-05-05T15:20:00', orderId: 'RL-2026-001235', description: 'Carton 2.5kg → ZaloPay' },
  { id: 't-004', type: 'RELEASE', amount: 175_000, date: '2026-05-02T14:00:00', orderId: 'RL-2026-001236', description: 'Mô tơ máy giặt: tạm ứng release' },
  { id: 't-005', type: 'IN', amount: 38_700, date: '2026-05-02T14:01:00', orderId: 'RL-2026-001236', description: 'Mô tơ máy giặt: phần chênh +' },
  { id: 't-006', type: 'IN', amount: 68_400, date: '2026-04-28T10:15:00', orderId: 'RL-2026-001237', description: 'Lon nhôm 1.8kg → ZaloPay' },
  { id: 't-007', type: 'RELEASE', amount: 150_000, date: '2026-04-23T16:00:00', orderId: 'RL-2026-001239', description: 'Dây đồng: tạm ứng release' },
  { id: 't-008', type: 'IN', amount: 68_400, date: '2026-04-23T16:01:00', orderId: 'RL-2026-001239', description: 'Dây đồng: phần chênh +' },
];

export const PRICES: Price[] = [
  { material: 'Đồng', perKg: 178_000, unit: 'Cao' },
  { material: 'Nhôm', perKg: 36_000, unit: 'Cao' },
  { material: 'Sắt', perKg: 6_500, unit: 'Trung bình' },
  { material: 'PET', perKg: 12_000, unit: 'Trung bình' },
  { material: 'Carton', perKg: 2_500, unit: 'Phổ biến' },
  { material: 'Lon nhôm', perKg: 38_000, unit: 'Cao' },
];

export const BOM_LIBRARY: Record<string, BomItem> = {
  'motor-wm': {
    id: 'motor-wm',
    name: 'Mô tơ máy giặt 1HP',
    weightRange: [7, 9],
    defaultWeight: 8.2,
    expectedBom: { Cu: 0.25, Fe: 0.6, Al: 0, plastic: 0.15 },
    realBom: { Cu: 0.226, Fe: 0.622, Al: 0, plastic: 0.128 },
    expectedRange: [200_000, 260_000],
  },
  mainboard: {
    id: 'mainboard',
    name: 'Mainboard PC',
    weightRange: [0.5, 1.5],
    defaultWeight: 1.0,
    expectedBom: { Cu: 0.12, Fe: 0, Al: 0.08, plastic: 0.7 },
    realBom: { Cu: 0.115, Fe: 0, Al: 0.082, plastic: 0.7 },
    expectedRange: [25_000, 60_000],
  },
  'wire-cu': {
    id: 'wire-cu',
    name: 'Dây điện 1.5mm² đồng',
    weightRange: [1, 5],
    defaultWeight: 2.0,
    expectedBom: { Cu: 0.65, Fe: 0, Al: 0, plastic: 0.35 },
    realBom: { Cu: 0.63, Fe: 0, Al: 0, plastic: 0.37 },
    expectedRange: [200_000, 240_000],
  },
};

// ============================================================
// Helpers
// ============================================================

export function getOrderById(id: string): Order | undefined {
  return ORDERS.find((o) => o.id === id);
}

export function getCollectorById(id: string): Collector | undefined {
  return COLLECTORS[id];
}

export function trustScoreZone(score: number): {
  label: string;
  color: 'error' | 'warning' | 'success';
  advanceRatio: number;
} {
  if (score < 20) return { label: 'User mới', color: 'error', advanceRatio: 0.3 };
  if (score < 80) return { label: 'Đang tích lũy', color: 'warning', advanceRatio: 0.5 };
  return { label: 'Đáng tin', color: 'success', advanceRatio: 0.7 };
}

export const STATS = {
  totalOrders: ORDERS.filter((o) => o.status === 'COMPLETED').length,
  tierSCount: ORDERS.filter((o) => o.tier === 'S' && o.status === 'COMPLETED').length,
  tierCCount: ORDERS.filter((o) => o.tier === 'C' && o.status === 'COMPLETED').length,
  avgMassBalance: 0.96,
};
