const DATA = [
  {
    id: 1,
    city: "Noida",
    price: 35,
  },
  {
    id: 2,
    city: "Noida2",
    price: 35,
  },
  {
    id: 3,
    city: "Noida3",
    price: 35,
  },
  {
    id: 4,
    city: "Noida4",
    price: 35,
  },
  {
    id: 5,
    city: "Noida5",
    price: 35,
  },
  {
    id: 6,
    city: "Noida6",
    price: 35,
  },
  {
    id: 7,
    city: "Noida7",
    price: 35,
  },
  {
    id: 8,
    city: "Noida8",
    price: 35,
  },
  {
    id: 9,
    city: "Noida9",
    price: 35,
  },
  {
    id: 10,
    city: "Noida10",
    price: 35,
  },
];
const CARLIST = [
  {
    id: 1,
    image: require("../assets/images/car1.png"),
    carname: "Wagon",
    passenger: 4,
    luggage: 5,
  },
  {
    id: 2,
    image: require("../assets/images/car2.png"),
    carname: "Wagon",
    passenger: 4,
    luggage: 5,
  },
  {
    id: 3,
    image: require("../assets/images/car3.png"),
    carname: "Wagon",
    passenger: 4,
    luggage: 5,
  },
  {
    id: 4,
    image: require("../assets/images/car4.png"),
    carname: "Wagon",
    passenger: 4,
    luggage: 5,
  },
  {
    id: 5,
    image: require("../assets/images/car5.png"),
    carname: "Wagon",
    passenger: 4,
    luggage: 5,
  },
  {
    id: 6,
    image: require("../assets/images/car1.png"),
    carname: "Wagon",
    passenger: 4,
    luggage: 5,
  },
  {
    id: 7,
    image: require("../assets/images/car2.png"),
    carname: "Wagon",
    passenger: 4,
    luggage: 5,
  },
  {
    id: 8,
    image: require("../assets/images/car3.png"),
    carname: "Wagon",
    passenger: 4,
    luggage: 5,
  },
  {
    id: 9,
    image: require("../assets/images/car4.png"),
    carname: "Wagon",
    passenger: 4,
    luggage: 5,
  },
];

const ROUTES = [
  {
    id: 1,
    title: "Express Cab Taxi From Ahmedabad (Gujarat)",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
  {
    id: 2,
    title: "Express Cab Taxi From Anand (Gujarat)",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
  {
    id: 3,
    title: "Express Cab Taxi From Bharuch (Gujarat)",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
  {
    id: 4,
    title: "Express Cab Taxi From Dahej (Gujarat)",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
  {
    id: 5,
    title: "Express Cab Taxi From Jamnagar (Gujarat)",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
  {
    id: 6,
    title: "Express Cab Taxi From Rajkot (Gujarat)",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
  {
    id: 7,
    title: "Express Cab Taxi From Surat (Gujarat)",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
  {
    id: 8,
    title: "Express Cab Taxi From Delhi",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
  {
    id: 9,
    title: "Express Cab Taxi From Mumbai",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
  {
    id: 10,
    title: "Express Cab Taxi From Agra",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
];

export default {
  DATA,
  CARLIST,
  ROUTES,
};
