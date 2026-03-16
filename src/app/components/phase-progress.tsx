interface PhaseProgressProps {
  currentPhase: 'Align' | 'Prioritize' | 'Explore' | 'Decide';
}

const phases = ['Align', 'Prioritize', 'Explore', 'Decide'];

export function PhaseProgress({ currentPhase }: PhaseProgressProps) {
  const currentIndex = phases.indexOf(currentPhase);
  // Fill to halfway through current phase
  const progressPercentage = ((currentIndex + 0.5) / phases.length) * 100;

  return (
    <div className="flex flex-col gap-3">
      {/* Progress bar - thicker */}
      <div className="relative h-6 border-2" style={{ borderColor: '#2E5284' }}>
        {/* Background - semi-transparent light blue */}
        <div className="absolute inset-0" style={{ backgroundColor: '#5F7BA0', opacity: 0.3 }} />
        
        {/* Fill showing current phase - using intense brown, fully opaque */}
        <div
          className="absolute top-0 left-0 h-full transition-all duration-500"
          style={{ 
            width: `${progressPercentage}%`,
            backgroundColor: '#2E5284'
          }}
        />

        {/* Markers on the bar */}
        {phases.map((phase, index) => {
          if (index === 0) return null; // Skip first marker
          const position = (index / phases.length) * 100;
          
          return (
            <div
              key={`marker-${phase}`}
              className="absolute top-0 bottom-0 w-0.5 bg-white"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            />
          );
        })}
      </div>

      {/* Phase labels underneath */}
      <div className="flex justify-between">
        {phases.map((phase, index) => (
          <div
            key={phase}
            className={`font-['Space_Mono'] text-xs ${
              index <= currentIndex ? 'font-bold' : 'text-gray-400'
            }`}
          >
            {phase}
          </div>
        ))}
      </div>
    </div>
  );
}