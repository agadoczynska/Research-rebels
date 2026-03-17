import { HarveyBall } from './harvey-ball';

interface FeatureCardProps {
  name: string;
  description: string;
  score: number;
  passed: boolean;
  highlight?: boolean;
}

export function FeatureCard({ name, description, score, passed, highlight }: FeatureCardProps) {
  return (
    <div 
      className="p-3 space-y-2"
      style={{
        backgroundColor: passed ? '#d7e8bc' : '#f8b4b4',
        outline: highlight ? '2px solid #E3552D' : 'none',
        outlineOffset: '2px',
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="font-['Space_Mono'] font-bold tracking-tight text-xs">
          {name}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="font-['Space_Mono'] font-bold text-xs">{score > 0 ? score.toFixed(1) : '–'}</div>
          <HarveyBall value={score} />
        </div>
      </div>
      <div className="text-xs font-['Space_Mono'] text-gray-700 leading-snug">
        {description}
      </div>
      <div className="pt-1 border-t border-gray-400">
        <div className="text-[10px] font-['Space_Mono'] font-bold">
          {score > 0 ? (passed ? '✓ PASSED' : '✗ NOT PASSED') : '— AWAITING VOTES'}
        </div>
      </div>
    </div>
  );
}