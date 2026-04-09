export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      {/* Hero Section - 建立第一印象 */}
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          GamingLogic.sg
        </h1>
        <p className="text-xl text-neutral-400 mb-8">
          专业的博弈数据分析与玩法百科，带你破解随机数生成器 (RNG) 的秘密。
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-lg font-bold">查看游戏攻略</button>
          <button className="border border-neutral-700 hover:bg-neutral-900 px-6 py-3 rounded-lg">概率计算器</button>
        </div>
      </section>

      {/* 核心分类 - 语义权重分配 */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        <div className="p-6 border border-neutral-800 rounded-2xl hover:border-yellow-600/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Slot Games</h2>
          <p className="text-neutral-500">深入解析老虎机波动率、RTP（返还率）及赢钱逻辑。</p>
        </div>
        <div className="p-6 border border-neutral-800 rounded-2xl hover:border-yellow-600/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Table Games</h2>
          <p className="text-neutral-500">百家乐、二十一点、轮盘——基于数学模型的进阶玩法。</p>
        </div>
        <div className="p-6 border border-neutral-800 rounded-2xl hover:border-yellow-600/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Sports Betting</h2>
          <p className="text-neutral-500">从数据看盘口，掌握体育博弈的核心赔率分析方法。</p>
        </div>
      </section>
    </main>
  );
}