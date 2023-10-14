const Blog = require('./models/Blogs');

let blogs = [
  {
    authorName: 'Barnabas Smith',
    title: 'Back to the Drawing Board',
    des: 'Over the last few years, I’ve had a series of unfortunate events that created some big changes in my life. My wife came out, we...',
    img: 'https://miro.medium.com/v2/resize:fill:250:168/1*mU-jXnYLA-lo0o0TEmVlpQ.png',
  },
  {
    authorName: 'Microsoft Design',
    title: 'Living Color: Designing through synesthesia',
    des: 'How a design director’s experience with synesthesia influenced her learning in design',
    img: 'https://miro.medium.com/v2/resize:fill:250:168/1*aDcuhrWX6Gqksa9TXmAHjw.png',
  },
  {
    authorName: 'Kelli Huggins',
    title: 'The Weird Sister’s Guide for How Not to Officiate Your Brother’s Wedding',
    des: 'Here’s a handy list of “don’ts” I’ve learned from personal experience.',
    img: 'https://miro.medium.com/v2/resize:fill:250:168/1*NxRsWiaK6QTV4-3md-8wTg.jpeg',
  },
  {
    authorName: 'Andrew Anderson',
    title: 'Arguing about facts doesn’t work — why Politics should be like Couples Therapy',
    des: 'In the documentary series Couples Therapy, middle aged couple Elaine and Desean are at loggerheads. Elaine feels that her...',
    img: 'https://miro.medium.com/v2/resize:fill:250:168/1*2QF4tOksW79FKWvzocHZxA.jpeg',
  },
  {
    authorName: 'Amanda Melheim',
    title: '‘I Hear It Likes the Girls’',
    des: 'The Ghostbusters music video, sexual predators, and race history in America',
    img: 'https://miro.medium.com/v2/resize:fill:250:168/1*fZHJ5StaYulyQCGZC1uZjA.jpeg',
  },
];

async function seedDB() {
  // await Blog.deleteMany({});
  await Blog.insertMany(blogs);
  console.log('hogya push');
}

module.exports = seedDB;
