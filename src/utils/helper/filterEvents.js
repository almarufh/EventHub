function filterEvents(events, filters = {}) {
    let { category, community, limit, search, sorted, location } = filters;

    if (category === "all") {
        category = null
    }
    
    let filtered = [...events];
    
    if (search) {
        const keyword = search.toLowerCase();
        filtered = filtered.filter((event) => event.title && event.title.toLowerCase().includes(keyword));
    }

    if (location) {
        const keyword = location.toLowerCase();
        filtered = filtered.filter((event) => event.location && event.location.toLowerCase().includes(keyword));
    }
    
    if (community) {
        filtered = filtered.filter((event) => event.communityId && event.communityId.toLowerCase() === community.toLowerCase());
    }

    if (category) {
        const targetCategory = category.toLowerCase();
        filtered = filtered.filter((event) => event.categoryIds?.some((catId) => catId.toLowerCase() === targetCategory));
    }

    if (limit) {
        filtered = filtered.slice(0, limit);
    }
    
    if (sorted) {
        switch (sorted.toLowerCase()) {
            case "upcomming":
                filtered = filtered
                    .filter(event => (parseInt(event.date.start) || 0) >= Date.now())
                    .sort((a, b) => {
                        const upcommingA = parseInt(a.date.start) || 0;
                        const upcommingB = parseInt(b.date.start) || 0;
                        return upcommingB - upcommingA;
                    });
                break;
            case "most popular":
                filtered.sort((a, b) => {
                    const popularA = a.attendees || 0;
                    const popularB = b.attendees || 0;
                    return popularB - popularA;
                });
                break;
            case "almost full":
                filtered.sort((a, b) => {
                    const fullA = a.capacity - a.attendees || 0;
                    const fullB = b.capacity - b.attendees || 0;
                    return fullA - fullB;
                });
                break;
            case "recently added":
                filtered.sort((a, b) => {
                    const timeA = parseInt(a.createdAt) || 0;
                    const timeB = parseInt(b.createdAt) || 0;
                    return timeB - timeA;
                });
                break;
            default:
                break;
        }
    }

    return filtered;
}

export default filterEvents;