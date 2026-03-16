import { HarveyBall } from './harvey-ball';

interface FeatureCardProps {
  name: string;
  description: string;
  score: number;
  passed: boolean;
}

export function FeatureCard({ name, description, score, passed }: FeatureCardProps) {
  return (
    <div 
      className="p-3 space-y-2"
      style={{ backgroundColor: passed ? '#d7e8bc' : '#f8b4b4' }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="font-['Space_Mono'] font-bold tracking-tight text-xs">
          {name}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="font-['Space_Mono'] font-bold text-xs">{score.toFixed(1)}</div>
          <HarveyBall value={score} />
        </div>
      </div>
      <div className="text-xs font-['Space_Mono'] text-gray-700 leading-snug">
        {description}
      </div>
      <div className="pt-1 border-t border-gray-400">
        <div className="text-[10px] font-['Space_Mono'] font-bold">
          {passed ? '✓ PASSED' : '✗ NOT PASSED'}
        </div>
      </div>
    </div>
  );
}