import { User, Bot } from 'lucide-react';

export function WireframePrototype() {
  return (
    <div className="border-2 border-gray-400 p-4 bg-gray-200 h-full flex flex-col rounded-lg">
      <div className="font-['Space_Mono'] font-bold mb-4 text-sm">
        Marketing planner Prototype
      </div>

      <div className="flex gap-4 flex-1 min-h-0">
        {/* Sidebar Navigation */}
        <div className="w-40 border border-gray-400 bg-white p-4 space-y-3 flex-shrink-0 rounded">
          {/* Logo placeholder */}
          <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-['Space_Mono'] text-gray-600">
            LOGO
          </div>
          
          <div className="text-xs font-['Space_Mono'] text-gray-500">Navigation</div>
          {['Dashboard', 'Campaigns', 'Trends', 'Ideas', 'Reports'].map((item, index) => (
            <div
              key={item}
              className={`text-xs font-['Space_Mono'] py-2 px-3 border rounded ${
                index === 3 ? 'border-[var(--marina)] bg-gray-50' : 'border-gray-300 bg-gray-100'
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content area */}
        <div className="flex-1 border-2 bg-white p-4 space-y-4 overflow-hidden flex flex-col rounded" style={{ borderColor: '#EC935E' }}>
          {/* Header bar */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-300">
            <div className="text-sm font-['Space_Mono'] text-gray-700">AI Idea Generator</div>
            <div className="flex gap-2 items-center">
              <div className="h-6 px-2 bg-gray-200 rounded flex items-center">
                <span className="text-xs font-['Space_Mono'] text-gray-600">EN</span>
              </div>
              <div className="h-6 px-2 bg-gray-200 rounded flex items-center">
                <Bot className="w-3 h-3 text-gray-600" />
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-gray-400 bg-gray-100 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Page title */}
          <div className="space-y-1">
            <div className="text-sm font-['Space_Mono'] font-bold text-gray-800">Campaign Ideas Dashboard</div>
            <div className="text-xs font-['Space_Mono'] text-gray-500">Generate and analyze marketing concepts</div>
          </div>

          {/* KPI Cards Section */}
          <div className="grid grid-cols-3 gap-3">
            {/* KPI Card 1 */}
            <div className="border-2 border-gray-400 bg-gray-100 p-4 space-y-2 rounded">
              <div className="text-2xl font-['Space_Mono'] font-bold text-gray-700">127</div>
              <div className="text-xs font-['Space_Mono'] text-gray-600">Ideas Generated</div>
            </div>
            
            {/* KPI Card 2 */}
            <div className="border-2 border-gray-400 bg-gray-100 p-4 space-y-2 rounded">
              <div className="text-2xl font-['Space_Mono'] font-bold text-gray-700">89%</div>
              <div className="text-xs font-['Space_Mono'] text-gray-600">Success Rate</div>
            </div>
            
            {/* KPI Card 3 */}
            <div className="border-2 border-gray-400 bg-gray-100 p-4 space-y-2 rounded">
              <div className="text-2xl font-['Space_Mono'] font-bold text-gray-700">42</div>
              <div className="text-xs font-['Space_Mono'] text-gray-600">Active Campaigns</div>
            </div>
          </div>

          {/* Target Group Input - Highlighted */}
          <div className="border-2 border-gray-400 p-4 space-y-2 bg-gray-100 rounded">
            <div className="text-xs font-['Space_Mono'] text-gray-600">Target Group Input</div>
            <div className="h-8 border border-gray-300 bg-gray-50 rounded flex items-center px-3">
              <span className="text-xs font-['Space_Mono'] text-gray-500">Young professionals, 25-35, urban...</span>
            </div>
            <div className="text-xs font-['Space_Mono'] text-gray-400">Define your audience demographics</div>
          </div>

          {/* Trend Selector - Highlighted */}
          <div className="border-2 border-gray-400 p-4 space-y-2 bg-gray-100 rounded">
            <div className="text-xs font-['Space_Mono'] text-gray-600">Trend Selector</div>
            <div className="grid grid-cols-4 gap-3">
              <div className="h-16 border border-gray-300 bg-gray-50 p-3 rounded flex flex-col justify-between">
                <div className="text-xs font-['Space_Mono'] text-gray-700">Nature</div>
                <div className="flex gap-0.5">
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-gray-300"></div>
                </div>
              </div>
              <div className="h-16 border border-gray-300 bg-gray-50 p-3 rounded flex flex-col justify-between">
                <div className="text-xs font-['Space_Mono'] text-gray-700">AI Tech</div>
                <div className="flex gap-0.5">
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                </div>
              </div>
              <div className="h-16 border border-gray-300 bg-gray-50 p-3 rounded flex flex-col justify-between">
                <div className="text-xs font-['Space_Mono'] text-gray-700">Wellness</div>
                <div className="flex gap-0.5">
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-gray-300"></div>
                  <div className="h-1 w-full bg-gray-300"></div>
                </div>
              </div>
              <div className="h-16 border border-gray-300 bg-gray-50 p-3 rounded flex flex-col justify-between">
                <div className="text-xs font-['Space_Mono'] text-gray-700">Remote Work</div>
                <div className="flex gap-0.5">
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-[var(--marina)]"></div>
                  <div className="h-1 w-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Idea Output - Highlighted */}
          <div className="border-2 border-gray-400 bg-gray-100 flex-1 min-h-0 rounded flex flex-col" style={{ padding: '15px' }}>
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-gray-600" />
              <div className="text-xs font-['Space_Mono'] text-gray-600">AI Idea Output</div>
            </div>
            <div className="space-y-2 mt-2">
              <div className="text-xs font-['Space_Mono'] text-gray-700">
                Create a sustainability-focused campaign targeting eco-conscious millennials.
              </div>
              <div className="text-xs font-['Space_Mono'] text-gray-600">
                Emphasize CO2 reduction and green alternatives.
              </div>
              
              {/* Picture placeholder blocks with button aligned */}
              <div className="flex gap-3 items-end" style={{ paddingTop: '15px' }}>
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs font-['Space_Mono'] text-gray-600">IMG</span>
                </div>
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs font-['Space_Mono'] text-gray-600">IMG</span>
                </div>
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs font-['Space_Mono'] text-gray-600">IMG</span>
                </div>
                
                {/* Button placeholder - aligned with bottom of images */}
                <div className="ml-auto">
                  <div className="h-8 px-4 border-2 border-gray-400 bg-white flex items-center justify-center rounded">
                    <span className="text-xs font-['Space_Mono'] text-gray-700">Generate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2 flex-shrink-0">
            <div className="h-9 px-5 border-2 border-gray-800 bg-gray-800 flex items-center justify-center rounded">
              <span className="text-xs font-['Space_Mono'] text-white">Save Campaign</span>
            </div>
            <div className="h-9 px-5 border-2 border-gray-400 bg-white flex items-center justify-center rounded">
              <span className="text-xs font-['Space_Mono'] text-gray-700">Reset</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}