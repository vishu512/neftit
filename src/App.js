import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Header } from "./components/Header";
import { Profile } from "./pages/Profile";
import { StreakProgress } from "./components/StreakProgress";
import { Discover } from "./pages/Discover";

const App = () => {
  const mockUser = {
    username: "CryptoKing",
    level: 5,
    neftCoins: 420,
    quests: [
      { name: "Daily Check-in", xp: 50 },
      { name: "NFT Purchase", xp: 100 }
    ],
    collectibles: [
      { name: "Neft-70", image: "https://via.placeholder.com/100" },
      { name: "Neft-50", image: "https://via.placeholder.com/100" }
    ]
  };

  return (
    <ThirdwebProvider activeChain="ethereum">
      <div className="min-h-screen bg-gradient-dark text-white">
        <Header isLoggedIn={true} />
        
        <main className="container mx-auto p-4">
          <StreakProgress streakDays={7} />
          <Profile user={mockUser} />
          <Discover />
        </main>
      </div>
    </ThirdwebProvider>
  );
};

export default App;
