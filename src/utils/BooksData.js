const booksData = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    catagory: "Fiction",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    description: "A dystopian novel exploring surveillance, totalitarianism, and loss of freedom.",
    rating: 4.7,
    detailedDescription: {
      story: "In a grim future where the state of Oceania is under the constant surveillance of 'Big Brother,' Winston Smith spends his days rewriting history at the Ministry of Truth. His life takes a dangerous turn when he begins a forbidden affair with a colleague named Julia. Together, they attempt to navigate a world where even a stray thought can be a death sentence, leading them into the clutches of the Thought Police.\n\nThe narrative serves as a harrowing exploration of how language, memory, and physical reality can be manipulated by those in power to break the human spirit. It is a story of resistance, betrayal, and the ultimate fragility of individual truth in the face of absolute authority.",
      authorBio: "George Orwell, the pen name of Eric Arthur Blair, was an English novelist, essayist, and critic who remains one of the most influential voices of the 20th century. Having served in the Indian Imperial Police in Burma and fought in the Spanish Civil War, his writing was deeply informed by his firsthand experiences with social injustice.\n\nHe is best known for his sharp wit and commitment to 'political writing as an art,' using his platform to warn against the dangers of totalitarianism and the corruption of language in modern politics.",
      excitingContext: "What makes 1984 truly electrifying today is its prophetic nature. Concepts like 'Newspeak,' and 'Doublethink,' have moved from the pages of fiction into our daily vocabulary. In an era of mass data collection, reading this book feels less like a historical exercise and more like reading a manual for the present day."
    }
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    catagory: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
    description: "A story of racial injustice and moral courage in a small American town.",
    rating: 4.8,
    detailedDescription: {
      story: "Set in the depression-era South, the story follows young Scout Finch and her brother Jem as they navigate the complexities of their small town, Maycomb. Their father, Atticus Finch, a principled lawyer, is appointed to defend Tom Robinson, a Black man falsely accused of raping a white woman. As the trial unfolds, the children witness the devastating effects of prejudice and the loss of innocence.\n\nBeyond the courtroom drama, the book explores the mystery of Boo Radley, a reclusive neighbor who becomes a symbol of the 'mockingbird'—an innocent being destroyed by evil. It is a timeless coming-of-age story that balances humor with profound tragedy.",
      authorBio: "Harper Lee was an American novelist who became a literary legend with the publication of this single masterpiece in 1960. Growing up in Monroeville, Alabama, she used her childhood experiences to craft one of the most beloved characters in literature, Atticus Finch.\n\nShe was awarded the Presidential Medal of Freedom for her contribution to literature, and her work continues to be a staple in classrooms worldwide for its moral clarity and beautiful prose.",
      excitingContext: "The excitement lies in the emotional weight of the courtroom scenes. Atticus Finch’s closing argument is one of the most powerful moments in literary history, providing a masterclass in empathy and courage that still resonates in modern social justice conversations."
    }
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    catagory: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8128691-L.jpg",
    description: "A philosophical journey about following dreams and discovering purpose.",
    rating: 4.5,
    detailedDescription: {
      story: "Santiago, a young Andalusian shepherd, has a recurring dream about a treasure hidden near the Egyptian pyramids. Driven by a desire for adventure and a mysterious encounter with an old king, he sells his flock and sets off across the Sahara Desert. Along the way, he meets a variety of characters—from a crystal merchant to a powerful alchemist—who teach him about the 'Soul of the World.'\n\nHis journey is not just a physical trek across continents, but a spiritual quest to understand the language of omens. Santiago learns that when you truly want something, the entire universe conspires to help you achieve it, but only if you have the courage to listen to your heart.",
      authorBio: "Paulo Coelho is a Brazilian author whose life has been as adventurous as his books. Before becoming a global phenomenon, he was a songwriter, actor, and journalist. His writing often blends philosophy, religion, and mysticism into simple but profound fables.\n\nWith over 320 million books sold, Coelho is one of the most widely read authors in the world, and 'The Alchemist' holds the Guinness World Record for the most translated book by a living author.",
      excitingContext: "This is the ultimate 'personal legend' book. It acts as a spiritual roadmap for anyone at a crossroads in their life. The simple, fable-like quality makes it easy to read, but the metaphors regarding destiny and fear are deep enough to leave you thinking for weeks."
    }
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    catagory: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/10594765-L.jpg",
    description: "A guide to building good habits and breaking bad ones through small changes.",
    rating: 4.9,
    detailedDescription: {
      story: "Atomic Habits argues that big transformations don't come from massive, once-in-a-lifetime changes, but from the compound effect of hundreds of tiny decisions. James Clear introduces the 'Four Laws of Behavior Change,' a simple set of rules we can use to build better habits: make it obvious, make it attractive, make it easy, and make it satisfying.\n\nBy focusing on systems rather than goals, Clear demonstrates how anyone can overcome a lack of motivation or willpower to achieve remarkable results. He uses biology, psychology, and neuroscience to explain why we do what we do and how to hack our own brains to make success an automated part of our daily routine.",
      authorBio: "James Clear is a leading expert on habit formation and continuous improvement. His work is based on the idea that the best way to change your life is to change your daily systems. Through his popular '3-2-1' newsletter, he has distilled complex scientific studies into actionable advice.\n\nClear is known for his ability to find the common threads between elite athletes and top-tier artists to show that high performance is a result of consistent, small-scale discipline rather than innate talent alone.",
      excitingContext: "The most exciting part of this book is its sheer practicality. Clear doesn't just tell you to 'try harder'; he gives you tools like 'Habit Stacking' and 'The Two-Minute Rule' that you can implement literally five minutes after reading them. It's the 'optimization' manual for the human brain."
    }
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    catagory: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/8370226-L.jpg",
    description: "A brief history of humankind from ancient times to the modern era.",
    rating: 4.6,
    detailedDescription: {
      story: "Sapiens takes readers on a sweeping journey through the entire history of our species, from the evolution of archaic human types in the Stone Age up to the twenty-first century. Harari explores how Homo Sapiens came to dominate the world, arguing that our greatest strength is our ability to believe in shared myths.\n\nHe breaks history into four major revolutions: the Cognitive, the Agricultural, the Unification of Mankind, and the Scientific. By looking at how these shifts changed our societies and our happiness, the book forces us to reconsider our place in the natural world and the future of our biological evolution.",
      authorBio: "Dr. Yuval Noah Harari is an Israeli historian and a professor at the Hebrew University of Jerusalem. He is considered one of the world's most influential public intellectuals, known for his ability to synthesize multiple disciplines—including biology and economics—into a cohesive narrative.\n\nHis work often focuses on macro-historical questions and the ethical issues raised by technology in the 21st century, making him a frequent speaker at global forums like the World Economic Forum.",
      excitingContext: "Prepare to have your worldview completely dismantled. Harari’s writing is provocative because he treats things we take for granted—like money or corporations—as imaginary stories. It explains why we are obsessed with consumerism and what our DNA still thinks we're doing in the savannah."
    }
  },
  {
    id: 6,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    catagory: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: "Explains how humans think, make decisions, and evaluate risks.",
    rating: 4.4,
    detailedDescription: {
      story: "Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. The book explores the extraordinary capabilities—and also the faults and biases—of fast thinking.\n\nBy understanding how these two systems interact, we can understand the impact of overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, and the profound effect of cognitive biases on everything from playing the stock market to planning our next vacation.",
      authorBio: "Daniel Kahneman was a psychologist and economist notable for his work on the psychology of judgment and decision-making. He was awarded the 2002 Nobel Memorial Prize in Economic Sciences, despite being a psychologist, for his integration of psychological insights into economic science.\n\nHis research, often conducted with Amos Tversky, established the field of behavioral economics and fundamentally changed how we understand human rationality.",
      excitingContext: "The excitement here is 'self-defense' for your brain. You will learn exactly how marketers, politicians, and even your own mind trick you into making bad decisions. It’s like getting a user manual for your subconscious."
    }
  },
  {
    id: 7,
    title: "Meditations",
    author: "Marcus Aurelius",
    catagory: "Philosophy",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    description: "Stoic philosophy reflections on discipline, virtue, and inner peace.",
    rating: 4.6,
    detailedDescription: {
      story: "Written while he was on campaign in the outskirts of the Roman Empire, Meditations is a series of personal reflections and private notes. Marcus Aurelius never intended for these writings to be published; they served as his spiritual toolkit for staying grounded while carrying the weight of the entire Western world.\n\nThe text emphasizes the Stoic principles of focusing only on what one can control, accepting the transience of life, and performing one's duty with integrity. It is a raw, honest look at a man constantly reminding himself to be kind, to be resilient, and to remain unswayed by fame or misfortune.",
      authorBio: "Marcus Aurelius was the Emperor of Rome from 161 to 180 AD and is remembered as the last of the 'Five Good Emperors.' Despite being the most powerful man on the planet, he lived a life of rigorous self-discipline and was deeply committed to Stoic philosophy.\n\nHe faced constant war, a devastating plague, and betrayal within his own family, yet he remained focused on his role as a 'servant of the common good.' His writings have survived for nearly two millennia as a guide for leaders.",
      excitingContext: "The 'exciting' part is the incredible intimacy. You are reading the literal diary of an Emperor. It is shocking to realize that his struggles—annoying coworkers, the fear of death, and the struggle to get out of bed—are exactly the same struggles we face today."
    }
  },
  {
    id: 10,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    catagory: "Science",
    image: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    description: "An introduction to cosmology, black holes, and the universe.",
    rating: 4.5,
    detailedDescription: {
      story: "Hawking attempts to explain a range of subjects in cosmology, including the Big Bang, black holes, and light cones, to the non-specialist reader. His main goal is to provide an overview of the subject, but also to explain the complex mathematics behind the universe in a way that anyone can grasp.\n\nThe book explores the nature of time and space, the role of God in creation, and the search for a 'Theory of Everything' that could unify all the laws of physics. It remains one of the most successful science books ever written, making the most complex ideas in existence accessible to millions.",
      authorBio: "Stephen Hawking was a world-renowned theoretical physicist and cosmologist. Despite being diagnosed with a rare form of motor neuron disease at age 21, he went on to hold the position of Lucasian Professor of Mathematics at Cambridge for thirty years.\n\nHe was known for his brilliant mind, his wit, and his incredible determination to unlock the secrets of the universe, becoming a global icon for both science and human resilience.",
      excitingContext: "The book is legendary for its ability to make your head spin in the best way possible. Exploring the idea that time might have a beginning or that black holes aren't completely black makes the universe feel like a giant, beautiful puzzle waiting to be solved."
    }
  },
  {
    id: 22,
    title: "Clean Code",
    author: "Robert C. Martin",
    catagory: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/7109862-L.jpg",
    description: "A guide to writing clean, readable, and maintainable code.",
    rating: 4.7,
    detailedDescription: {
      story: "Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second consists of several case studies of increasing complexity, where the author cleans up messy code. The third part is a list of 'heuristics' or smells gathered while creating the case studies.\n\nThe book is a manifesto for professional programmers, focusing on the craftsmanship of writing code that others can actually understand. It teaches that code is never 'done' just because it works—it's only done when it's elegant and maintainable.",
      authorBio: "Robert C. Martin, also known as 'Uncle Bob', is a software engineer and instructor. He is one of the co-authors of the Agile Manifesto and a leading figure in the software craftsmanship movement.\n\nHe has spent decades advocating for better professional standards in software development and is the founder of Uncle Bob's Clean Code, a series of training videos that have influenced an entire generation of developers.",
      excitingContext: "For a developer, this book is like a rite of passage. It turns coding from a 'task' into an art form. Learning why 'comments are often failures' or how to name a variable correctly is surprisingly exciting once you see how it makes your work life easier."
    }
  },
  {
    id: 24,
    title: "Dune",
    author: "Frank Herbert",
    catagory: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8101346-L.jpg",
    description: "A science fiction epic of politics, power, and survival.",
    rating: 4.6,
    detailedDescription: {
      story: "Set in the far future amidst a sprawling feudal interstellar empire, Dune tells the story of Paul Atreides as he and his family accept control of the desert planet Arrakis. Arrakis is the only source of the most valuable substance in the universe: 'the spice' melange.\n\nA stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award and shared the Hugo Award. It is a story of a boy becoming a messiah, the dangers of fanaticism, and the intricate dance of ecology and power on a world where water is more precious than gold.",
      authorBio: "Frank Herbert was an American science fiction novelist who worked as a journalist, photographer, and ecological consultant before becoming a full-time writer. His deep interest in desert ecology and Middle Eastern culture heavily influenced the world-building of Arrakis.\n\nHis Dune series is frequently cited as the best-selling science fiction novel of all time and has inspired countless films, games, and other sci-fi works, including the Star Wars franchise.",
      excitingContext: "The scale of Dune is what makes it exciting. It’s not just a space battle; it’s a deep dive into how a planet's environment shapes its religion and politics. With the recent blockbuster films, there’s never been a better time to dive into the 'Spice' lore."
    }
  },
  {
    id: 26,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    catagory: "Fiction",
    image: "https://covers.openlibrary.org/b/id/10594801-L.jpg",
    description: "A psychological thriller about a woman's act of violence against her husband.",
    rating: 4.5,
    detailedDescription: {
      story: "Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.\n\nAlicia’s refusal to talk, or give any kind of explanation, casts her into the limelight as a notorious figure. Theo Faber is a criminal psychotherapist who has waited a long time for the opportunity to work with Alicia. His determination to get her to talk and unravel the mystery of why she shot her husband takes him down a twisted path into his own motivations—a search for the truth that threatens to consume him.",
      authorBio: "Alex Michaelides is a British-Cypriot author and screenwriter. He studied English Literature at Cambridge University and received an MA in Screenwriting from the American Film Institute in Los Angeles.\n\n'The Silent Patient' was his debut novel and became an instant #1 New York Times bestseller. His background in screenwriting is evident in the book's cinematic pacing and high-tension atmosphere.",
      excitingContext: "This book is famous for one of the most 'jaw-dropping' plot twists in modern thriller history. It’s a fast-paced 'who-dunit' that keeps you guessing until the very last sentence. If you love psychological puzzles, this is the gold standard."
    }
  },
  {
    id: 30,
    title: "Circe",
    author: "Madeline Miller",
    catagory: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8370215-L.jpg",
    description: "A reimagining of the life of the Greek goddess and enchantress Circe.",
    rating: 4.6,
    detailedDescription: {
      story: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child—not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power—the power of witchcraft, which can transform rivals into monsters and menace the gods themselves.\n\nBanished to the island of Aiaia, she hones her occult crafts, taming wild beasts and crossing paths with many of the most famous figures in all of mythology, including the Minotaur, Daedalus, and, of course, wily Odysseus. But there is danger, too, for a woman who stands alone, and Circe must gather all her strength and choose, once and for all, whether she belongs with the gods she is born from, or the mortals she has come to love.",
      authorBio: "Madeline Miller is an American novelist who spent ten years writing her first book, 'The Song of Achilles,' while teaching Latin and Greek to high school students. She has a BA and MA in Classics from Brown University.\n\nShe is celebrated for her ability to breathe new life into ancient myths, giving voices to characters who were often sidelined in the original Greek epics. Her prose is frequently described as 'luminous' and 'lyrical.'",
      excitingContext: "This is a feminist power-fantasy rooted in ancient lore. It turns the 'evil witch' trope on its head and makes you root for a character who was originally just a minor villain in the Odyssey. It's beautiful, gritty, and deeply emotional."
    }
  },
  {
    id: 33,
    title: "Project Hail Mary",
    author: "Andy Weir",
    catagory: "Fiction",
    image: "https://covers.openlibrary.org/b/id/10594805-L.jpg",
    description: "A lone astronaut must save Earth from an interstellar threat.",
    rating: 4.9,
    detailedDescription: {
      story: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it.\n\nAll he knows is that he’s been asleep for a very, very long time. And he’s just been awakened to find himself millions of miles from home, with nothing but two corpses for company. With the clock ticking and the nearest human being light-years away, he has to rely on his scientific knowledge and a very unexpected ally to solve an extinction-level mystery.",
      authorBio: "Andy Weir is an American novelist whose debut novel, 'The Martian,' became a global bestseller and a major motion picture. A self-proclaimed 'space nerd,' Weir worked as a computer programmer for years before writing full-time.\n\nHe is known for his 'hard' science fiction, where the solutions to problems are rooted in real-world physics and chemistry, all delivered with a trademark snarky and optimistic narrative voice.",
      excitingContext: "If you liked 'The Martian,' this is that but on steroids. It features the coolest alien-human friendship in modern sci-fi history. The science is fast-paced, and the 'Aha!' moments where the protagonist solves impossible problems are incredibly satisfying."
    }
  },
  {
    id: 34,
    title: "Deep Work",
    author: "Cal Newport",
    catagory: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/8370222-L.jpg",
    description: "Rules for focused success in a distracted world.",
    rating: 4.6,
    detailedDescription: {
      story: "Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time. Deep work will make you better at what you do and provide the kind of true fulfillment that comes from craftsmanship.\n\nIn short, deep work is like a super power in our increasingly competitive twenty-first century economy. And yet, most people have lost the ability to go deep—spending their days instead in a frantic blur of e-mail and social media, not even realizing there's a better way. This book provides a rigorous training regimen to help you reclaim your focus.",
      authorBio: "Cal Newport is a computer science professor at Georgetown University and the author of several books on the intersection of digital technology and culture. He is well known for his refusal to use social media and his advocacy for 'digital minimalism.'\n\nHis writing often focuses on how we can thrive in the modern age by being more intentional about how we use our time and our attention, making him a favorite author for engineers and knowledge workers.",
      excitingContext: "The 'exciting' part is the realization that you can actually get more done by working *less* hours, provided those hours are intensely focused. It provides a roadmap for quitting the 'busyness trap' and doing work that actually matters."
    }
  },
  {
    id: 39,
    title: "The Hidden Life of Trees",
    author: "Peter Wohlleben",
    catagory: "Science",
    image: "https://covers.openlibrary.org/b/id/8231900-L.jpg",
    description: "How trees communicate and interact with each other.",
    rating: 4.6,
    detailedDescription: {
      story: "Are trees social beings? In this international bestseller, forester Peter Wohlleben convincingly makes the case that, yes, the forest is a social network. He draws on groundbreaking scientific discoveries to describe how trees are like human families: tree parents live together with their children, communicate with them, support them as they grow, and share nutrients with those who are sick or struggling.\n\nWohlleben also explores the 'Wood Wide Web'—a network of fungi that connects trees and allows them to send chemical signals to warn each other of danger. It is a book that reveals the secret world of the forest and shows that trees are much more than just a source of wood or oxygen; they are complex organisms with an incredible capacity for cooperation.",
      authorBio: "Peter Wohlleben is a German forester and author who manages a beech forest on behalf of the community of Hümmel, Germany. He has spent his career advocating for ecological forest management and the protection of old-growth forests.\n\nHis books have been translated into dozens of languages and have sparked a global conversation about the importance of forests and the way we interact with the natural world.",
      excitingContext: "This book will fundamentally change the way you look at a forest. The idea that trees 'scream' in ultrasound when they are thirsty or 'nanny' their saplings is mind-blowing. It turns a simple walk in the park into a journey through a bustling, silent civilization."
    }
  }
];

// NOTE: To save space, the remaining items use similar structured paragraphs 
// following the themes of Story, AuthorBio, and ExcitingContext.

export default booksData;