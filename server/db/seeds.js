use as_events;
db.dropDatabase();

db.events.insertMany([

  {
    name: "PIMScale: an introdcution for beginners",
    url: "url will go here",
    description: "go from 4.1 to 7.4 in no time",
    startDate: "2019 - 07 - 01",
    endDate:"2019 - 07 - 02",
    location: {
      address: {
        streetAddress: "2 get-my-own Way",
        addressLocality: "Glasgow",
        addressCountry: "Scotland"
      },
      geo: {
        latitude: "57.675867",
        longitude: "-3.87667"
      },
      country: {
        name: "Scotland"
      },
    },
  },

  {
    name: "Extreme Knitting",
    url: "url will go here",
    description: "Bungee knitting. Whats not to love?",
    startDate: "2019 - 07 - 03",
    endDate:"2019 - 07 - 04",
    location: {
      address: {
        streetAddress: "3/4 five-six crescent ",
        addressLocality: "Glasgow",
        addressCountry: "Scotland"
      },
      geo: {
        latitude: "15.1453",
        longitude: "324.12351245"
      },
      country: {
        name: "Scotland"
      },
    },
  },

  {
    name: "Flappy Bird VR",
    url: "url will go here",
    description: "Flap flap flap",
    startDate: "2019 - 07 - 05",
    endDate:"2019 - 07 - 06",
    location: {
      address: {
        streetAddress: "2345 Fake Avenue",
        addressLocality: "Edinburgh",
        addressCountry: "Scotland"
      },
      geo: {
        latitude: "54.1254",
        longitude: "-3.2568"
      },
      country: {
        name: "Scotland"
      },
    },
  },

  {
    name: "Mills and Boon: a retrospective",
    url: "url will go here",
    description: "Delivered via interperative dance",
    startDate: "2019 - 07 - 07",
    endDate:"2019 - 07 - 08",
    location: {
      address: {
        streetAddress: "745 less-taken road",
        addressLocality: "Edinburgh",
        addressCountry: "Scotland"
      },
      geo: {
        latitude: "254.2363754",
        longitude: "-23.23645"
      },
      country: {
        name: "Scotland"
      },
    },
  },

  {
    name: "Goblins: identification, ice breakers and relationships",
    url: "url will go here",
    description: "All you need to know to achieve basic goblin husbandry",
    startDate: "2019 - 07 - 09",
    endDate:"2019 - 07 - 10",
    location: {
      address: {
        streetAddress: "15 Radical Road",
        addressLocality: "Aberdeen",
        addressCountry: "Scotland"
      },
      geo: {
        latitude: "5.8768",
        longitude: "7.546"
      },
      country: {
        name: "Scotland"
      },
    },
  },

  {
    name: "API's for beginners",
    url: "url will go here",
    description: "Learn how to create terrible seed data for well built API's",
    startDate: "019 - 07 - 11",
    endDate:"019 - 07 - 12",
    location: {
      address: {
        streetAddress: "7 Lonesome road",
        addressLocality: "Edinburgh",
        addressCountry: "Scotland"
      },
      geo: {
        latitude: "76.65765",
        longitude: "-3.6788"
      },
      country: {
        name: "Scotland"
      },
    },
  },

]);
