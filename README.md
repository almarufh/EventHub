# STRUCTUR DATA

## USERS
```json
[
    { 
        "id": "user-1", 
        "name": "TechHub ID", 
        "email": "contact@techhub.id", 
        "location": "Jakarta",
        "bio": "",
        "isAttendee": true,
        "status": "active", // active || suspend
        "profesionals": {
            "role" : "organizer", // attendee || speaker || organizer
            "job": "Staf Enginer", // any profesionals
            "office": "Tokopedia" // anny perusahaan
        },
        "communitys": [
            {
                "communityId": "comm-1",
                "joined": {
                    "status": true,
                    "date": "1787742224923"
                },
                "saved": {
                    "status": true,
                    "date": "1787742224923"
                }
            }
        ],
        "events": [
            {
                "eventsId": "comm-1",
                "joined": {
                    "status": true,
                    "date": "1787742224923"
                },
                "saved": {
                    "status": true,
                    "date": "1787742224923"
                }
            }
        ],
        "image": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=400&q=80",
        "createdAt": "1787742224923",
        "updatedAt": "1787742224923"
    }
]
```

## Events
```json
[
  {
    "id": "evt-1",
    "communityId": "comm-1",
    "organizerId": "orgz-2",
    "speakerIds": ["spk-1", "spk-2"],
    "categoryIds": ["ctg-1", "ctg-2"],
    "title": "Go Concurrency Workshop",
    "date": {
      "start" : "1787742224923",
      "end" : "1787742224923"
    },
    "location": "Bandung",
    "capacity": 160,
    "attendees": 148,
    "status": "join",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    "description": "Workshop mendalam mengenai pola konkurensi di Go meliputi goroutines, channels, dan sync package.",
    "createdAt": "1787742224923",
    "updatedAt": "1787742224923"
  }
]
```

### CATEGORY
```json
[
    {
        "id": "ctg-1",
        "title": "Technology"
    },
    {
        "id": "ctg-2",
        "title": "Ai"
    }
]
```

## Communities
```json
[
    {
      "id": "comm-2",
      "tittle": "Bandung Go Community",
      "categoryIds": ["ctg-1", "ctg-2"],
      "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      "description": "The premier Go programming community in Bandung — weekly meetups, workshops, and concurrent backend engineering discussions."
    }
]
```

### DISCUSSION
```json
[
    { 
        "id": "dcs-1",
        "userId": "user-1",
        "from" : {
            "type": "event", // event || communities
            "id": "evt-1"
        },
        "message": "Yes! The afternoon session is entirely hands-on. Bring your laptop with Go 1.22+ installed.",
        "createdAt": "1787742224923",
        "updatedAt": "1787742224923"
    }
]
```