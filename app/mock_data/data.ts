// using primitive types throughout for convenience
export type Post = {
  id: number;
  user: string;
  user_id: string;
  text: string;
  likes: number;
  date: string;
  time: string;
};

export type User = {
  id: number;
  name: string;
  birthday: string;
  friends: string[];
  about: string;
};

export const allPosts: Post[] = [
  {
    id: 1,
    user: "Tom",
    user_id: "2",
    text: "feeling great today",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 2,
    user: "Sarah",
    user_id: "3",
    text: "excellent weather we're having",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 3,
    user: "James",
    user_id: "4",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam facere voluptates neque ex, nam saepe similique, fuga necessitatibus, animi perspiciatis odit! Commodi earum architecto autem natus. Itaque, temporibus distinctio?",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 4,
    user: "Terry",
    user_id: "5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 5,
    user: "Steven",
    user_id: "6",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 6,
    user: "Alice",
    user_id: "7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 7,
    user: "Ceaser",
    user_id: "8",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 8,
    user: "John",
    user_id: "9",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 9,
    user: "Meghan",
    user_id: "10",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 10,
    user: "Spongebob",
    user_id: "8",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
];

export const me: User = {
  id: 1,
  name: "Vance",
  birthday: "01/06/1991",
  friends: ["Meghan", "Spongebob", "Steven", "Alice"],
  about: "This is a story about how my life got flip-turned upside-down",
};

export const users: User[] = [
  {
    id: 1,
    name: "Vance",
    birthday: "01/06/1991",
    friends: ["Meghan", "Spongebob", "Steven", "Alice"],
    about: "This is a story about how my life got flip-turned upside-down.",
  },
  {
    id: 10,
    name: "Meghan",
    birthday: "05/11/1992",
    friends: ["Vance", "Spongebob", "Steven", "Alice"],
    about: "Sugar, we're going down swingin!",
  },
  {
    id: 8,
    name: "Spongebob",
    birthday: "02/18/1990",
    friends: ["Vance", "Spongebob", "Steven", "Alice"],
    about: "If you're getting wet, you might as well swim. ",
  },
  {
    id: 7,
    name: "Alice",
    birthday: "04/12/1969",
    friends: ["Vance", "Spongebob", "Steven", "Alice"],
    about: "How strange it is to be anything at all!",
  },
  {
    id: 6,
    name: "Steven",
    birthday: "07/04/1989",
    friends: ["Vance", "Spongebob", "Alice"],
    about: "Hi, I'm Steven!",
  },
];
