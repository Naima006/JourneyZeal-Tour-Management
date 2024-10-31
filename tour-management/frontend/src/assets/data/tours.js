import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    address: "Westminster, London, UK",
    price: 99,
    maxGroupSize: 10,
    desc: "Explore the iconic Westminster Bridge, offering stunning views of the River Thames and Big Ben.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
      {
        name: "Johnny",
        rating: 5,
      },
      {
        name: "Marianne",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Pangkor Laut Resort",
    city: "Perak",
    distance: 250,
    address: "Pangkor Island, Perak, Malaysia",
    price: 99,
    maxGroupSize: 8,
    desc: "A tranquil island escape with luxurious villas, tropical scenery, and pristine beaches in Perak.",
    reviews: [
      {
        name: "Michael",
        rating: 4.7,
      },
      {
        name: "Emma",
        rating: 4.9,
      },
      {
        name: "John",
        rating: 4.9,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Kyoto",
    distance: 450,
    address: "Kyoto, Japan",
    price: 99,
    maxGroupSize: 8,
    desc: "Experience the enchanting cherry blossom season in the heart of Japan.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
      {
        name: "Jane Doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: true,
  },
  
  {
    id: "04",
    title: "Beautiful Sunrise",
    city: "Khao Kho",
    distance: 500,
    address: "Phetchabun, Thailand",
    price: 99,
    maxGroupSize: 8,
    desc: "Witness a breathtaking sunrise from one of Thailand's most picturesque locations.",
    reviews: [
      {
        name: "Xian",
        rating: 4.6,
      },
      {
        name: "Susan",
        rating: 4.8,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Penida Adventure",
    city: "Bali",
    distance: 40,
    address: "Nusa Penida, Bali, Indonesia",
    price: 99,
    maxGroupSize: 8,
    desc: "Embark on an unforgettable adventure to Nusa Penida, Bali's hidden gem.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "03",
    title: "Snowy Heights Trek",
    city: "Pokhara",
    distance: 200,
    address: "Poon Hill, Annapurna Region, Nepal",
    price: 99,
    maxGroupSize: 12,
    desc: "Enjoy stunning sunrises and panoramic views of the Annapurna at Poon Hill, a must-visit for trekkers in Nepal.",
    reviews: [
      {
        name: "Mahan",
        rating: 4.8,
      },
      {
        name: "Lisa",
        rating: 4.9,
      },
    ],
    avgRating: 4.85,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "07",
    title: "Wuxi Grand Theatre ",
    city: "Wuxi",
    distance: 500,
    address: "Jiangsu, China",
    price: 99,
    maxGroupSize: 8,
    desc: "Discover the stunning architecture and vibrant performances at Wuxi Grand Theatre, a cultural gem in China.",
    reviews: [
      {
        name: "Sarah",
        rating: 4.8,
      },
      {
        name: "Josef",
        rating: 4.9,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Point Dume Beach Escape",
    city: "Malibu",
    distance: 500,
    address: "Point Dume, Malibu, California",
    price: 99,
    maxGroupSize: 8,
    desc: "Escape to Point Dume, a beautiful beach with scenic cliffs and sandy shores.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;

