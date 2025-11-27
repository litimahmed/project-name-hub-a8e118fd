import storyLunaCover from "@/assets/story-luna-cover.jpg";
import storyLunaCh1 from "@/assets/story-luna-ch1.jpg";
import storyLunaCh2 from "@/assets/story-luna-ch2.jpg";
import storyLunaCh3 from "@/assets/story-luna-ch3.jpg";
import storyLunaCh4 from "@/assets/story-luna-ch4.jpg";
import bookEarthHero from "@/assets/book-earth-hero.jpg";
import bookJungleRecycling from "@/assets/book-jungle-recycling.jpg";
import storyOceanCover from "@/assets/story-ocean-cover.jpg";
import storyOceanCh1 from "@/assets/story-ocean-ch1.jpg";
import storyOceanCh2 from "@/assets/story-ocean-ch2.jpg";
import storyOceanCh3 from "@/assets/story-ocean-ch3.jpg";
import storyOceanCh4 from "@/assets/story-ocean-ch4.jpg";
import storyGardenCover from "@/assets/story-garden-cover.jpg";
import storyGardenCh1 from "@/assets/story-garden-ch1.jpg";
import storyGardenCh2 from "@/assets/story-garden-ch2.jpg";
import storyGardenCh3 from "@/assets/story-garden-ch3.jpg";
import storyGardenCh4 from "@/assets/story-garden-ch4.jpg";
import storyForestCover from "@/assets/story-forest-cover.jpg";
import storyForestCh1 from "@/assets/story-forest-ch1.jpg";
import storyForestCh2 from "@/assets/story-forest-ch2.jpg";
import storyForestCh3 from "@/assets/story-forest-ch3.jpg";
import storyForestCh4 from "@/assets/story-forest-ch4.jpg";
import storyEarthHeroCover from "@/assets/story-earth-hero-cover.jpg";
import storyEarthHeroCh1 from "@/assets/story-earth-hero-ch1.jpg";
import storyEarthHeroCh2 from "@/assets/story-earth-hero-ch2.png";
import storyEarthHeroCh3 from "@/assets/story-earth-hero-ch14.png";
import storyEarthHeroCh4 from "@/assets/story-earth-hero-ch6.jpg";
import storyEarthHeroCh5 from "@/assets/story-jungle-ch5.jpg";
import storyEarthHeroCh6 from "@/assets/story-earth-hero-ch8.jpg";
import storyEarthHeroCh7 from "@/assets/story-earth-hero-ch9.jpg";
import storyEarthHeroCh8 from "@/assets/story-earth-hero-ch13.png";
import storyEarthHeroCh9 from "@/assets/about-us-new.jpg";
import storyEarthHeroCh10 from "@/assets/story-earth-hero-ch3.jpg";
import storyEarthHeroCh11 from "@/assets/story-earth-hero-ch11.jpg";
import storyJungleCover from "@/assets/story-jungle-cover.jpg";
import storyJungleCh1 from "@/assets/story-jungle-ch1.jpg";
import storyJungleCh2 from "@/assets/story-jungle-ch2.jpg";
import storyJungleCh3 from "@/assets/story-jungle-ch3.jpg";
import storyJungleCh4 from "@/assets/story-jungle-ch4.jpg";
import storyJungleCh5 from "@/assets/story-jungle-ch5.jpg";

