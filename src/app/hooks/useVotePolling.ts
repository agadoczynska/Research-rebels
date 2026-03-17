import { useEffect, useRef } from 'react';

const API_BASE = 'http://localhost:3001';
const POLL_INTERVAL_MS = 1000;

interface VotesResponse {
  votes: Record<string, number>;
}

export function useVotePolling(onUpdate: (votes: Record<string, number>) => void) {
  const lastSeenRef = useRef<string>('');
  const onUpdateRef = useRef(onUpdate);
  onUpdateRef.current = onUpdate;

  useEffect(() => {
    let active = true;

    async function poll() {
      try {
        const res = await fetch(`${API_BASE}/api/votes`);
        if (!res.ok) return;
        const data: VotesResponse = await res.json();
        const serialised = JSON.stringify(data.votes);
        if (serialised !== lastSeenRef.current) {
          lastSeenRef.current = serialised;
          onUpdateRef.current(data.votes);
        }
      } catch {
        // Server unreachable — ignore silently until it starts
      }
    }

    poll();
    const id = setInterval(() => {
      if (active) poll();
    }, POLL_INTERVAL_MS);

    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);
}
