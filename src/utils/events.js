export const events = [
  {
    category: "recommended_events",
    id: "rec-1",
    title: "Go Concurrency Workshop",
    tags: ["Technology", "Programming"],
    date: "Aug 22, 2026 - 09:00 WIB",
    location: "Bandung",
    attendees: 48,
    capacity: 160,
    image: "goConcurrencyWorkshop",
    action: "Join Event",
    content: ""
  },
  {
    category: "recommended_events",
    id: "rec-2",
    title: "AI Product Design Summit",
    tags: ["Design"],
    date: "Sep 5, 2026 - 09:00 WIB",
    location: "Jakarta",
    attendees: 234,
    capacity: 300,
    image: "aiProductDesignSummit",
    action: "Join Event",
    content: ""
  },
  {
    category: "recommended_events",
    id: "rec-3",
    title: "UX Research Deep Dive",
    tags: ["Design"],
    date: "Oct 22, 2026 - 16:00 WIB",
    location: "Bandung",
    attendees: 89,
    capacity: 100,
    image: "uxResearchDeepDive",
    action: "Join Event",
    content: ""
  },

  // --- UPCOMING EVENTS ---
  {
    category: "upcoming_events",
    id: "up-1",
    title: "Go Concurrency Workshop",
    tags: ["Technology", "Programming"],
    date: "Aug 22, 2026 - 09:00 WIB",
    location: "Bandung",
    attendees: 48,
    capacity: 160,
    image: "goConcurrencyWorkshop",
    action: "Join Event",
    content: ""
  },
  {
    category: "upcoming_events",
    id: "up-2",
    title: "AI Product Design Summit",
    tags: ["Design"],
    date: "Sep 5, 2026 - 09:00 WIB",
    location: "Jakarta",
    attendees: 234,
    capacity: 300,
    image: "aiProductDesignSummit",
    action: "Join Event",
    content: ""
  },
  {
    category: "upcoming_events",
    id: "up-3",
    title: "Frontend Craft Conference",
    tags: ["Technology"],
    date: "Oct 12, 2026 - 09:00 WIB",
    location: "Bandung",
    attendees: 187,
    capacity: 200,
    image: "frontendCraftConference",
    action: "Registered",
    status: "registered",
    content: ""
  },
  {
    category: "upcoming_events",
    id: "up-4",
    title: "Product Management Masterclass",
    tags: ["Online"],
    date: "Sep 18, 2026 - 10:00 WIB",
    location: "Online Event",
    attendees: 80,
    capacity: 150,
    image: "productManagementMasterclass",
    action: "Join Event",
    content: ""
  },
  {
    category: "upcoming_events",
    id: "up-5",
    title: "Music Production Bootcamp",
    tags: ["Music"],
    date: "Nov 3, 2026 - 13:00 WIB",
    location: "Surabaya",
    attendees: 45,
    capacity: 60,
    image: "musicProductionBootcamp",
    action: "Join Event",
    content: ""
  },
  {
    category: "upcoming_events",
    id: "up-6",
    title: "Startup Pitch Night",
    tags: ["Business"],
    date: "Sep 28, 2026 - 18:30 WIB",
    location: "Jakarta",
    attendees: 120,
    capacity: 120,
    image: "startupPitchNight",
    action: "Full",
    status: "full",
    content: ""
  },

  // --- POPULAR COMMUNITIES ---
  {
    category: "popular_communities",
    id: "comm-1",
    name: "Bandung Go Community",
    description: "The premier Go programming community in Bandung — weekly meetups, workshops, and...",
    tags: ["Technology", "Programming"],
    members: "847 members",
    upcoming_events_count: "3 upcoming",
    image: "bandungGoCommunity",
    status: "Joined",
    content: ""
  },
  {
    category: "popular_communities",
    id: "comm-2",
    name: "Jakarta AI & ML Club",
    description: "Researchers, practitioners, and enthusiasts explorin// Menggunakan alias terkaitg machine learning, LLMs, and the...",
    tags: ["AI", "Technology"],
    members: "2,541 members",
    upcoming_events_count: "5 upcoming",
    image: "jakartaAIMLClub",
    status: "Joined",
    content: ""
  },
  {
    category: "popular_communities",
    id: "comm-3",
    name: "Indonesia Frontend Devs",
    description: "The largest frontend community in Indonesia. React, Vue, Svelte, performance, accessibility...",
    tags: ["Technology", "Programming"],
    members: "5,021 members",
    upcoming_events_count: "4 upcoming",
    image: "indonesiaFrontendDevs",
    action: "Join Community",
    content: ""
  },
  {
    category: "popular_communities",
    id: "comm-4",
    name: "Product Minds Indonesia",
    description: "Product managers, designers, and builders sharing frameworks, tools, and career...",
    tags: ["Business", "Career"],
    members: "1,263 members",
    upcoming_events_count: "2 upcoming",
    image: "productMindsIndonesia",
    action: "Join Community",
    content: ""
  },

  // --- TESTIMONIALS ---
  {
    category: "testimonials",
    id: "test-1",
    quote: "Eventhub completely changed how I network. I met my current co-founder at a Jakarta AI meetup I found here. The community pages make it so easy to find people who are into the same things.",
    author_name: "Raisa Nurdiana",
    author_role: "Frontend Engineer - Cakrawala Digital",
    image: "avatar1",
    content: ""
  },
  {
    category: "testimonials",
    id: "test-2",
    quote: "We used to manage event registrations over WhatsApp groups. Switching to EventHub as our organizer platform cut our admin overhead in half and attendance actually went up.",
    author_name: "Bima Hartanto",
    author_role: "Product Manager - Nusantara Labs",
    image: "avatar2",
    content: ""
  },
  {
    category: "testimonials",
    id: "test-3",
    quote: "I love that I can filter by city and category in one place. Found a design sprint workshop in Bandung I never would have discovered otherwise — ended up being one of the best events I've attended.",
    author_name: "Indira Kusuma",
    author_role: "UI Designer - Aruna Kreativa Studio",
    image: "avatar3",
    content: ""
  }
];

export function filterEvents(category, limit) {
    const filtered = events.filter((e) => e.category === category);
    
    return limit ? filtered.slice(0, limit) : filtered;
}

export function filterData(keyword) {
  const query = keyword.toLowerCase().trim();
  
  if (!query) return dataArray;

  return events.filter(item => {
    const matchCategory = item.category?.toLowerCase().includes(query);

    const matchNameOrTitle = 
      (item.name && item.name.toLowerCase().includes(query)) ||
      (item.title && item.title.toLowerCase().includes(query));

    const matchLocation = item.location?.toLowerCase().includes(query);

    const matchTags = Array.isArray(item.tags) && 
      item.tags.some(tag => tag.toLowerCase().includes(query));

    return matchCategory || matchNameOrTitle || matchLocation || matchTags;
  });
}

export function findEventsById (id) {
    return events.find((e)=> e.id === id)
}

export function getAllCategories() {
  return [...new Set(events.map(item => item.category).filter(Boolean))];
}