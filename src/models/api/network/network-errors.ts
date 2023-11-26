export const NETWORK_STATUSES = {
  SUCCESS: "success",
  ERROR001: "error001",
} as const

export type NetworkStatusValues =
  (typeof NETWORK_STATUSES)[keyof typeof NETWORK_STATUSES]