export interface StoryPage {
  text: string;
  image?: string;
  altText?: string;
  layout?: "default" | "two-column-left" | "two-column-right";
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Story {
  id: number;
  title: string;
  description: string;
  pages: StoryPage[];
  quiz?: QuizQuestion[];
}

export const storyContent: Story[] = [
  {
    id: 1,
    title: "Luna's Earth Guardian Mission",
    description: "When Luna discovers her magical Earth powers, she must fly through the city transforming trash into beautiful nature! Follow her incredible journey as she learns that every small action can create amazing changes for our planet.",
    quiz: [
      {
        question: "What is Luna's superpower?",
        options: ["Super speed", "Transforming trash into nature", "Flying only", "Invisibility"],
        correctAnswer: 1
      },
      {
        question: "What color is Luna's Earth Guardian cape?",
        options: ["Red", "Yellow", "Blue and green", "Purple"],
        correctAnswer: 2
      },
      {
        question: "Where did Luna first discover her powers?",
        options: ["At school", "In the park", "In her bedroom while recycling", "At the beach"],
        correctAnswer: 2
      },
      {
        question: "What did Luna transform trash into?",
        options: ["Toys", "Food", "Beautiful flowers and trees", "Buildings"],
        correctAnswer: 2
      },
      {
        question: "What did Luna teach children at the end?",
        options: ["How to fly", "That everyone has the power to help Earth", "Magic spells", "How to build things"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storyLunaCover,
        text: "In a bustling city where skyscrapers touched the clouds, lived a brave and curious girl named Luna. She loved nature, animals, and everything green. But Luna had a secret - a magical secret that would change everything. She was chosen by Earth itself to become its guardian!",
        altText: "Luna flying through vibrant city with magical glowing hands transforming trash to nature"
      },
      {
        text: "It all began on a sunny afternoon. Luna was in her room, carefully sorting recyclables into different bins - plastic bottles in one, paper in another. As she held a plastic bottle, something incredible happened! Her hands began to glow with shimmering green and blue light. Sparkles danced around her fingers like tiny stars!",
        image: storyLunaCh1,
        altText: "Young Luna discovering magical glowing powers while holding bottle in bedroom",
        layout: "two-column-left"
      },
      {
        text: "'What... what's happening?' Luna gasped. The light grew brighter and warmer. A gentle voice seemed to whisper from everywhere and nowhere at once: 'Luna, you have been chosen. Your love for our planet has awakened a special gift. You are now Earth's Guardian. Use your powers to transform waste into wonder, to heal nature, and to inspire others!'",
      },
      {
        text: "Luna felt a surge of energy flow through her. Her clothes transformed into a beautiful superhero costume with a flowing cape that shimmered like the Earth seen from space - swirls of blue oceans and green forests. On her chest glowed a golden Earth emblem. She was no longer just Luna - she was the Earth Guardian!",
        image: storyLunaCh2,
        altText: "Luna in Earth Guardian costume flying over city with green energy powers",
        layout: "two-column-right"
      },
      {
        text: "Luna flew out of her window, soaring high above the city. Below her, she could see piles of trash on streets, plastic bags stuck in trees, and litter scattered in parks. 'Time to get to work!' she declared. Luna swooped down and raised her glowing hands. Beams of brilliant green energy shot toward the garbage!",
      },
      {
        text: "Magic happened right before everyone's eyes! Plastic bottles transformed into beautiful blooming sunflowers. Aluminum cans became sturdy trees with spreading branches. Paper waste turned into colorful bushes with singing birds. The dull, gray streets burst into life with gardens of every color! People stopped and stared in amazement. Children pointed and cheered!",
      },
      {
        text: "But Luna knew her mission wasn't complete. Cleaning up was important, but teaching others was even more powerful. She landed in the city park where children were playing. 'Hello, Earth Heroes!' Luna called out with a warm smile. The children gathered around her, their eyes sparkling with curiosity and wonder.",
        image: storyLunaCh3,
        altText: "Luna teaching excited diverse children about recycling with colorful bins",
        layout: "two-column-left"
      },
      {
        text: "'I have amazing news for you,' Luna said, kneeling down to their level. 'You don't need magical powers to be a hero for Earth. Every time you recycle, reuse something, or pick up litter, you're using YOUR superpower! You're helping our beautiful planet stay healthy and clean for everyone - people, animals, and plants!'",
      },
      {
        text: "Luna showed them how to sort recyclables properly: 'Blue bins for paper and cardboard - they become new notebooks! Yellow bins for plastic - they turn into playground equipment! Green bins for food scraps - they become rich soil for gardens!' The children practiced sorting, excited to use their new Earth-saving knowledge.",
      },
      {
        text: "As days passed, something wonderful happened. Children all over the city started taking care of Earth. They brought reusable bags to stores, used refillable water bottles, and set up recycling stations at school. Their parents noticed and joined in too! The entire city became cleaner, greener, and happier.",
        image: storyLunaCh4,
        altText: "Beautiful clean city with diverse children caring for environment and glowing Earth",
      },
      {
        text: "Luna watched from above, her heart filled with joy and pride. The city sparkled with parks full of flowers, clean streets lined with trees, and happy people working together. She realized that her real superpower wasn't just transforming trash - it was inspiring others to care. And now, thousands of Earth Guardians were protecting the planet, one small action at a time. The Earth glowed brighter in the sky, as if smiling down on all its brave young heroes!",
      }
    ]
  },
  {
    id: 2,
    title: "Captain Earth Saves the Day",
    description: "When pollution threatens the planet, one young hero discovers amazing recycling powers! Join Captain Earth as he transforms trash into treasure and inspires children everywhere to become environmental superheroes.",
    quiz: [
      {
        question: "What is Captain Earth's real name?",
        options: ["Eddie", "Tommy", "Alex", "Sam"],
        correctAnswer: 0
      },
      {
        question: "What color is Captain Earth's cape?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: 2
      },
      {
        question: "What did Captain Earth teach children to remember?",
        options: ["Stop, drop, and roll", "Reduce, reuse, and recycle", "Read, write, and count", "Jump, run, and play"],
        correctAnswer: 1
      },
      {
        question: "What animals did Captain Earth help in the ocean?",
        options: ["Birds", "Dogs", "Marine animals", "Farm animals"],
        correctAnswer: 2
      },
      {
        question: "What did the children become at the end?",
        options: ["Teachers", "Junior Earth Heroes", "Scientists", "Astronauts"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storyEarthHeroCover,
        text: "High above the bustling city, where buildings touched the clouds and cars zipped through streets, lived a very special boy. His name was Eddie, and he had a secret that would change the world forever. By day, he was just an ordinary kid who loved playing outside. But when the planet needed help, he transformed into the mighty Captain Earth!",
        altText: "Captain Earth superhero with green cape and Earth emblem flying over colorful city"
      },
      {
        text: "Eddie's extraordinary journey began on an ordinary Tuesday afternoon. He was cleaning up after lunch at home when something magical happened. As he carefully sorted the plastic bottles, paper napkins, and aluminum cans into the right recycling bins, a warm golden glow surrounded his hands.",
        image: storyEarthHeroCh1,
        altText: "Young Eddie discovering magical glowing recycling powers in bedroom",
        layout: "two-column-left"
      },
      {
        text: "Suddenly, sparkles of green and blue light danced around the recyclables! 'What's happening?' Eddie gasped, watching in amazement as the glow grew brighter. A gentle voice seemed to whisper from the Earth itself: 'You have been chosen, Eddie. You have shown you care about our planet. Now you have the power to protect it!'",
      },
      {
        text: "In that moment, Eddie understood his calling. He would become Captain Earth, defender of the environment! With his flowing green cape made from recycled materials and the proud Earth emblem shining on his chest, Captain Earth soared through the sky for the first time. His mission was clear: to clean up pollution and teach everyone about the superpowers of recycling.",
        image: storyEarthHeroCh2,
        altText: "Captain Earth using recycling powers to clean ocean with happy marine animals",
        layout: "two-column-right"
      },
      {
        text: "His first stop was the beautiful blue ocean that was crying for help. At the beach, Captain Earth discovered plastic bottles, bags, and wrappers floating in the waves. Sea turtles, dolphins, and fish were struggling, trapped by the trash. 'Don't worry, friends!' Captain Earth called out. 'I'm here to help!'",
      },
      {
        text: "He raised his hands, and his amazing recycling ray shot beams of shimmering green light. Like magic, the plastic garbage began transforming! The plastic bottles became sturdy park benches. The bags turned into colorful playground equipment. The wrappers transformed into beautiful planters for flowers.",
      },
      {
        text: "The ocean sparkled clean and clear again! The sea turtles did happy flips, and the dolphins jumped for joy. 'Thank you, Captain Earth!' they seemed to say with their cheerful sounds. But Captain Earth knew that cleaning up wasn't enough – he needed to teach others how to be heroes too!",
        image: storyEarthHeroCh3,
        altText: "Captain Earth teaching diverse excited children in classroom",
        layout: "two-column-left"
      },
      {
        text: "The next morning, Captain Earth flew to Sunnydale Elementary School. During recess, he landed in the playground. Children gathered around, their eyes wide with wonder and excitement! 'Hello, Earth Heroes in training!' Captain Earth announced with a big smile. 'I have amazing news – every single one of you has superpowers too!'",
      },
      {
        text: "He taught them the three magic words: Reduce, Reuse, and Recycle. 'When you use less, reuse what you have, and recycle what you're done with, you're using your environmental superpowers!' The children learned to bring reusable water bottles instead of disposable ones. They discovered how to pack lunches in containers instead of plastic bags.",
      },
      {
        text: "But one day, as Captain Earth flew over the city, he noticed something terrible. Memorial Park, once the city's most beautiful green space, was now covered in mountains of trash. Dark clouds gathered overhead. This was his biggest challenge yet!",
        image: storyEarthHeroCh4,
        altText: "Captain Earth flying over polluted park with trash and dark clouds",
        layout: "two-column-right"
      },
      {
        text: "'This looks like a job for Captain Earth!' he declared, landing in the park. Aluminum cans, plastic bags, glass bottles, and paper waste were scattered everywhere. The playground was buried under garbage. The beautiful flowers were hidden beneath piles of litter. The birds had stopped singing.",
      },
      {
        text: "Captain Earth took a deep breath and raised both hands high into the sky. Green energy beams burst from his palms like brilliant fireworks! The trash began to swirl and spin in the air, sorting itself into different categories. Paper with paper, plastic with plastic, glass with glass, metal with metal!",
        image: storyEarthHeroCh5,
        altText: "Captain Earth using powerful green energy to transform trash into gardens",
        layout: "default"
      },
      {
        text: "Then the real magic happened! The sorted recyclables began transforming into wonderful new things. Old newspapers became cozy bird houses. Plastic bottles turned into beautiful flower beds. Glass jars became sparkling garden lights. Aluminum cans transformed into benches and play equipment. The park burst back to life!",
      },
      {
        text: "Flowers bloomed in every color of the rainbow. Trees stood tall and proud again. Birds returned, singing their happiest songs. Butterflies danced through the air. The sun broke through the dark clouds, bathing everything in golden light. Memorial Park was more beautiful than ever before!",
      },
      {
        text: "News of Captain Earth's amazing feat spread throughout the city. Soon, children everywhere wanted to become Earth Heroes too! They formed the Junior Earth Heroes club, wearing special green and blue badges. They held meetings every week to plan new ways to help the environment.",
        image: storyEarthHeroCh6,
        altText: "Diverse children as Junior Earth Heroes with capes in beautiful park",
        layout: "two-column-right"
      },
      {
        text: "The Junior Earth Heroes picked up litter in parks every Saturday. They started composting programs in their schools. They organized neighborhood recycling drives. They planted trees and created butterfly gardens. Each child discovered their own special way to help the planet.",
      },
      {
        text: "Captain Earth was so proud of the Junior Earth Heroes that he decided to meet with the city's leaders. He flew to City Hall where the mayor and other important people worked. 'We need to make recycling easier for everyone!' Captain Earth told them. 'Let's create a city-wide program!'",
        image: storyEarthHeroCh7,
        altText: "Captain Earth meeting with mayor and leaders at town hall",
        layout: "two-column-left"
      },
      {
        text: "The mayor loved the idea! Soon, colorful recycling bins appeared on every street corner – blue for paper, yellow for plastic, green for compost, and gray for glass and metal. Special recycling trucks came to collect the sorted materials. New recycling centers were built where materials could be transformed into new products.",
        image: storyEarthHeroCh8,
        altText: "New recycling centers with solar panels and colorful bins in city",
        layout: "two-column-right"
      },
      {
        text: "The recycling centers had solar panels on their roofs for clean energy. Inside, machines sorted and processed materials. Paper became new notebooks. Plastic became park benches and playground equipment. Glass became new bottles and jars. Metal became bikes and tools. Nothing went to waste!",
      },
      {
        text: "Families throughout the city joined the recycling revolution. Parents and children worked together, sorting their recyclables at home. 'Look Mom, this plastic container goes in the yellow bin!' children would say. 'And this newspaper goes in the blue bin!' The city was becoming cleaner and greener every single day.",
        image: storyEarthHeroCh9,
        altText: "Families sorting recyclables together in modern kitchen",
        layout: "default"
      },
      {
        text: "Schools started teaching environmental science. Students learned about ecosystems, climate change, and conservation. They discovered how every small action could make a big difference. They understood that protecting the Earth wasn't just Captain Earth's job – it was everyone's responsibility!",
      },
      {
        text: "Months passed, and the transformation was incredible. The city sparkled with clean streets and green parks. The air smelled fresh and clean. Birds, butterflies, and bees thrived in the gardens. The rivers ran crystal clear. Solar panels on buildings generated clean energy. Electric buses glided silently through the streets.",
        image: storyEarthHeroCh10,
        altText: "Captain Earth watching transformed clean green city from above",
        layout: "two-column-left"
      },
      {
        text: "Captain Earth stood on top of the tallest building, looking down at the beautiful city below. The Earth itself seemed to glow brighter in the sky, as if smiling down proudly. 'We did it,' he whispered. 'Together, we saved the day.'",
      },
      {
        text: "That evening, Eddie returned home and changed back into his regular clothes. The Earth emblem on his chest glowed softly under his shirt, a reminder of his special powers. As he looked out his window at the stars, he heard the voices of children playing outside, laughing and talking about recycling.",
        image: storyEarthHeroCh11,
        altText: "Eddie in normal clothes with glowing Earth emblem and children friends at sunset",
      },
      {
        text: "Eddie smiled, knowing that the real power wasn't just in his recycling ray. The real power was in teaching others to care. Now, thousands of Earth Heroes were protecting the planet, one small action at a time. The Earth glowed brighter in the sky, knowing it had millions of heroes looking after it. And whenever someone properly recycled something, somewhere in the world, Captain Earth's emblem glowed a little brighter. The planet was in good hands – the hands of heroes like you!",
      }
    ]
  },
  {
    id: 3,
    title: "Moki's Jungle Recycling Adventure",
    description: "Deep in the Greenleaf Jungle, Moki the monkey discovers his forest friends are in trouble. Join him and his friends Lila, Tami, and Rex on an exciting journey to restore their home and learn how to recycle right!",
    quiz: [
      {
        question: "Who is the main character of the story?",
        options: ["Lila", "Moki", "Rex", "Tami"],
        correctAnswer: 1
      },
      {
        question: "What did Moki find in the river?",
        options: ["Fish", "Plastic bottles", "Flowers", "Rocks"],
        correctAnswer: 1
      },
      {
        question: "Which friend is a parrot?",
        options: ["Tami", "Rex", "Lila", "Moki"],
        correctAnswer: 2
      },
      {
        question: "What type of animal is Rex?",
        options: ["Monkey", "Turtle", "Elephant", "Parrot"],
        correctAnswer: 2
      },
      {
        question: "What did the friends learn to do?",
        options: ["Swim", "Fly", "Recycle properly", "Climb trees"],
        correctAnswer: 2
      }
    ],
    pages: [
      {
        image: storyJungleCover,
        text: "Deep in the Greenleaf Jungle, where tall trees touched the sky and colorful birds sang beautiful songs, lived Moki the monkey. Moki loved swinging through the trees and playing with his friends - Lila the parrot, Tami the turtle, and Rex the elephant. Their jungle home was the most beautiful place in the world!",
        altText: "Moki the monkey and his jungle friends in beautiful Greenleaf Jungle with river"
      },
      {
        text: "One sunny morning, Moki was swinging to his favorite spot by the river when he noticed something strange. 'What's that floating in the water?' he wondered. As he got closer, his heart sank. Plastic bottles were bobbing in the river! The water that was once crystal clear now had trash floating everywhere.",
        image: storyJungleCh1,
        altText: "Moki discovering plastic bottles in the jungle river looking concerned",
        layout: "two-column-left"
      },
      {
        text: "'Oh no!' Moki cried out. 'This is terrible! The fish can't swim properly, and the water doesn't look clean anymore.' He quickly called for his friend Lila the parrot. 'Lila! Lila! Come quick! We have a big problem!' Lila flew down from the treetops, her colorful feathers shimmering in the sunlight.",
      },
      {
        text: "'What's wrong, Moki?' asked Lila. Moki pointed to the river. Lila gasped, 'That's not all! Look over there!' She flew Moki to another part of the jungle. Paper waste was scattered everywhere around the trees! Old newspapers, cardboard boxes, and torn paper were covering the beautiful jungle floor.",
        image: storyJungleCh2,
        altText: "Lila the colorful parrot and Moki looking at paper waste in jungle",
        layout: "two-column-right"
      },
      {
        text: "'This is getting worse!' said Moki. Just then, Tami the turtle slowly walked up to them. 'Friends, I need to show you something too,' she said worriedly. Tami led them to her favorite resting spot, where there was leftover food everywhere! Banana peels, fruit scraps, and food waste were attracting swarms of buzzing flies and crawling bugs.",
        image: storyJungleCh3,
        altText: "Tami the turtle with Moki near leftover food attracting insects",
        layout: "two-column-left"
      },
      {
        text: "'Our beautiful jungle is in trouble!' exclaimed Moki. 'We need help!' Just then, they heard a loud trumpet sound. It was Rex the elephant! 'I heard you calling,' said Rex with his deep, kind voice. 'Don't worry, friends. I know exactly what we need to do. We need to learn about recycling!'",
      },
      {
        text: "Rex explained to his friends about the three special bins - blue for paper, yellow for plastic, and green for food waste. 'When we sort our waste properly, we can help the Earth!' Rex said proudly. 'Paper can be recycled into new paper, plastic bottles can become new things, and food waste can turn into compost to help plants grow!'",
        image: storyJungleCh4,
        altText: "Rex the elephant and jungle friends with colorful recycling bins working together",
        layout: "two-column-right"
      },
      {
        text: "The four friends worked together as a team! Moki swung through the trees collecting plastic bottles from the river. Lila flew around gathering all the paper waste. Tami carefully collected the food scraps. Rex used his strong trunk to place everything into the correct recycling bins - blue, yellow, and green!",
      },
      {
        text: "After hours of hard work, the Greenleaf Jungle sparkled again! The river was crystal clear, the trees stood tall and clean, and there wasn't a single piece of trash in sight. Fish jumped happily in the water, birds sang cheerful songs, and butterflies danced around the flowers.",
        image: storyJungleCh5,
        altText: "Beautiful clean Greenleaf Jungle with happy celebrating animal friends",
      },
      {
        text: "From that day on, Moki, Lila, Tami, and Rex became the Jungle Recycling Heroes! They taught all the other animals about sorting waste correctly. Every animal in the jungle learned which bin to use for different items. The Greenleaf Jungle became the cleanest, happiest forest in the whole world, and it all happened because four friends cared enough to make a difference!",
      }
    ]
  },
  {
    id: 4,
    title: "Ocean Rescue Mission",
    description: "Captain Splash, the brave bottle hero, embarks on an epic quest to clean the ocean and save marine animals! Discover how plastic recycling protects our seas and transforms waste into wonderful new things.",
    quiz: [
      {
        question: "Who is the hero of this story?",
        options: ["Captain Earth", "Captain Splash", "Luna", "Moki"],
        correctAnswer: 1
      },
      {
        question: "What did Captain Splash find in the ocean?",
        options: ["Treasure", "Fish", "Plastic pollution", "Coral"],
        correctAnswer: 2
      },
      {
        question: "Which animals did Captain Splash help?",
        options: ["Birds and cats", "Dolphins and sea turtles", "Dogs and rabbits", "Monkeys and elephants"],
        correctAnswer: 1
      },
      {
        question: "What did Captain Splash use to clean the ocean?",
        options: ["A net", "His hands", "Magical recycling powers", "A boat"],
        correctAnswer: 2
      },
      {
        question: "What should we use instead of plastic bottles?",
        options: ["More plastic bottles", "Glass bottles only", "Reusable water bottles", "Nothing"],
        correctAnswer: 2
      }
    ],
    pages: [
      {
        image: storyOceanCover,
        text: "Deep beneath the sparkling waves lived Captain Splash, a brave hero with a special mission. He was once just an ordinary plastic bottle, but when he was recycled and given new life, he gained amazing powers to protect the ocean and all its creatures!",
        altText: "Captain Splash the bottle hero diving heroically into beautiful blue ocean with dolphins"
      },
      {
        text: "Captain Splash loved swimming with his friends - dolphins who did flips, sea turtles who told wise stories, colorful fish who danced in the coral reefs, and gentle whales who sang beautiful songs. The ocean was a magical place, full of life and wonder!",
      },
      {
        text: "But one terrible day, Captain Splash discovered something that made his heart sink. Plastic bottles, bags, and wrappers were floating everywhere in the ocean! His sea turtle friend Terry was tangled in a plastic bag and couldn't swim properly. Dolly the dolphin looked sad because the water wasn't clear anymore.",
        image: storyOceanCh1,
        altText: "Captain Splash discovering ocean pollution with worried sea creatures",
        layout: "two-column-left"
      },
      {
        text: "'This is terrible!' cried Captain Splash. 'My ocean friends are in danger! I must do something!' He remembered his special power - the ability to transform recycled materials. His bottle cap began to glow with a brilliant green light. It was time for Ocean Rescue Mission!",
      },
      {
        text: "Captain Splash raised his hands toward the sky. Beams of magical green energy shot out in all directions! The plastic waste began to glow and shimmer. Something incredible was happening - the trash was transforming! Plastic bottles turned into beautiful coral reefs. Bags became flowing sea plants. Wrappers transformed into colorful sea anemones!",
        image: storyOceanCh2,
        altText: "Captain Splash using magical recycling powers transforming trash into coral",
        layout: "two-column-right"
      },
      {
        text: "Terry the sea turtle wiggled free from the plastic that trapped him. 'I can swim again! Thank you, Captain Splash!' Dolly the dolphin leaped high out of the water with joy. Fish swam in happy circles through the crystal-clear water. The whales sang a song of celebration that echoed through the entire ocean!",
      },
      {
        text: "But Captain Splash knew his work wasn't finished. Cleaning up was important, but teaching others was even more important! He swam to the beach where children were playing. 'Hello, Ocean Guardians!' he called out. The children gathered around, amazed to see a talking bottle hero!",
        image: storyOceanCh3,
        altText: "Captain Splash teaching diverse children on sunny beach about ocean conservation",
        layout: "two-column-left"
      },
      {
        text: "'I need your help to keep our oceans clean,' said Captain Splash. 'Every plastic bottle you recycle is one less bottle in the ocean! When you use a reusable water bottle instead of a disposable one, you're protecting sea turtles like Terry. When you don't litter on the beach, you're helping dolphins like Dolly!'",
      },
      {
        text: "The children made promises to Captain Splash: 'We'll always throw trash in proper bins!' 'We'll use reusable bottles!' 'We'll pick up litter when we see it!' 'We'll tell our friends to protect the ocean too!' Captain Splash smiled proudly. He had created an army of young Ocean Guardians!",
      },
      {
        text: "Weeks passed, and something wonderful happened. Beaches became cleaner. Fewer bottles floated in the waves. More children brought reusable bottles to the beach. The ocean sparkled clearer than ever before! Captain Splash watched from the water as sea turtles swam freely, dolphins jumped joyfully, and fish danced among healthy coral reefs.",
        image: storyOceanCh4,
        altText: "Beautiful pristine clean ocean with happy marine life and children on beach",
      },
      {
        text: "Every evening, as the sun set over the horizon, Captain Splash would swim patrol around the ocean. He knew that with thousands of children working together to recycle, reuse, and protect the seas, the ocean would stay beautiful forever. And whenever a child properly recycled a plastic bottle, Captain Splash's heart glowed a little brighter, knowing another Ocean Guardian was making a difference!",
      }
    ]
  },
  {
    id: 5,
    title: "The Garden Guardians",
    description: "Enter an enchanted garden where food scraps magically transform into golden soil! Watch as the Garden Guardians show how composting creates life and helps beautiful flowers and vegetables grow.",
    quiz: [
      {
        question: "Who is the main character of this story?",
        options: ["Luna", "Coco the Carrot", "Captain Splash", "Paige"],
        correctAnswer: 1
      },
      {
        question: "What is the Decomposer Squad?",
        options: ["A band", "Worms and microorganisms that help composting", "Garden tools", "Vegetables"],
        correctAnswer: 1
      },
      {
        question: "What do food scraps become in a compost bin?",
        options: ["Trash", "Rich soil for plants", "Toys", "Water"],
        correctAnswer: 1
      },
      {
        question: "What did Wiggly the Worm do?",
        options: ["Sang songs", "Helped turn food into nutritious soil", "Planted flowers", "Watered plants"],
        correctAnswer: 1
      },
      {
        question: "What grew from the compost soil?",
        options: ["Nothing", "New vegetables and flowers", "Rocks", "More trash"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storyGardenCover,
        text: "In a secret corner of a magical garden stood an enchanted compost bin that glowed with golden sparkles. This wasn't just any compost bin - it was home to the Garden Guardians, special friends who had the power to transform food scraps into life itself!",
        altText: "Magical garden with animated vegetable characters around glowing compost bin"
      },
      {
        text: "Meet Coco the Carrot, the bravest of the Garden Guardians! One day, after being harvested from the garden, some of Coco's friends (leftover carrot tops and veggie scraps) ended up in the magical compost bin. Coco was curious - what would happen to them?",
        image: storyGardenCh1,
        altText: "Coco the carrot discovering magical compost bin with other food scrap characters",
        layout: "two-column-left"
      },
      {
        text: "'Don't worry, Coco!' said Ben the Banana Peel with a warm smile. 'We're not waste - we're the beginning of something wonderful! Watch what happens!' Coco peered into the compost bin and saw it glowing with a soft, golden light. 'What's making it glow?' she asked with wonder.",
      },
      {
        text: "'That's the Decomposer Squad at work!' explained Amy the Apple Core. 'They're tiny heroes - earthworms, friendly bacteria, helpful fungi, and busy bugs. They work day and night, breaking down food scraps and turning them into magical golden soil!' Coco watched in amazement as the squad got to work.",
        image: storyGardenCh2,
        altText: "Inside compost bin showing cute earthworms and microorganisms working together",
        layout: "two-column-right"
      },
      {
        text: "Wiggly the Earthworm waved hello with a big smile. 'Hi Coco! Watch this!' He munched on vegetable scraps, and what came out was rich, dark, crumbly soil that sparkled with nutrients. 'We call these worm castings,' Wiggly explained proudly. 'Plants absolutely love them! It's like superfood for gardens!'",
      },
      {
        text: "As days and weeks passed, something incredible happened. The food scraps slowly transformed. Banana peels became darker. Apple cores broke down into tiny pieces. Vegetable scraps mixed together. The heat inside the bin helped everything break down faster. The golden glow grew brighter and brighter until finally... the transformation was complete!",
      },
      {
        text: "'It's ready!' announced the Decomposer Squad together. 'The compost is finished!' The bin now contained beautiful, rich, dark soil that smelled like a fresh forest after rain. It was full of nutrients, minerals, and life - everything plants needed to grow big and strong.",
        image: storyGardenCh3,
        altText: "Gardener spreading rich compost with new vegetables and flowers growing",
        layout: "two-column-left"
      },
      {
        text: "The gardener opened the compost bin and gasped with joy. 'What beautiful compost!' She carefully scooped the magical soil and spread it around the garden. She sprinkled it around tomato plants, mixed it into flower beds, and added it to the vegetable patch. The plants seemed to dance with happiness!",
      },
      {
        text: "Within days, something magical happened! Tiny green sprouts pushed up through the soil. New carrots began to grow - bright orange and healthy! Tomatoes grew bigger and redder. Flowers bloomed in every color of the rainbow. Lettuce leaves became crisp and green. The entire garden exploded with life!",
      },
      {
        text: "Coco watched with tears of joy as brand new baby carrots sprouted from the soil. 'Look!' she exclaimed. 'My friends from the compost bin are helping create new life! The leftover scraps aren't waste at all - they're part of the circle of life!' The Garden Guardians cheered together.",
        image: storyGardenCh4,
        altText: "Magnificent flourishing garden with children learning about composting",
      },
      {
        text: "From that day on, Coco and the Garden Guardians taught everyone about the magic of composting. Food scraps don't belong in the trash - they belong in compost bins where they can become golden soil! Every vegetable peel, fruit core, and food scrap has the power to help new plants grow. That's the true magic of nature's recycling - life creating more life, in an endless beautiful circle!",
      }
    ]
  },
  {
    id: 6,
    title: "Forest Protectors",
    description: "Join the brave Paper Warriors on their noble quest to protect the ancient forests! Learn how recycling paper saves thousands of trees and discover creative ways to give paper a second life.",
    quiz: [
      {
        question: "Who is the main character?",
        options: ["Moki", "Captain Splash", "Paige the Paper", "Luna"],
        correctAnswer: 2
      },
      {
        question: "What does recycling one ton of paper save?",
        options: ["5 trees", "17 trees", "100 trees", "1 tree"],
        correctAnswer: 1
      },
      {
        question: "Who are Paige's paper friends?",
        options: ["Tom and Jerry", "Ned, Carl, and Mia", "Ben and Amy", "Terry and Dolly"],
        correctAnswer: 1
      },
      {
        question: "How many times can paper be recycled?",
        options: ["Once", "Twice", "5-7 times", "Forever"],
        correctAnswer: 2
      },
      {
        question: "What did Paige become after being recycled?",
        options: ["A book", "Fresh printer paper", "A box", "A magazine"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storyForestCover,
        text: "Long ago, in an ancient forest where trees stood tall and proud for hundreds of years, there lived the Paper Warriors - brave protectors who dedicated their lives to saving trees. They had a sacred mission: to show the world that every sheet of paper recycled was another tree saved!",
        altText: "Brave Paper Warriors protecting ancient forest with recycling shields"
      },
      {
        text: "Meet Paige the Paper! She began her life as part of a magnificent oak tree in the Whispering Woods. That tree provided homes for birds, shade for animals, and oxygen for everyone to breathe. When she became paper, Paige carried the spirit of that mighty tree with her. She was determined to honor her forest home.",
        image: storyForestCh1,
        altText: "Paige as notebook paper with student writing stories warmly lit classroom",
        layout: "two-column-left"
      },
      {
        text: "Paige spent wonderful months as pages in a notebook where a young student named Sam wrote amazing stories, drew creative pictures, and solved math problems. Every word written on Paige felt meaningful. But when the notebook was full, Sam faced a choice - trash or recycling? Luckily, Sam knew what to do!",
      },
      {
        text: "'To the recycling bin you go!' said Sam with a smile, placing Paige gently into the blue paper recycling container. 'Time for you to become something new!' Paige felt excited. Her adventure as a Paper Warrior was just beginning! She was going to help save her tree friends!",
        image: storyForestCh2,
        altText: "Paper characters Carl Ned and Mia riding conveyor belts at recycling facility",
        layout: "two-column-right"
      },
      {
        text: "At the recycling facility, Paige met her Paper Warrior teammates! There was Ned the Newspaper, who had spent weeks delivering news to families. Carl the Cardboard Box, who had traveled across the country carrying packages. And Mia the Magazine, who had beautiful photos and stories. Together, they were the Paper Warrior squad!",
      },
      {
        text: "'Welcome to the team, Paige!' said Ned cheerfully. 'Did you know that recycling just one ton of paper saves 17 trees from being cut down?' Paige's heart swelled with pride. 'We also save 7,000 gallons of water and enough energy to power a home for six months!' added Carl. 'Every sheet of recycled paper makes a difference!' chirped Mia.",
      },
      {
        text: "The transformation began! First, the Paper Warriors were mixed with water in a huge tank called a pulper. They swirled and danced together, breaking down into tiny fibers. 'This feels like a paper pool party!' laughed Paige. The mixture became pulp - a thick, mushy blend that held all their recycled fibers.",
      },
      {
        text: "Next came the cleaning process. Big machines removed any staples, tape, or plastic that didn't belong. The pulp was washed and screened to make sure only pure paper fibers remained. 'We're getting ready for our transformation!' said Ned excitedly. The pulp was then spread onto giant screens and pressed flat.",
        image: storyForestCh3,
        altText: "Magical transformation of paper into new products with sparkles and joy",
        layout: "two-column-left"
      },
      {
        text: "As the pulp dried and rolled through huge machines, something magical happened! Paige transformed into bright white printer paper - perfect for a classroom! Ned became a fresh newspaper ready to deliver today's stories. Carl turned into a sturdy pizza box that would keep food warm. Mia became a beautiful greeting card that would make someone smile!",
      },
      {
        text: "'We did it!' they all cheered. 'We've been recycled!' But the best part? Their journey wasn't over. Paper can be recycled 5 to 7 times! Each time they were recycled, they saved more trees, conserved more water, and used less energy. The Paper Warriors were fulfilling their sacred mission again and again!",
      },
      {
        text: "Paige now lived in a school where children wrote stories and drew pictures on her fresh white surface. Every time she looked at their happy faces, she thought about the trees standing tall in the Whispering Woods. Because Paige and her Paper Warrior friends were recycled, those trees got to keep growing, providing homes for animals and clean air for everyone.",
        image: storyForestCh4,
        altText: "Protected ancient forest with children using recycled paper happily",
      },
      {
        text: "The ancient forest remained safe and protected, thanks to the brave Paper Warriors and children like Sam who chose to recycle. Every sheet of paper that gets recycled instead of thrown away is a victory for the forests! So remember, young protectors: when you recycle paper, you become a Paper Warrior too. You're not just recycling - you're protecting forests, saving trees, and giving paper new life. Together, we can keep our forests standing tall and strong for generations to come!",
      }
    ]
  }
];
