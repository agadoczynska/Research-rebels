export function VotingToolCard() {
  const voteOptions = [
    { value: 1, label: 'Irrelevant', fillPercent: 25 },
    { value: 2, label: 'Optional', fillPercent: 50 },
    { value: 3, label: 'Important', fillPercent: 75 },
    { value: 4, label: 'Critical', fillPercent: 100 },
  ];

  return (
    <div className="border-2 p-3 bg-white space-y-2" style={{ borderColor: '#2E5284' }}>
      <div className="font-['Space_Mono'] font-bold text-xs">Voting Tool</div>
      <div className="space-y-2">
        <div className="text-xs font-['Space_Mono'] text-gray-600">Vote: How critical is this?</div>
        
        {/* Vote scale - smaller circles */}
        <div className="flex justify-between gap-3">
          {voteOptions.map(({ value, label, fillPercent }) => (
            <div key={value} className="flex-1">
              <div className="flex flex-col items-center gap-1.5">
                <button
                  className="relative w-8 h-8 rounded-full border-2 hover:scale-110 transition-transform"
                  style={{ 
                    borderColor: '#2E5284',
                    background: `conic-gradient(var(--marina) ${fillPercent * 3.6}deg, white ${fillPercent * 3.6}deg)`
                  }}
                />
                <div className="text-center">
                  <div className="text-xs font-['Space_Mono'] font-bold">{value}/4</div>
                  <div className="text-[10px] font-['Space_Mono'] text-gray-600 leading-tight">
                    {label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-xs font-['Space_Mono'] text-gray-600">
        Mode: Simultaneous voting
      </div>
    </div>
  );
}