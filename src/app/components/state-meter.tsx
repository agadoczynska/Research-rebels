export function StateMeter() {
  const currentLevel = 68;

  return (
    <div className="border-2 p-4 bg-white h-full flex flex-col" style={{ borderColor: '#2E5284' }}>
      <div className="flex-1 flex flex-col">
        <div className="mb-2 font-['Space_Mono'] font-bold tracking-tight text-sm">
          Alignment Level
        </div>
        <div style={{ paddingTop: '10px' }} className="flex-1 flex flex-col">
          <div className="relative flex-1 w-24 border-2 mx-auto" style={{ borderColor: '#2E5284' }}>
            {/* Scale markers - on the right */}
            <div className="absolute top-0 left-full ml-2 text-xs font-['Space_Mono'] -translate-y-1">
              High
            </div>
            <div className="absolute top-1/2 left-full ml-2 text-xs font-['Space_Mono'] -translate-y-1/2">
              Medium
            </div>
            <div className="absolute bottom-0 left-full ml-2 text-xs font-['Space_Mono'] translate-y-1">
              Low
            </div>

            {/* Fill bar */}
            <div
              className="absolute bottom-0 w-full transition-all duration-500"
              style={{
                height: `${currentLevel}%`,
                background: '#E3552D',
              }}
            />
          </div>
          <div className="mt-3 text-xs font-['Space_Mono'] text-gray-600">
            Live Group State
          </div>
        </div>
      </div>
    </div>
  );
}