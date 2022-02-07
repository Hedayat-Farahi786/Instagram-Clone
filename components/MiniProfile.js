function MiniProfile() {
  return <div className="flex items-center justify-between mt-14 ml-10">
      <img className="w-16 h-16 rounded-full border p-[2px]" src={"https://miro.medium.com/max/375/1*PiHoomzwh9Plr9_GA26JcA.png"} alt="profile pic" />
      <div className="flex-1 mx-4">
          <h2 className="font-bold">Hedayat Farahi</h2>
          <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
  </div>;
}

export default MiniProfile;
