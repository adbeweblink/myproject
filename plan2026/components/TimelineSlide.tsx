
import React, { useMemo } from 'react';
import { MousePointer2, Calendar, Award, Building2, MonitorPlay, FileText, Users, Clock } from 'lucide-react';
import { SectionHeading } from './ui/Shared';
import { EventTypes, QuarterItem, EventItem } from '../types';

// 活動類型定義 (區分 CC 與 DC)
const EVENT_TYPES: EventTypes = {
  PHYSICAL_CC: { label: "CC 實體旗艦", color: "bg-red-600", text: "text-red-400", border: "border-red-600", shadow: "shadow-red-900/50", icon: Building2, isOnline: false },
  PHYSICAL_DC: { label: "DC 研討會", color: "bg-purple-600", text: "text-purple-400", border: "border-purple-600", shadow: "shadow-purple-900/50", icon: Building2, isOnline: false },
  ONLINE_CC: { label: "CC 線上講座", color: "bg-blue-500", text: "text-blue-400", border: "border-blue-500", shadow: "shadow-blue-900/50", icon: MonitorPlay, isOnline: true },
  ONLINE_DC: { label: "DC 線上講座", color: "bg-orange-500", text: "text-orange-400", border: "border-orange-500", shadow: "shadow-orange-900/50", icon: FileText, isOnline: true },
  CHANNEL: { label: "經銷夥伴", color: "bg-green-500", text: "text-green-400", border: "border-green-500", shadow: "shadow-green-900/50", icon: Users, isOnline: false },
  EXTERNAL: { label: "外部講座", color: "bg-gray-500", text: "text-gray-400", border: "border-gray-500", shadow: "shadow-gray-900/50", icon: Calendar, isOnline: false },
};

