import Post from "./Post";

const posts = [
    {
        id: 1,
        username: "johndoe",
        userImg: "https://miro.medium.com/max/375/1*PiHoomzwh9Plr9_GA26JcA.png",
        img: "https://miro.medium.com/max/375/1*PiHoomzwh9Plr9_GA26JcA.png",
        caption: "This is dope!",
        verified: true,
    },
    {
        id: 2,
        username: "bob",
        userImg: "https://miro.medium.com/max/375/1*PiHoomzwh9Plr9_GA26JcA.png",
        img: "https://miro.medium.com/max/375/1*PiHoomzwh9Plr9_GA26JcA.png",
        caption: "Hello!",
        verified: false,

    }
]

function Posts() {
  return (
  <div>
      {
          posts.map(post => (
              <Post key={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} verified={post.verified} />
          ))
      }
  </div>
  );
}

export default Posts;
