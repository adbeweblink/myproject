import React from 'react';
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
  const fyStart = new Date('2025-12-01').getTime();
  const fyEnd = new Date('2026-11-30').getTime();
  const totalDuration = fyEnd - fyStart;

  const quarters: QuarterItem[] = [
    { id: 'Q1', label: 'FY26 Q1', start: '2025-12-01', end: '2026-02-28', bg: 'bg-blue-900/10' },
    { id: 'Q2', label: 'FY26 Q2', start: '2026-03-01', end: '2026-05-31', bg: 'bg-transparent' },
    { id: 'Q3', label: 'FY26 Q3', start: '2026-06-01', end: '2026-08-31', bg: 'bg-blue-900/10' },
    { id: 'Q4', label: 'FY26 Q4', start: '2026-09-01', end: '2026-11-30', bg: 'bg-transparent' },
  ];

  const events: EventItem[] = [
    // Q1
    { id: 101, date: "2025-12-17", name: "DV ASIA Workflow (CC)", type: EVENT_TYPES.PHYSICAL_CC, status: "Standard", highlight: false },
    { id: 104, date: "2026-01-28", name: "Power-Up Academy (DC)", type: EVENT_TYPES.ONLINE_DC, status: "Webinar", highlight: false },
    { id: 103, date: "2026-01-29", name: "Power-Up Academy (CC)", type: EVENT_TYPES.ONLINE_CC, status: "Webinar", highlight: false },
    { id: 105, date: "2026-02-15", name: "Cyber Security Talk", type: EVENT_TYPES.EXTERNAL, status: "Seminar", highlight: false },

    // Q2
    { id: 201, date: "2026-03-02", name: "Channel Partner Event", type: EVENT_TYPES.CHANNEL, status: "High Priority", highlight: true },
    { id: 203, date: "2026-03-18", name: "Power-Up Academy (CC)", type: EVENT_TYPES.ONLINE_CC, status: "Webinar", highlight: false },
    { id: 204, date: "2026-04-01", name: "Power-Up Academy (DC)", type: EVENT_TYPES.ONLINE_DC, status: "Webinar", highlight: false },
    { id: 205, date: "2026-04-24", name: "iSAC Tech Seminar", type: EVENT_TYPES.PHYSICAL_DC, status: "Standard", highlight: false },

    // Q3
    { id: 301, date: "2026-06-22", name: "Creator Solutions Day", type: EVENT_TYPES.PHYSICAL_CC, status: "High Priority", highlight: true },
    { id: 302, date: "2026-07-15", name: "Power-Up Academy (DC)", type: EVENT_TYPES.ONLINE_DC, status: "Webinar", highlight: false },
    { id: 303, date: "2026-07-29", name: "Power-Up Academy (CC)", type: EVENT_TYPES.ONLINE_CC, status: "Webinar", highlight: false },
    { id: 304, date: "2026-08-15", name: "PDF Apps Seminar", type: EVENT_TYPES.EXTERNAL, status: "Seminar", highlight: false },

    // Q4
    { id: 401, date: "2026-09-02", name: "Power-Up Academy (CC)", type: EVENT_TYPES.ONLINE_CC, status: "Webinar", highlight: false },
    { id: 402, date: "2026-09-30", name: "Power-Up Academy (DC)", type: EVENT_TYPES.ONLINE_DC, status: "Webinar", highlight: false },
    { id: 404, date: "2026-10-15", name: "Digi-Doc Solutions", type: EVENT_TYPES.EXTERNAL, status: "Seminar", highlight: false },
    { id: 405, date: "2026-11-13", name: "Creator Link 2026", type: EVENT_TYPES.PHYSICAL_CC, status: "High Priority", highlight: true },
  ];

  const getPosition = (dateStr: string) => {
    const time = new Date(dateStr).getTime();
    return Math.max(0, Math.min(100, ((time - fyStart) / totalDuration) * 100));
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-20 border-b border-white/5 flex flex-col justify-center">
      <SectionHeading title="2026 年度活動年曆" subtitle="Marketing Calendar" color="bg-yellow-500" />
      
      {/* Legend & Hint */}
      <div className="flex justify-between items-end mb-10 md:mb-20">
        <div className="flex flex-wrap gap-3 md:gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
          {Object.values(EVENT_TYPES).map((type, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${type.color} shadow-[0_0_8px_rgba(255,255,255,0.3)]`}></div>
              <span className="text-[10px] md:text-xs text-gray-300 font-medium">{type.label}</span>
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
          <MousePointer2 size={16} className="animate-bounce" />
          <span>Hover to see details</span>
        </div>
      </div>

      {/* --- DESKTOP VIEW (Horizontal Timeline) --- */}
      <div className="hidden lg:block relative w-full h-[400px] flex items-center mb-12 select-none">
        {/* Quarter Backgrounds */}
        <div className="absolute inset-0 flex rounded-2xl overflow-hidden border border-white/5">
          {quarters.map((q) => (
            <div key={q.id} className={`flex-1 ${q.bg} relative border-r border-white/5 last:border-0`}>
              <div className="absolute bottom-4 right-4 text-6xl font-black text-white/5">{q.id}</div>
              <div className="absolute top-4 left-4 text-xs font-mono text-gray-500 uppercase tracking-widest">{q.label}</div>
            </div>
          ))}
        </div>

        {/* Central Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] z-0"></div>

        {/* Events */}
        {events.map((ev, idx) => {
          const leftPos = getPosition(ev.date);
          const isTop = idx % 2 === 0; 
          
          // Visual Collision Logic
          const baseHeight = 40;
          const highlightExtra = 80;
          const stagger = (idx % 3) * 15;
          
          const totalHeight = baseHeight + (ev.highlight ? highlightExtra : 0) + stagger;
          const offset = isTop ? -totalHeight : totalHeight;
          
          const Icon = ev.type.icon;

          return (
            <div 
              key={ev.id}
              className="absolute top-1/2 flex flex-col items-center group z-10 hover:z-50 transition-all duration-300"
              style={{ left: `${leftPos}%`, transform: `translate(-50%, -50%)` }}
            >
              <div 
                className={`w-px bg-gray-600 absolute left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:bg-white/50
                  ${isTop ? 'bottom-1/2 origin-bottom' : 'top-1/2 origin-top'}
                  ${ev.highlight ? 'bg-yellow-500/50 w-[2px]' : ''}
                `}
                style={{ height: `${Math.abs(offset) + 20}px` }}
              ></div>

              <div 
                className={`
                  relative transition-all duration-500 cursor-pointer
                  ${isTop ? `mb-[${Math.abs(offset)}px] -translate-y-[${Math.abs(offset)}px]` : `mt-[${Math.abs(offset)}px] translate-y-[${Math.abs(offset)}px]`}
                `}
                style={{ transform: `translateY(${offset}px)` }}
              >
                <div className={`
                  w-8 h-8 rounded-full ${ev.type.color} border-4 border-[#111] shadow-lg flex items-center justify-center
                  group-hover:scale-125 transition-transform duration-300 ${ev.type.shadow}
                  ${ev.highlight ? 'scale-125 border-yellow-500/50' : ''}
                `}>
                  <Icon size={14} className="text-white" />
                </div>

                <div className={`
                  absolute left-1/2 -translate-x-1/2 w-40 text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0
                  ${isTop ? '-top-10' : '-bottom-10'}
                `}>
                  <div className="text-[10px] text-gray-400 font-mono">{ev.date.slice(5)}</div>
                  <div className={`text-xs font-bold truncate leading-tight ${ev.highlight ? 'text-yellow-400 text-sm' : 'text-gray-300'}`}>
                    {ev.name}
                  </div>
                </div>

                <div className={`
                  absolute left-1/2 -translate-x-1/2 w-64 bg-[#1a1a1a] border border-gray-700 rounded-xl p-4 shadow-2xl
                  opacity-0 scale-90 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                  transition-all duration-300 origin-center z-50
                  ${isTop ? 'bottom-full mb-4' : 'top-full mt-4'}
                `}>
                  <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] border-r border-b border-gray-700 rotate-45 ${isTop ? '-bottom-1.5 border-t-0 border-l-0' : '-top-1.5 border-b-0 border-r-0 border-t border-l bg-[#1a1a1a]'}`}></div>

                  <div className="flex justify-between items-start mb-3 relative z-10">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${ev.type.color}`}>
                      {ev.type.label}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded border border-green-900 text-green-500 bg-green-900/20`}>
                      {ev.status}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-white text-sm mb-1 leading-tight">{ev.name}</h4>
                  <div className="text-xs text-gray-400 font-mono mb-3 flex items-center gap-1">
                    <Calendar size={12}/> {ev.date}
                  </div>

                  {ev.highlight && (
                    <div className="pt-3 border-t border-gray-800 text-right">
                      <div className="text-[10px] text-yellow-500 font-bold flex items-center justify-end gap-1"><Award size={10}/> Focus Activity (High Priority)</div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* --- MOBILE VIEW (Vertical Modern Timeline) --- */}
      <div className="lg:hidden relative pl-4 border-l-2 border-gray-800 ml-3 space-y-10">
        {events.map((ev, idx) => {
            const Icon = ev.type.icon;
            return (
                <div key={idx} className="relative pl-6">
                    {/* Timeline Dot */}
                    <div className={`
                        absolute -left-[23px] top-0 w-5 h-5 rounded-full border-4 border-[#111] ${ev.type.color} ${ev.type.shadow}
                        flex items-center justify-center z-10
                    `}>
                    </div>

                    {/* Content Card */}
                    <div className={`
                        relative bg-gray-900/60 backdrop-blur-sm border rounded-xl p-4 transition-all duration-300
                        ${ev.highlight 
                            ? 'border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.1)]' 
                            : 'border-gray-800'
                        }
                    `}>
                        {/* High Priority Badge */}
                        {ev.highlight && (
                            <div className="absolute -top-3 right-4 bg-yellow-600 text-black text-[10px] font-black px-2 py-0.5 rounded shadow-lg flex items-center gap-1">
                                <Award size={10} /> KEY EVENT
                            </div>
                        )}

                        <div className="flex items-center gap-2 mb-2">
                             <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                                <Calendar size={12}/> {ev.date}
                             </span>
                             <span className="text-gray-600 text-[10px]">•</span>
                             <span className={`text-[10px] font-bold ${ev.type.text}`}>{ev.type.label}</span>
                        </div>

                        <h4 className="text-white font-bold text-lg mb-2 leading-tight">{ev.name}</h4>

                        <div className="flex justify-between items-center pt-3 border-t border-white/5">
                             <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Icon size={14} className={ev.type.text} />
                                {ev.status}
                             </div>
                        </div>
                    </div>
                </div>
            );
        })}
      </div>

    </section>
  );
};