export const StreakProgress = ({ streakDays }) => {
  return (
    <div className="bg-dark1 p-4 rounded-lg">
      <h3 className="text-accent mb-2">🔥 {streakDays}-Day Streak</h3>
      <div className="w-full bg-gray2 h-2 rounded-full">
        <div 
          className="bg-accent h-2 rounded-full" 
          style={{ width: `${(streakDays/30)*100}%` }}
        ></div>
      </div>
      <button className="mt-4 bg-accent text-dark1 px-4 py-2 rounded-lg">
        Check-in Today
      </button>
    </div>
  );
};