export const TimelineSlide: React.FC = () => {
  // Adobe Fiscal Year 2026: Dec 2025 - Nov 2026
  const fyStart = new Date('2025-12-01').getTime();
  const fyEnd = new Date('2026-11-30').getTime();
  const totalDuration = fyEnd - fyStart;

  // 定義季度 (Adobe FY quarter usually starts in Dec)
  // 使用 distinct colors for top border accent
  const quarters = [
    { id: 'Q1', label: 'FY26 Q1', start: '2025-12-01', end: '2026-02-28', bg: 'bg-white/[0.04]', accent: 'bg-red-500' },
    { id: 'Q2', label: 'FY26 Q2', start: '2026-03-01', end: '2026-05-31', bg: 'bg-transparent', accent: 'bg-blue-500' },
    { id: 'Q3', label: 'FY26 Q3', start: '2026-06-01', end: '2026-08-31', bg: 'bg-white/[0.04]', accent: 'bg-green-500' },
    { id: 'Q4', label: 'FY26 Q4', start: '2026-09-01', end: '2026-11-30', bg: 'bg-transparent', accent: 'bg-orange-500' },
  ];

  // 生成月份刻度 (Dec to Nov)
  const months = useMemo(() => {
    const m = [];
    let current = new Date('2025-12-01');
    const end = new Date('2026-11-30');
    
    while (current <= end) {
      m.push({
        label: current.toLocaleString('en-US', { month: 'short' }).toUpperCase(), // DEC, JAN...
        date: new Date(current),
        iso: current.toISOString().slice(0, 7)
      });
      current.setMonth(current.getMonth() + 1);
    }
    return m;
  }, []);

  const events: EventItem[] = [
    // Q1
    { id: 101, date: "2025-12-17", name: "DV ASIA Workflow (CC)", type: EVENT_TYPES.PHYSICAL_CC, status: "Standard", highlight: false },
    // NEW EVENT
    { id: 106, date: "2026-01-14", name: "Acrobat 線上\n校園研習(台奇)", type: EVENT_TYPES.EXTERNAL, status: "Webinar", highlight: false },
    { id: 104, date: "2026-01-28", name: "Adobe MG 動畫 AI 講座(CC)", type: EVENT_TYPES.ONLINE_CC, status: "Webinar", highlight: false },
    { id: 103, date: "2026-01-29", name: "PDF 印務色彩管理(DC)", type: EVENT_TYPES.ONLINE_DC, status: "Webinar", highlight: false },
    // NEW EVENT
    { id: 107, date: "2026-01-30", name: "影視專案\n實體講座(朕宏)", type: EVENT_TYPES.EXTERNAL, status: "Seminar", highlight: false },
    { id: 105, date: "2026-02-15", name: "Cyber Security 研討會", type: EVENT_TYPES.EXTERNAL, status: "Seminar", highlight: false },

    // Q2
    // Moved to late March
    { id: 201, date: "2026-03-25", displayDate: "3月", name: "Channel Partner Event", type: EVENT_TYPES.CHANNEL, status: "High Priority", highlight: true },
    { id: 203, date: "2026-03-18", name: "快充學堂(CC)", type: EVENT_TYPES.ONLINE_CC, status: "Webinar", highlight: false },
    { id: 204, date: "2026-04-01", name: "快充學堂(DC)", type: EVENT_TYPES.ONLINE_DC, status: "Webinar", highlight: false },
    { id: 205, date: "2026-04-24", name: "iSAC Tech 研討會", type: EVENT_TYPES.PHYSICAL_DC, status: "Standard", highlight: false },

    // Q3
    { id: 301, date: "2026-06-22", name: "Creator Solutions Day", type: EVENT_TYPES.PHYSICAL_CC, status: "High Priority", highlight: true },
    { id: 302, date: "2026-07-15", name: "快充學堂(DC)", type: EVENT_TYPES.ONLINE_DC, status: "Webinar", highlight: false },
    { id: 303, date: "2026-07-29", name: "快充學堂(CC)", type: EVENT_TYPES.ONLINE_CC, status: "Webinar", highlight: false },
    { id: 304, date: "2026-08-15", name: "PDF Apps 研討會", type: EVENT_TYPES.EXTERNAL, status: "Seminar", highlight: false },

    // Q4
    { id: 401, date: "2026-09-02", name: "快充學堂(CC)", type: EVENT_TYPES.ONLINE_CC, status: "Webinar", highlight: false },
    { id: 402, date: "2026-09-30", name: "快充學堂(DC)", type: EVENT_TYPES.ONLINE_DC, status: "Webinar", highlight: false },
    { id: 404, date: "2026-10-15", name: "Digi-Doc Solutions", type: EVENT_TYPES.ONLINE_DC, status: "Webinar", highlight: false },
    { id: 405, date: "2026-11-13", name: "Creator Link 2026", type: EVENT_TYPES.PHYSICAL_CC, status: "High Priority", highlight: true },
  ];

  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // 計算 X 軸位置 (百分比)
  const getPosition = (dateStr: string) => {
    const time = new Date(dateStr).getTime();
    return Math.max(2, Math.min(98, ((time - fyStart) / totalDuration) * 100));
  };

  return (
    <section className="min-h-screen px-6 md:px-20 border-b border-white/5 flex flex-col justify-start pt-24 md:pt-28 overflow-hidden relative w-full bg-[#0a0a0a]">
      {/* 區域背景漸層 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80 pointer-events-none" />

      {/* Header - Fixed Height Area */}
      <div className="shrink-0 z-30 mb-2 md:mb-4 relative">
        <SectionHeading title="2026 年度活動年曆" subtitle="Marketing Calendar" color="bg-yellow-500" />
        
        {/* Legend */}
        <div className="flex flex-wrap gap-2 md:gap-4 bg-gray-900/90 backdrop-blur-xl p-3 rounded-2xl border border-white/10 w-fit shadow-2xl">
          {Object.values(EVENT_TYPES).map((type, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${type.color} shadow-[0_0_8px_rgba(255,255,255,0.4)]`}></div>
              <span className="text-[10px] text-gray-300 font-bold whitespace-nowrap tracking-wide">{type.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- DESKTOP VIEW (Strict Horizontal Grid System) --- */}
      <div className="hidden lg:flex relative w-full flex-col justify-center items-center select-none flex-1 min-h-0">
        
        {/* Timeline "Borderless" Container 
            Height Strategy: Use Flexbox to fill remaining space but keep constraints
        */}
        <div className="relative w-full h-full max-h-[550px] min-h-[450px] flex items-center justify-center">
            
            {/* 1. Quarter Background Zones (The "Striking" Separation) */}
            <div className="absolute inset-0 flex w-full h-full z-0 pointer-events-none">
              {quarters.map((q) => (
                <div key={q.id} className={`flex-1 ${q.bg} relative flex flex-col h-full group`}>
                   
                   {/* Top Accent Line */}
                   <div className={`w-full h-1 ${q.accent} shadow-[0_0_15px_rgba(255,255,255,0.3)]`}></div>

                   {/* Giant Quarter Watermark - Positioned to be safe inside */}
                   <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10vh] font-black text-white/[0.03] leading-none select-none group-hover:text-white/[0.06] transition-colors">
                     {q.id}
                   </div>
                   
                   {/* Quarter Label */}
                   <div className="mt-3 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full bg-black/40 border border-white/5 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase shadow-lg`}>
                        {q.label}
                      </span>
                   </div>
                </div>
              ))}
            </div>

            {/* 2. Central Axis Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/20 z-10"></div>

            {/* 3. Month Ticks (Short Lines on Axis) */}
            <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
               {months.map((m) => {
                 const left = getPosition(`${m.iso}-01`);
                 return (
                   <div key={m.label} className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center justify-center" style={{ left: `${left}%`, transform: 'translateX(-50%) translateY(-50%)' }}>
                      {/* Short Tick Mark */}
                      <div className="h-3 w-px bg-white/50"></div>
                      
                      {/* Month Label (Below Axis) */}
                      <div className="absolute top-4 text-[9px] font-black text-gray-500 tracking-widest uppercase opacity-70">
                        {m.label}
                      </div>
                   </div>
                 );
               })}
            </div>

            {/* 4. Events Layer (4-Lane Stratified System) 
                Designed to ensure cards NEVER overlap vertically.
                Layer 1 (Near): ±35px to ±115px (Card Area)
                Layer 2 (Far):  ±125px to ±205px (Card Area)
            */}
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
                {sortedEvents.map((ev, idx) => {
                  const leftPos = getPosition(ev.date);
                  const Icon = ev.type.icon;
                  
                  // 4-Lane Stratified Logic
                  // 0: Top Far (-125px line height)
                  // 1: Bottom Far (+125px line height)
                  // 2: Top Near (-35px line height)
                  // 3: Bottom Near (+35px line height)
                  const laneIndex = idx % 4;
                  
                  let verticalOffset = 0;
                  let isTop = true;
                  
                  if (laneIndex === 0) { verticalOffset = -125; isTop = true; }
                  else if (laneIndex === 1) { verticalOffset = 125; isTop = false; }
                  else if (laneIndex === 2) { verticalOffset = -35; isTop = true; }
                  else if (laneIndex === 3) { verticalOffset = 35; isTop = false; }

                  const lineHeight = Math.abs(verticalOffset);

                  return (
                    <div 
                      key={ev.id}
                      className="absolute top-1/2 pointer-events-auto group w-0 flex justify-center"
                      style={{ left: `${leftPos}%` }}
                    >
                      {/* Connector Line (Vertical) */}
                      <div 
                        className={`absolute w-px transition-all duration-300 z-0
                          ${ev.highlight ? 'bg-yellow-500/50 w-[1.5px]' : 'bg-white/10 group-hover:bg-white/30'}
                        `}
                        style={{ 
                          height: `${lineHeight}px`,
                          top: isTop ? `-${lineHeight}px` : '0',
                        }}
                      />

                      {/* Axis Dot */}
                      <div className={`
                        absolute w-2 h-2 rounded-full top-0 -translate-y-1/2 border border-[#0a0a0a] z-30 transition-transform duration-300 group-hover:scale-150
                        ${ev.highlight ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]' : 'bg-gray-500 group-hover:bg-white'}
                      `} />

                      {/* Event Content Bubble */}
                      <div 
                        className="absolute flex flex-col items-center z-40 transition-all duration-300 hover:z-[100] hover:scale-105 origin-center"
                        style={{ 
                            top: isTop ? `-${lineHeight}px` : `${lineHeight}px`,
                            transform: isTop ? 'translateY(-100%)' : 'translateY(0%)'
                        }}
                      >
                         {/* Icon Box */}
                        <div className={`
                             mb-2 mt-2 w-7 h-7 rounded-lg ${ev.type.color} bg-opacity-20 border border-white/10 backdrop-blur-md shadow-lg flex items-center justify-center relative z-20
                             ${ev.highlight ? 'ring-1 ring-yellow-500 ring-offset-1 ring-offset-black' : ''}
                        `}>
                            <Icon size={12} className="text-white drop-shadow-md" />
                        </div>

                        {/* Text Label Container - Compacted */}
                        <div className={`
                            text-center relative px-2.5 py-1.5 rounded-lg
                            bg-[#111]/95 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] 
                            min-w-[120px] max-w-[150px]
                            ${ev.highlight ? 'border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.15)]' : 'group-hover:border-white/30'}
                        `}>
                           <div className="flex items-center justify-center gap-1.5 mb-0.5 opacity-70">
                              <Calendar size={8} className="text-gray-400"/>
                              <div className="text-[9px] font-mono text-gray-300 uppercase tracking-wider">
                                {ev.displayDate || ev.date.slice(5)}
                              </div>
                           </div>
                           
                           <div className={`text-[9px] font-bold leading-tight ${ev.highlight ? 'text-yellow-400' : 'text-white'} text-balance line-clamp-2 whitespace-pre-line`}>
                             {ev.name}
                           </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
        </div>
      </div>

      {/* --- MOBILE VIEW (Vertical List with Month Headers) --- */}
      <div className="lg:hidden relative pl-4 border-l border-white/10 ml-3 space-y-6 overflow-y-auto flex-1 min-h-0 pr-2 pb-24 pt-4">
        {quarters.map((q) => {
            // Filter events for this quarter
            const qStart = new Date(q.start).getTime();
            const qEnd = new Date(q.end).getTime();
            const qEvents = sortedEvents.filter(e => {
                const t = new Date(e.date).getTime();
                return t >= qStart && t <= qEnd;
            });

            if (qEvents.length === 0) return null;

            return (
                <div key={q.id} className="mb-8">
                    <div className="sticky top-0 bg-[#0a0a0a]/95 backdrop-blur z-20 py-2 mb-4 -ml-4 pl-4 border-b border-white/5 flex items-center gap-3">
                         <span className="text-xl font-black text-white/20">{q.id}</span>
                         <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{q.label}</span>
                    </div>

                    <div className="space-y-4">
                        {qEvents.map((ev, idx) => {
                             // Parse Month for display
                             const evDate = new Date(ev.date);
                             const monthStr = evDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
                             
                             return (
                                <div key={idx} className="relative pl-6">
                                    {/* Timeline Dot */}
                                    <div className={`
                                        absolute -left-[23px] top-4 w-3 h-3 rounded-full border-2 border-[#0a0a0a] ${ev.type.color}
                                        flex items-center justify-center z-10 shadow-[0_0_10px_rgba(255,255,255,0.2)]
                                    `}></div>

                                    {/* Content Card */}
                                    <div className={`
                                        relative bg-gray-900/60 backdrop-blur-md border rounded-xl p-4 transition-all duration-300
                                        ${ev.highlight 
                                            ? 'border-yellow-500/40 bg-yellow-900/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]' 
                                            : 'border-white/10'
                                        }
                                    `}>
                                        <div className="flex justify-between items-start mb-2">
                                             <div className="flex items-center gap-2">
                                                <span className="bg-white/10 text-white text-[9px] px-1.5 py-0.5 rounded font-mono uppercase">
                                                    {monthStr}
                                                </span>
                                                <span className="text-xs text-gray-400 font-mono">
                                                   {ev.displayDate || ev.date.slice(5)}
                                                </span>
                                             </div>
                                             {ev.highlight && <Award size={12} className="text-yellow-500" />}
                                        </div>

                                        <div className="flex items-center gap-2 mb-2">
                                             <span className={`text-[10px] font-bold ${ev.type.text} border border-white/5 px-2 py-0.5 rounded-full bg-black/20`}>
                                                 {ev.type.label}
                                             </span>
                                        </div>

                                        <h4 className="text-white font-bold text-sm leading-snug whitespace-pre-line">{ev.name}</h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        })}
      </div>
      
    </section>
  );
};
