interface HarveyBallProps {
  value: number; // Value from 0 to 4
}

export function HarveyBall({ value }: HarveyBallProps) {
  const percentage = (value / 4) * 100;
  const angle = (percentage / 100) * 360;

  // Create a conic gradient for pie chart effect
  const background = `conic-gradient(var(--marina) ${angle}deg, transparent ${angle}deg)`;

  return (
    <div 
      className="relative w-6 h-6 rounded-full border-2 flex-shrink-0"
      style={{ background, borderColor: '#2E5284' }}
    />
  );
}