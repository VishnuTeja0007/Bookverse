const booksData = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    description: "A dystopian novel exploring surveillance, totalitarianism, and loss of freedom.",
    rating: 4.7
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
    description: "A story of racial injustice and moral courage in a small American town.",
    rating: 4.8
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8128691-L.jpg",
    description: "A philosophical journey about following dreams and discovering purpose.",
    rating: 4.5
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/10594765-L.jpg",
    description: "A guide to building good habits and breaking bad ones through small changes.",
    rating: 4.9
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/8370226-L.jpg",
    description: "A brief history of humankind from ancient times to the modern era.",
    rating: 4.6
  },
  {
    id: 6,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: "Explains how humans think, make decisions, and evaluate risks.",
    rating: 4.4
  },
  {
    id: 7,
    title: "Meditations",
    author: "Marcus Aurelius",
    category: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    description: "Stoic philosophy reflections on discipline, virtue, and inner peace.",
    rating: 4.6
  },
  {
    id: 8,
    title: "The Republic",
    author: "Plato",
    category: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/8235113-L.jpg",
    description: "A philosophical discussion on justice, politics, and the ideal society.",
    rating: 4.3
  },
  {
    id: 9,
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    category: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    description: "Challenges traditional morality and explores individual freedom.",
    rating: 4.2
  },
  {
    id: 10,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    description: "An introduction to cosmology, black holes, and the universe.",
    rating: 4.5
  },
  {
    id: 11,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8235083-L.jpg",
    description: "Explains evolution through the lens of genes and natural selection.",
    rating: 4.4
  },
  {
    id: 12,
    title: "Cosmos",
    author: "Carl Sagan",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8108696-L.jpg",
    description: "A journey through space, science, and the history of human knowledge.",
    rating: 4.8
  },
  {
    id: 13,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/7222161-L.jpg",
    description: "A tragic story of wealth, love, and the American Dream.",
    rating: 4.4
  },
  {
    id: 14,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8775116-L.jpg",
    description: "A dystopian novel exploring technology, control, and happiness.",
    rating: 4.3
  },
  {
    id: 15,
    title: "Man’s Search for Meaning",
    author: "Viktor Frankl",
    category: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/8370536-L.jpg",
    description: "A powerful reflection on finding purpose through suffering.",
    rating: 4.9
  },
  {
    id: 16,
    title: "The Origin of Species",
    author: "Charles Darwin",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8231994-L.jpg",
    description: "The foundational work on evolution and natural selection.",
    rating: 4.1
  },
  {
    id: 17,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/8099256-L.jpg",
    description: "Lessons on financial literacy and mindset.",
    rating: 4.3
  },
  {
    id: 18,
    title: "Ikigai",
    author: "Héctor García",
    category: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/10594788-L.jpg",
    description: "Explores the Japanese concept of purpose and happiness.",
    rating: 4.6
  },
  {
    id: 19,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/6955746-L.jpg",
    description: "How habits work and how they can be changed.",
    rating: 4.4
  },
  {
    id: 20,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/9251996-L.jpg",
    description: "A dystopian world where books are banned and burned.",
    rating: 4.5
  },
  {
    id: 21,
    title: "The Gene",
    author: "Siddhartha Mukherjee",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8370241-L.jpg",
    description: "A history of genetic science and its ethical implications.",
    rating: 4.6
  },
  {
    id: 22,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/7109862-L.jpg",
    description: "A guide to writing clean, readable, and maintainable code.",
    rating: 4.7
  },
  {
    id: 23,
    title: "The Stranger",
    author: "Albert Camus",
    category: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/8774902-L.jpg",
    description: "An existential novel exploring absurdism and alienation.",
    rating: 4.2
  },
  {
    id: 24,
    title: "Dune",
    author: "Frank Herbert",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8101346-L.jpg",
    description: "A science fiction epic of politics, power, and survival.",
    rating: 4.6
  },
  {
    id: 25,
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8370249-L.jpg",
    description: "Simplified explanations of astrophysics concepts.",
    rating: 4.5
  },{
    id: 26,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/10594801-L.jpg",
    description: "A psychological thriller about a woman's act of violence against her husband.",
    rating: 4.5
  },
  {
    id: 27,
    title: "Why We Sleep",
    author: "Matthew Walker",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8370211-L.jpg",
    description: "Explores the vital importance of sleep for health and cognitive function.",
    rating: 4.8
  },
  {
    id: 28,
    title: "The War of Art",
    author: "Steven Pressfield",
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/10594795-L.jpg",
    description: "A guide to overcoming creative blocks and resistance.",
    rating: 4.7
  },
  {
    id: 29,
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    category: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/8235081-L.jpg",
    description: "An examination of morality and the 'will to power'.",
    rating: 4.4
  },
  {
    id: 30,
    title: "Circe",
    author: "Madeline Miller",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8370215-L.jpg",
    description: "A reimagining of the life of the Greek goddess and enchantress Circe.",
    rating: 4.6
  },
  {
    id: 31,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/10594782-L.jpg",
    description: "Essential advice for software developers to improve their craft.",
    rating: 4.9
  },
  {
    id: 32,
    title: "The Daily Stoic",
    author: "Ryan Holiday",
    category: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/10594770-L.jpg",
    description: "366 days of Stoic insights and exercises.",
    rating: 4.7
  },
  {
    id: 33,
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8370200-L.jpg",
    description: "How trauma affects the brain and body, and paths to recovery.",
    rating: 4.8
  },
  {
    id: 34,
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/10594805-L.jpg",
    description: "A lone astronaut must save Earth from an interstellar threat.",
    rating: 4.9
  },
  {
    id: 35,
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    category: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/8235075-L.jpg",
    description: "Finding purpose in the face of unimaginable suffering.",
    rating: 4.9
  },
  {
    id: 36,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/8370222-L.jpg",
    description: "Rules for focused success in a distracted world.",
    rating: 4.6
  },
  {
    id: 37,
    title: "Brief Answers to the Big Questions",
    author: "Stephen Hawking",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/10594760-L.jpg",
    description: "Hawking's final thoughts on the universe's greatest mysteries.",
    rating: 4.7
  },
  {
    id: 38,
    title: "The Myth of Sisyphus",
    author: "Albert Camus",
    category: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/8235100-L.jpg",
    description: "An essay introducing the philosophy of the absurd.",
    rating: 4.3
  },
  {
    id: 39,
    title: "Normal People",
    author: "Sally Rooney",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/10594790-L.jpg",
    description: "A complex exploration of the relationship between two young adults.",
    rating: 4.2
  },
  {
    id: 40,
    title: "Grit",
    author: "Angela Duckworth",
    category: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/8370233-L.jpg",
    description: "Why passion and resilience are the secrets to success.",
    rating: 4.5
  },
  {
    id: 41,
    title: "The Hidden Life of Trees",
    author: "Peter Wohlleben",
    category: "Science",
    image: "https://covers.openlibrary.org/b/id/8231900-L.jpg",
    description: "How trees communicate and interact with each other.",
    rating: 4.6
  },
  {
    id: 42,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8370205-L.jpg",
    description: "A mathematician predicts the fall of a galactic empire.",
    rating: 4.7
  }

];

export default booksData;
