import { GITHUB_URL } from '@/constants/links';
import { GITHUB_URL_PF } from '@/constants/links';
import { GITHUB_URL_KINACO } from '@/constants/links';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillCard } from '@/components/SkillCard';
import { SKILL_GROUPS } from '@/constants/skills';
import { ContactLink } from '@/components/ContactLink';

export default function Home() {
  return (
    <div className="bg-[#0b0e14] min-h-screen font-sans text-slate-200 overflow-x-hidden">

      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[100px] animate-bounce-slow"></div>
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[80px]"></div>
      </div>

      <header className="sticky top-0 z-50 bg-[#11151c]/80 backdrop-blur-xl border-b border-white/5 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black tracking-tighter text-white flex items-center h-10">
            NY’s <span className="text-orange-500 ml-1">PORTFOLIO</span>
          </h1>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#works" className="hover:text-white transition py-2">Works</a>
            <a href="#skills" className="hover:text-white transition py-2">Skills</a>
            <a href="#contact" className="hover:text-white transition py-2">Contact</a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#232a34] hover:bg-[#2d3540] text-white px-4 py-2 rounded-lg font-bold transition border border-white/10 ml-4 group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="text-sm">GitHub</span>
            </a>
          </nav>
        </div>
      </header>

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

            <div className="relative group">
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

      {/* Works Section*/}
      <main className="relative z-10 max-w-6xl mx-auto py-20 px-4" id="works">

        <div className="flex justify-between items-end mb-12 px-2">
          <h3 className="text-3xl font-black text-white">Featured Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <ProjectCard
            color="orange"
            title="[作成中]  KinaCo AI Chat App"
            subTitle="SwiftUI × AWS"
            cardTitle="Generative AI Chat App"
            description="Bedrock Converse API を活用したチャットアプリ。IAM権限の最小化や CORS 設定、インフラからフロントまで一気通貫で構築しました。"
            tags={['SwiftUI', 'AWS Lambda', 'Node.js', 'Bedrock']}
            points={['Converse API によるマルチモデル対応', 'API Gateway + Lambda の CORS 回避実装', '実運用を想定した IAM Role の詳細設計']}
            href={GITHUB_URL_KINACO}
          />

          <ProjectCard
            color="purple"
            title="Modern Portfolio"
            subTitle="Next.js × AWS"
            cardTitle="Fullstack Portfolio"
            description="デザインからインフラ構築まで一貫して制作。ミッドナイトトーンを基調とした Glassmorphism デザインを採用しました。"
            tags={['Next.js', 'Tailwind CSS', 'TypeScript', 'AWS S3']}
            points={['静的サイト書き出しによる高速化', 'Tailwind による完全レスポンシブ', 'AWS S3 を利用した堅牢なホスティング']}
            href={GITHUB_URL_PF}
          />
        </div>

        {/* Skills Section */}
        <section id="skills" className="mt-16 mb-10 scroll-mt-24">
          <div className="bg-[#161b22]/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-10 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black text-white mb-4">Skills</h3>
              <p className="text-slate-400">日々新しいことを学ぶことが好きです。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILL_GROUPS.map((group) => (
                <SkillCard key={group.category} {...group} />
              ))}
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
            <ContactLink
              href={GITHUB_URL}
              label="GITHUB"
              hoverColor="orange"
              icon={
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              }
            />
            <ContactLink
              href="mailto:yuzzzn@gmail.com"
              label="EMAIL"
              hoverColor="purple"
              icon={
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              }
            />
          </div>
        </div>
      </section>
      <footer className="relative z-10 py-16 text-center border-t border-white/5">
        <p className="text-slate-500 text-sm">© 2026 Yugo Noji. Crafted with Next.js & AWS.</p>
      </footer>
    </div>
  );
}