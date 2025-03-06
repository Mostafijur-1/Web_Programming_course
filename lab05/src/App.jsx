import BookLibrary from "./components/BookLibrary";
import ProfileCard from "./components/ProfileCard";

const profiles = [
  {
    name: "Alice Johnson",
    jobTitle: "Software Engineer",
    company: "TechCorp",
    bio: "Passionate developer with expertise in building scalable web applications.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Bob Smith",
    jobTitle: "Product Manager",
    company: "Innovate Inc.",
    bio: "Experienced in leading cross-functional teams to deliver impactful products.",
    skills: ["Agile", "Scrum", "UI/UX", "Product Strategy"],
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Charlie Brown",
    jobTitle: "Data Scientist",
    company: "DataLabs",
    bio: "Specialist in machine learning and AI-driven solutions.",
    skills: ["Python", "TensorFlow", "SQL", "Data Visualization"],
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Diana Prince",
    jobTitle: "Cybersecurity Analyst",
    company: "SecureNet",
    bio: "Protecting systems and networks with cutting-edge security measures.",
    skills: ["Ethical Hacking", "Network Security", "Cryptography"],
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const books = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    description:
      "A handbook of agile software craftsmanship, focusing on writing clean and maintainable code.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/51b7XbfMIIL._SL500_.jpg",
    genre: "Computer",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description:
      "A landmark volume in science writing that explores the mysteries of time and the universe.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/51fGJQnMAVL._SL500_.jpg",
    genre: "Physics",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description:
      "A deep dive into the history and impact of Homo sapiens on the world.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/41y+taU6SxL._SL500_.jpg",
    genre: "History",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    description:
      "A must-read book for software developers, covering best practices and productivity techniques.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/41as+WafrFL._SL500_.jpg",
    genre: "Computer",
  },
  {
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
    description:
      "An easy-to-digest guide to understanding astrophysics for the curious mind.",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/51t1xxzA99L._SL500_.jpg",
    genre: "Physics",
  },
];

function App() {
  return (
    <div className="p-10">
      <h1 className="text-3xl text-center m-8 bg-cyan-400 p-4">
        Task1: Personal Profile Card
      </h1>
      <div className="flex flex-wrap">
        <ProfileCard
          name={profiles[0].name}
          jobTitle={profiles[0].jobTitle}
          company={profiles[0].company}
          bio={profiles[0].bio}
          skills={profiles[0].skills}
          imageUrl={profiles[0].imageUrl}
        />
        <ProfileCard
          name={profiles[1].name}
          jobTitle={profiles[1].jobTitle}
          company={profiles[1].company}
          bio={profiles[1].bio}
          skills={profiles[1].skills}
          imageUrl={profiles[1].imageUrl}
        />
        <ProfileCard
          name={profiles[2].name}
          jobTitle={profiles[2].jobTitle}
          company={profiles[2].company}
          bio={profiles[2].bio}
          skills={profiles[2].skills}
          imageUrl={profiles[2].imageUrl}
        />
      </div>

      <h1 className="text-3xl text-center m-8 bg-cyan-400 p-4">
        Task 2: Building a Book Library Interface
      </h1>

      <BookLibrary books={books} />
    </div>
  );
}

export default App;
