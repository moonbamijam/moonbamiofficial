const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const Timeline = [
  {
    date: "present",
    type: "present",
    note: "This is me now!",
    message:
      "For all these years, I've learned that experience is the best sensei!",
  },
  {
    date: new Date(Date.UTC(2002, 7, 15)).toLocaleDateString("en-PH", options),
    type: "born",
    note: "Happy birthday to me!",
    message: "This is the day I was born, where it all started <3",
  },
  {
    date: new Date(Date.UTC(2009, 5, 17)).toLocaleDateString("en-PH", options),
    type: "school",
    note: "Starting to learn",
    message: "I was really nervous at my first day in school XD",
  },
  {
    date: new Date(Date.UTC(2012, 9, 7)).toLocaleDateString("en-PH", options),
    type: "religion",
    note: "First communion",
    message: "My first time accepting the bread and wine from our lord",
  },
  {
    date: new Date(Date.UTC(2015, 2, 26)).toLocaleDateString("en-PH", options),
    type: "school",
    note: "First time graduating!",
    message:
      "Really happy about this day, also feeling sad because of the parting part with good ol' friends",
  },
  {
    date: new Date(Date.UTC(2019, 3, 13)).toLocaleDateString("en-PH", options),
    type: "school",
    note: "Finally graduated Junior High!",
    message: "One of the happiest times of my life was junior high school. ",
  },
  {
    date: new Date(Date.UTC(2021, 4, 14)).toLocaleDateString("en-PH", options),
    type: "school",
    note: "Done with Senior High.",
    message:
      "I've only enjoyed half of it since unfortunately, COVID pandemic occurs at the second year.",
  },
  {
    date: new Date(Date.UTC(2023, 3, 26)).toLocaleDateString("en-PH", options),
    type: "game",
    note: "Played Honkai: Star Rail",
    message:
      "Kafka was one of the reason why I played this game. Now, Firefly is the reason why I continued playing.",
  },
  {
    date: new Date(Date.UTC(2023, 1, 22)).toLocaleDateString("en-PH", options),
    type: "game",
    note: "Played Blue Archive",
    message:
      "I forgot when did I really started BA, but I am sure my first account was created on Aru's first banner",
  },
  {
    date: new Date(Date.UTC(2020, 11, 16)).toLocaleDateString("en-PH", options),
    type: "game",
    note: "Played Illusion Connect",
    message: "I miss this game.",
  },
  {
    date: new Date(Date.UTC(2021, 8, 13)).toLocaleDateString("en-PH", options),
    type: "school",
    note: "Started college at CVSU Bacoor",
    message:
      "This is where I started getting interest in something I didn't expect I will.",
  },
  {
    date: new Date(Date.UTC(2021, 7, 30)).toLocaleDateString("en-PH", options),
    type: "game",
    note: "Played Genshin Impact",
    message:
      "Started playing Genshin Impact in my main account because of Kamisato Ayaka.",
  },
  {
    date: new Date(Date.UTC(2023, 7, 15)).toLocaleDateString("en-PH", options),
    type: "birthday",
    note: "Happy 21 years old!",
    message: "Yes, my Debut date. I'm officially matured XD",
  },
  {
    date: new Date(Date.UTC(2023, 3, 15)).toLocaleDateString("en-PH", options),
    type: "programming",
    note: "Where it all started",
    message:
      "The day I started having interest in programming. This day is the day where it all started!",
  },
  {
    date: new Date(Date.UTC(2023, 9, 29)).toLocaleDateString("en-PH", options),
    type: "programming",
    note: "Created my portfolio",
    message:
      "I want to create my own website that contains information about me. A website that I can share with other people.",
  },
  {
    date: new Date(Date.UTC(2023, 7, 1)).toLocaleDateString("en-PH", options),
    type: "programming",
    note: "Joined GitHub",
    message:
      "I've decided that I want to level things up in my programming career.",
  },
  {
    date: new Date(Date.UTC(2023, 7, 31)).toLocaleDateString("en-PH", options),
    type: "programming",
    note: "Created tsukiwa",
    message:
      "One of the reason why I started programming. I want to create something that will someday make people love!",
  },
  {
    date: new Date(Date.UTC(2024, 5, 22)).toLocaleDateString("en-PH", options),
    type: "programming",
    note: "First commissioned project",
    message:
      "This was my very first project that I started to earn money! Even though it was a rushed project, I have fun developing it alongside my partner in crime, Ecchiko.",
  },
];
