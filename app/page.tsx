export default function Home() {
  return (
    // 背景：真っ黒ではなく、深みのある紺色（slate-950）
    <div className="bg-[#0b0e14] min-h-screen font-sans text-slate-200 overflow-x-hidden">

      {/* 背景のグラデーション：彩度を上げ、中間色を表現 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[100px] animate-bounce-slow"></div>
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[80px]"></div>
      </div>

      {/* Header：ダークグレーの半透明 */}
      {/* Header：高さ調整と項目変更 */}
      <header className="sticky top-0 z-50 bg-[#11151c]/80 backdrop-blur-xl border-b border-white/5 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* ロゴ部分 */}
          <h1 className="text-xl font-black tracking-tighter text-white flex items-center h-10">
            NY’s <span className="text-orange-500 ml-1">PORTFOLIO</span>
          </h1>

          {/* ナビゲーション：項目を Works, Skills, Contact に変更 */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#works" className="hover:text-white transition py-2">Works</a>
            <a href="#skills" className="hover:text-white transition py-2">Skills</a>
            <a href="#contact" className="hover:text-white transition py-2">Contact</a>
<a 
  href="https://github.com/あなたのユーザー名" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-[#232a34] hover:bg-[#2d3540] text-white px-4 py-2 rounded-lg font-bold transition border border-white/10 ml-4 group"
>
  {/* GitHubアイコン (SVG) */}
  <svg className="w-5 h-5 text-white group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
  <span className="text-sm">GitHub</span>
</a>
          </nav>
        </div>
      </header>


      {/* Hero Section：背景を少し透かした濃いグレーのカード */}
      <section className="relative z-10 pt-16 pb-10 px-4">
        <div className="max-w-5xl mx-auto bg-[#1a1f26]/60 backdrop-blur-md rounded-[2.5rem] p-10 md:p-20 border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-orange-400 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
                Software Engineer
              </span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight text-white">
                トレンドを<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500">
                  キャッチアップ。
                </span>
              </h2>
              <p className="text-lg text-slate-400 font-medium max-w-lg leading-relaxed">
                AWSを活用したスケーラブルなインフラ構築から、Javaによるバックエンド実装まで実績があります。
              </p>
            </div>

            {/* 浮かび上がるアバター */}
            <div className="relative group">
              {/* 背後の発光エフェクト */}
              <div className="absolute inset-0 bg-orange-500 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative w-64 h-64 rounded-[3rem] bg-[#232a34] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="text-slate-500 text-sm font-bold"><img
                  src="/me.jpeg"
                  alt="My Avatar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section：グリッド */}
      {/* Works Section：グリッド */}
      <main className="relative z-10 max-w-6xl mx-auto py-20 px-4" id="works">
        <div className="flex justify-between items-end mb-12 px-2">
          <h3 className="text-3xl font-black text-white">Featured Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* --- AI Chat Appの実績カード --- */}
          <div className="group bg-[#161b22]/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all duration-500 shadow-lg">
            <div className="aspect-[16/10] bg-[#21262d] relative overflow-hidden text-center flex items-center justify-center px-4">
              {/* 背景のグラデーション装飾 */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-transparent group-hover:scale-110 transition-transform duration-700"></div>

              {/* タイトルロゴ風のテキスト表示 */}
              <div className="relative z-10">
                <p className="text-white font-black text-2xl tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                  SwiftUI × AWS<br />
                  <span className="text-orange-500 text-lg">AI Chat Engine</span>
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-bold text-white">Generative AI Chat App</h4>
                <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded border border-orange-500/30">Latest Tech</span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Bedrock Converse API を活用したチャットアプリ。IAM権限の最小化や CORS 設定、Bedrockを使用したAI機能での実装、インフラからフロントまで一気通貫で構築しました。
              </p>

              <div className="space-y-4">
                {/* 技術タグ */}
                <div className="flex flex-wrap gap-2">
                  {['SwiftUI', 'AWS Lambda', 'Node.js', 'Bedrock'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-500 bg-white/5 border border-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 解決した課題ポイント（ここが評価されます） */}
                <ul className="text-[11px] text-slate-500 space-y-1 border-t border-white/5 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    Converse API によるマルチモデル対応
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    API Gateway + Lambda の CORS 回避実装
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    実運用を想定した IAM Role の詳細設計
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* --- 作品3枚目 --- */}
          {/* --- ポートフォリオサイトの実績カード --- */}
          <div className="group bg-[#161b22]/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all duration-500 shadow-lg">
            <div className="aspect-[16/10] bg-[#21262d] relative overflow-hidden text-center flex items-center justify-center px-4">
              {/* 背景のグラデーション：1枚目と対比させて紫メインに */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent group-hover:scale-110 transition-transform duration-700"></div>

              <div className="relative z-10 text-white font-black text-2xl tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                Next.js × AWS<br />
                <span className="text-purple-400 text-lg">Modern Portfolio</span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-bold text-white">Fullstack Portfolio</h4>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded border border-purple-500/30">This Site</span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                デザインからインフラ構築まで一貫して制作。ミッドナイトトーンを基調とした Glassmorphism デザインを採用し、視認性とモダンさを両立させました。
              </p>

              <div className="space-y-4">
                {/* 技術タグ */}
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Tailwind CSS', 'TypeScript', 'AWS S3'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-500 bg-white/5 border border-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 技術的なこだわり */}
                <ul className="text-[11px] text-slate-500 space-y-1 border-t border-white/5 pt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                    静的サイト書き出し (next export) による高速化
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                    Tailwind による完全レスポンシブ・アニメーション
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                    AWS S3 を利用した堅牢なホスティング構成
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <section id="skills" className="mt-16 mb-10 scroll-mt-24">
          <div className="bg-[#161b22]/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-10 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black text-white mb-4">Skills</h3>
              <p className="text-slate-400">日々新しいことを学ぶことが好きです。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "言語",
                  skills: [
                    { name: "Java", level: "85%" },
                    { name: "Objective-C", level: "60%" },
                    { name: "Swift", level: "55%" },
                    { name: "SQL", level: "65%" }
                  ]
                },
                {
                  category: "モバイル",
                  skills: [
                    { name: "Android (AndroidStudio / Logcat / ビルド / 端末検証)", level: "65%" },
                    { name: "iOS (Xcode / シミュレータ / ビルド / 端末検証)", level: "90%" }
                  ]
                },
                {
                  category: "サーバー/ミドルウェア",
                  skills: [
                    { name: "WebLogic", level: "60%" },
                    { name: "Linux", level: "90%" }
                  ]
                },
                {
                  category: "リリース・運用",
                  skills: [
                    { name: "本番リリース作業", level: "70%" },
                    { name: "本番パッチ作業", level: "65%" },
                    { name: "リリース手順書作成", level: "75%" },
                    { name: "ステージング / 本番環境理解", level: "70%" }
                  ]
                },
                {
                  category: "開発ツール",
                  skills: [
                    { name: "WinSCP", level: "70%" },
                    { name: "Tera Term", level: "70%" },
                    { name: "Postman (API疎通確認)", level: "65%" },
                  ]
                },
                {
                  category: "チームツール",
                  skills: [
                    { name: "Git", level: "65%" },
                    { name: "SVN", level: "60%" },
                    { name: "Slack (チームコミュニケーション)", level: "80%" },
                    { name: "Notion (個人用情報整理)", level: "75%" }
                  ]
                },
                {
                  category: "検証・調整業務",
                  skills: [
                    { name: "テスト端末準備・管理", level: "75%" },
                    { name: "ICカード作成・検証", level: "70%" },
                    { name: "ATM端末読み取り検証作業", level: "65%" }
                  ]
                },
                {
                  category: "クラウド（知識ベース）",
                  skills: [
                    { name: "AWS (CLF / AIF / SAA)", level: "知識保有" },
                    { name: "クラウドシフト疎通確認・検証", level: "50%" }
                  ]
                }
              ].map((group) => (
                <div key={group.category} className="bg-[#1a1f26]/60 border border-white/5 p-6 rounded-2xl shadow-xl">
                  <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">{group.category}</h4>
                  <div className="space-y-6">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-slate-500">{skill.level}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                            style={{ width: skill.level }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 学習中の技術（バッジ形式） */}
            <div className="mt-16 text-center">
              <h4 className="text-xl font-bold text-white mb-6">学習中の技術</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['AWS', 'GCP', 'Swift', 'AR'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-[#232a34] border border-white/10 text-slate-300 rounded-full text-sm font-semibold hover:border-purple-500/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">クラウドを中心としたセキュリティ対策など常に新しい技術を学び続けています</p>
            </div>
          </div>
        </section>
      </main>
      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-4xl mx-auto pb-20 pt-0 px-4 text-center">
        <div className="bg-gradient-to-b from-[#1a1f26]/40 to-transparent p-12 rounded-[3rem] border border-white/5 backdrop-blur-sm">
          <h3 className="text-3xl font-black text-white mb-6">Let's Connect</h3>
          <p className="text-slate-400 mb-10 max-w-md mx-auto">
            新しい技術への挑戦や、面白いプロジェクトのお誘いをお待ちしています。
          </p>

          <div className="flex justify-center gap-6">
            {/* GitHub */}
            <a href="https://github.com/yzilk" target="_blank" className="group flex flex-col items-center">
              <div className="w-14 h-14 bg-[#232a34] border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-orange-500/50 group-hover:scale-110 transition-all">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              </div>
              <span className="text-[10px] mt-2 text-slate-500 font-bold group-hover:text-orange-400">GITHUB</span>
            </a>

            {/* Email*/}
            <a href="mailto:yuzzzn@gmail.com" className="group flex flex-col items-center">
              <div className="w-14 h-14 bg-[#232a34] border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-purple-500/50 group-hover:scale-110 transition-all">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span className="text-[10px] mt-2 text-slate-500 font-bold group-hover:text-purple-400">EMAIL</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="relative z-10 py-16 text-center border-t border-white/5">
        <p className="text-slate-500 text-sm">© 2026 Yugo Noji. Crafted with Next.js & AWS.</p>
      </footer>
    </div>
  );
}