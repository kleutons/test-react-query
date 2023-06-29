import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      cacheTime: 1000 * 60 * 60 * 12, // 12 hours
      refetchOnMount: true,
      refetchOnReconnect: false,
    },
  },
})