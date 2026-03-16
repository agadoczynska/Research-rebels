interface Feature {
  name: string;
  distribution: { vote: number; percentage: number }[];
}

const currentFeature: Feature = {
  name: 'AI Campaign Idea Generator',
  distribution: [
    { vote: 1, percentage: 12 },
    { vote: 2, percentage: 19 },
    { vote: 3, percentage: 27 },
    { vote: 4, percentage: 42 },
  ],
};

const voteColors = [
  '#c9b27c', // Brown Secondary for vote 1
  '#98dee0', // Turquoise Secondary for vote 2
  '#C77FAF', // Purple for vote 3 (27%)
  'var(--tea-rose-secondary)', // Desaturated Pink for vote 4
];

export function VotingChart() {
  const maxPercentage = Math.max(...currentFeature.distribution.map(d => d.percentage));

  return (
    <div className="bg-gray-200 p-4">
      <div className="space-y-4 mt-6">
        <div style={{ marginTop: '-24px' }}>
          <div className="font-['Space_Mono'] font-bold tracking-tight text-sm">
            Current feature: {currentFeature.name}
          </div>
          <div className="text-xs text-gray-700 mt-1">
            Auto-create campaigns from target group + trend data
          </div>
        </div>

        {/* Distribution blocks */}
        <div>
          {/* Blocks */}
          <div className="flex">
            {currentFeature.distribution.map((item, index) => {
              const heightPercentage = (item.percentage / maxPercentage) * 100;
              
              return (
                <div key={item.vote} className="flex-1">
                  {/* Vertical block */}
                  <div className="relative h-40 flex flex-col justify-end">
                    <div
                      className="w-full transition-all duration-500 flex items-center justify-center"
                      style={{
                        height: `${heightPercentage}%`,
                        backgroundColor: voteColors[index],
                      }}
                    >
                      <div className="font-['Space_Mono'] font-bold text-2xl">
                        {item.percentage}%
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Black baseline */}
          <div className="h-0.5 bg-black w-full" />
          
          {/* Labels below baseline */}
          <div className="flex mt-2">
            {currentFeature.distribution.map((item) => (
              <div key={item.vote} className="flex-1 text-center font-['Space_Mono'] text-xs">
                {item.vote}/4
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}