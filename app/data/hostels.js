// hostelsData.js
import img1 from "../../public/a.jpeg";
import img2 from "../../public/b.jpeg";
import img3 from "../../public/c.jpeg";
import img5 from "../../public/2.jpeg";
import img6 from "../../public/3.jpeg";

export const hostelsData = [
  {
    id: 1,
    name: 'Hostel 1',
    images: [img1, img2, img3],
    owner: 'John Doe',
    location: 'On-campus',
    price: '$100 per bed'
  },
  {
    id: 2,
    name: 'Hostel 2',
    images: [img5, img6],
    owner: 'Jane Smith',
    location: 'Off-campus',
    price: '$80 per bed'
  },
  // Add more hostels here
];
