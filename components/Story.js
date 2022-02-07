
function Story({ img, username }) {
  return <div>
    <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" src={"https://miro.medium.com/max/375/1*PiHoomzwh9Plr9_GA26JcA.png"} alt={`${username}'s profile pic`} />
    <p className="text-xs w-14 truncate text-center">{username}</p>
  </div>;
}

export default Story;
