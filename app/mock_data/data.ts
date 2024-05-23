// using primitive types throughout for convenience
export type Post = {
  id: number;
  user: string;
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
    text: "feeling great today",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 2,
    user: "Sarah",
    text: "excellent weather we're having",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 3,
    user: "James",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam facere voluptates neque ex, nam saepe similique, fuga necessitatibus, animi perspiciatis odit! Commodi earum architecto autem natus. Itaque, temporibus distinctio?",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 4,
    user: "Terry",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 5,
    user: "Steven",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 6,
    user: "Alice",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 7,
    user: "Ceaser",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 8,
    user: "John",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 9,
    user: "Meghan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque excepturi nam repellat obcaecati aliquid quasi modi quisquam ut libero, blanditiis adipisci nobis ipsam debitis quam. Cumque reiciendis est quasi!",
    likes: 50,
    time: "1pm",
    date: "5/22/2024",
  },
  {
    id: 10,
    user: "Spongebob",
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
