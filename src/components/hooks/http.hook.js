import { useState, useCallback } from "react";

export const useHttp = () => {
  const [isLoaded, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setIsLoading(true);

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status ${response.status}`);
        }

        const data = await response.json();

        setIsLoading(false);
        return data;
      } catch (e) {
        setIsLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { isLoaded, request, error, clearError };
};
