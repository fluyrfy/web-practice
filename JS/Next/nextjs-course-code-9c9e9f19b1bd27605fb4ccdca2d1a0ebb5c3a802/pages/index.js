import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/20200809_Taipei%2C_Taiwan_Skyline.jpg/1342px-20200809_Taipei%2C_Taiwan_Skyline.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/20200809_Taipei%2C_Taiwan_Skyline.jpg/1342px-20200809_Taipei%2C_Taiwan_Skyline.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/20200809_Taipei%2C_Taiwan_Skyline.jpg/1342px-20200809_Taipei%2C_Taiwan_Skyline.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
};

export default HomePage;
