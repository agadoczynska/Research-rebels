interface HarveyBallInputProps {
  value: number | null;
  connected: boolean;
}

const voteLabels: Record<number, string> = {
  1: 'Irrelevant',
  2: 'Optional',
  3: 'Important',
  4: 'Critical',
};

export function HarveyBallInput({ value, connected }: HarveyBallInputProps) {
  const fillPercent = value !== null ? (value / 4) * 100 : 0;
  const angle = (fillPercent / 100) * 360;

  return (
    <div
      className="border-2 p-3 bg-white flex flex-col gap-3"
      style={{ borderColor: '#2E5284', minWidth: '180px' }}
    >
      {/* Header + connection indicator */}
      <div className="flex items-center justify-between">
        <div className="font-['Space_Mono'] font-bold text-xs">Harvey Ball</div>
        <div className="flex items-center gap-1.5">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: connected ? '#4ade80' : '#f87171' }}
          />
          <span
            className="font-['Space_Mono'] text-[9px]"
            style={{ color: connected ? '#16a34a' : '#dc2626' }}
          >
            {connected ? 'connected' : 'waiting…'}
          </span>
        </div>
      </div>

      <div className="text-[10px] font-['Space_Mono'] text-gray-500 leading-snug">
        Physical device · votes via API
      </div>

      {/* Harvey Ball display */}
      <div className="flex flex-col items-center gap-2">
        <div
          className="rounded-full"
          style={{
            width: '72px',
            height: '72px',
            border: `3px solid ${value !== null ? '#E3552D' : '#2E5284'}`,
            background: value !== null
              ? `conic-gradient(#E3552D ${angle}deg, #fde8e3 ${angle}deg)`
              : 'white',
            transition: 'background 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            className="font-['Space_Mono'] font-bold select-none"
            style={{
              fontSize: value !== null ? '20px' : '11px',
              color: value !== null ? '#E3552D' : '#9ca3af',
            }}
          >
            {value !== null ? `${value}/4` : 'no vote'}
          </span>
        </div>

        <div
          className="font-['Space_Mono'] text-xs font-bold text-center"
          style={{ color: value !== null ? '#E3552D' : '#9ca3af', minHeight: '16px' }}
        >
          {value !== null ? voteLabels[value] : '—'}
        </div>
      </div>

      <div className="text-[9px] font-['Space_Mono'] text-gray-400 text-center">
        {value !== null
          ? `Received from device (participant p5)`
          : 'Waiting for device input'}
      </div>
    </div>
  );
}
