import { StateMeter } from './components/state-meter';
import { VotingChart } from './components/voting-chart';
import { FeatureCard } from './components/feature-card';
import { WireframePrototype } from './components/wireframe-prototype';
import { PhaseProgress } from './components/phase-progress';
import { VotingToolCard } from './components/voting-tool-card';
import { Circle, Triangle, Square } from 'lucide-react';

const features = [
  {
    name: 'AI KPI Statistics',
    description: 'Insights from campaign monitor displayed on a chart',
    score: 3.8,
    passed: true,
  },
  {
    name: 'Trend Dashboard',
    description: 'Live overview of market trends and their relevance scores',
    score: 3.2,
    passed: true,
  },
  {
    name: 'Priority Tagging',
    description: 'Tag ideas by strategic urgency (board-ready filter)',
    score: 2.9,
    passed: true,
  },
  {
    name: 'Export to Slide Deck',
    description: 'One-click export of prioritized ideas into presentation',
    score: 2.1,
    passed: false,
  },
];

export default function App() {
  return (
    <div className="h-screen bg-white p-6 font-['Space_Mono'] overflow-hidden flex flex-col">
      {/* Top Bar */}
      <div className="mb-4 pb-4 border-b-2 flex-shrink-0" style={{ borderColor: '#2E5284' }}>
        <div className="mb-4">
          <h1 className="font-bold text-xl tracking-tight">
            Marketing Planning Tool – Strategy Workshop
          </h1>
        </div>

        {/* Current State Box and Progress Bar side by side */}
        <div className="flex items-center gap-6">
          {/* Agenda Card */}
          <div className="border-2 p-3 bg-white flex-shrink-0" style={{ borderColor: '#2E5284' }}>
            <div className="font-bold mb-1 text-sm">Current Focus: Feature Prioritization</div>
            <div className="text-xs text-gray-700">
              Identify strategic must-haves before Board Presentation
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex-1">
            <PhaseProgress currentPhase="Prioritize" />
          </div>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="grid grid-cols-[220px_580px_1fr] gap-6 flex-1 min-h-0">
        {/* Left Column - State Meter */}
        <div className="flex flex-col">
          <StateMeter />
        </div>

        {/* Center Column - Voting + Features */}
        <div className="space-y-4 overflow-hidden flex flex-col">
          {/* Feature Prioritization Panel */}
          <div className="border-2 p-4 bg-white space-y-4 flex-1" style={{ borderColor: '#2E5284' }}>
            <div className="space-y-1">
              <div className="font-bold tracking-tight">Feature Prioritization</div>
              <div className="text-xs text-gray-700">
                Identify strategic must-haves before Board Presentation
              </div>
            </div>

            <VotingChart />

            {/* Feature Cards Grid */}
            <div className="mt-[10px]">
              <div className="font-bold mb-3 tracking-tight text-sm">Feature Overview</div>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <FeatureCard
                    key={feature.name}
                    name={feature.name}
                    description={feature.description}
                    score={feature.score}
                    passed={feature.passed}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Voting Tool Card */}
          <div className="flex gap-4 flex-shrink-0">
            <VotingToolCard />
            
            {/* Votes so far card */}
            <div className="border-2 p-3 bg-white space-y-2 flex-1 flex flex-col justify-between" style={{ borderColor: '#2E5284' }}>
              <div className="font-['Space_Mono'] font-bold text-xs">Votes so far</div>
              <div className="font-['Space_Mono'] font-bold text-7xl text-center">4/7</div>
              <div className="text-xs font-['Space_Mono'] text-gray-600">workshop participants voted</div>
            </div>
          </div>
        </div>

        {/* Right Column - Wireframe Prototype */}
        <div className="overflow-hidden">
          <WireframePrototype />
        </div>
      </div>
    </div>
  );
}