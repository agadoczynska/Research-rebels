export interface Participant {
  id: string;
  name: string;
  initials: string;
  vote: number | null;
}

interface ParticipantListProps {
  participants: Participant[];
}

const voteColors: Record<number, string> = {
  1: '#c9b27c',
  2: '#98dee0',
  3: '#C77FAF',
  4: '#E49095',
};

const voteLabels: Record<number, string> = {
  1: 'Irrel.',
  2: 'Opt.',
  3: 'Imp.',
  4: 'Crit.',
};

export function ParticipantList({ participants }: ParticipantListProps) {
  const voted = participants.filter(p => p.vote !== null).length;

  return (
    <div className="border-2 p-3 bg-white flex flex-col gap-2 h-full" style={{ borderColor: '#2E5284' }}>

      <div className="flex items-center justify-between flex-shrink-0">
        <div className="font-['Space_Mono'] font-bold text-xs">Participants</div>
        <div className="font-['Space_Mono'] text-xs text-gray-500">{voted}/{participants.length}</div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
        <div
          className="h-full rounded-full"
          style={{
            width: `${(voted / participants.length) * 100}%`,
            backgroundColor: '#2E5284',
            transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      </div>

      {/* List */}
      <div className="flex flex-col gap-1 overflow-y-auto flex-1 min-h-0">
        {participants.map(p => {
          const isMe = p.id === 'p5';
          const hasVoted = p.vote !== null;
          return (
            <div
              key={p.id}
              className="flex items-center gap-2 py-1 px-1.5 rounded"
              style={{
                backgroundColor: hasVoted ? '#f0f7e8' : '#fafafa',
                outline: isMe ? '1.5px solid #E3552D' : 'none',
                outlineOffset: '-1px',
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-['Space_Mono'] font-bold flex-shrink-0"
                style={{ backgroundColor: hasVoted ? '#2E5284' : '#9ca3af' }}
              >
                {p.initials}
              </div>
              <div className="font-['Space_Mono'] text-xs flex-1 truncate text-gray-700">
                {p.name}{isMe ? ' (you)' : ''}
              </div>
              {hasVoted ? (
                <div
                  className="text-[10px] font-['Space_Mono'] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{ backgroundColor: voteColors[p.vote!], color: '#333' }}
                >
                  {p.vote}/4 {voteLabels[p.vote!]}
                </div>
              ) : (
                <div className="text-[10px] font-['Space_Mono'] text-gray-400 italic flex-shrink-0">
                  pending…
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
