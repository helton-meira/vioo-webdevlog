"use client";

import { PostData } from "../lib/posts";
import { useState } from "react";
import { Terminal, Palette, BrainCircuit, Server, History, GitCommit } from "lucide-react";

const tagColors: Record<string, string> = {
  Backend: "text-tag-backend bg-tag-backend/10 border-tag-backend/20",
  Design: "text-tag-design bg-tag-design/10 border-tag-design/20",
  IA: "text-tag-ia bg-tag-ia/10 border-tag-ia/20",
  Infra: "text-tag-infra bg-slate-500/10 border-slate-500/20",
};

const tagIcons: Record<string, React.ReactNode> = {
  Backend: <Terminal size={16} />,
  Design: <Palette size={16} />,
  IA: <BrainCircuit size={16} />,
  Infra: <Server size={16} />,
};

export default function Timeline({ posts }: { posts: PostData[] }) {
  const [filter, setFilter] = useState<string | null>(null);
  const filteredPosts = filter ? posts.filter((post) => post.tags.includes(filter)) : posts;
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

  return (
    <>
      <section className="mb-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold mr-2 opacity-60">Filtrar por:</span>
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-lg transition-all text-sm font-medium border ${filter === null ? "bg-primary text-white border-primary" : "bg-slate-200 dark:bg-slate-800 border-transparent hover:border-primary/30"}`}
          >
            Todas
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(filter === tag ? null : tag)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium border ${filter === tag ? "bg-primary/10 text-primary border-primary" : "bg-slate-200 dark:bg-slate-800 border-transparent hover:border-primary/30 text-slate-600 dark:text-slate-300"}`}
            >
              {tagIcons[tag]} {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="relative min-h-[400px]">
        <div className="absolute left-[4.5rem] md:left-[8.5rem] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800"></div>
        <div className="space-y-16">
          {filteredPosts.length === 0 && (
            <p className="text-center text-slate-500 py-10 ml-20">Nenhuma atualização encontrada.</p>
          )}
          {filteredPosts.map((post) => {
            const dateObj = new Date(post.date + "T12:00:00");
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString("pt-BR", { month: "short" }).replace(".", "");
            const year = dateObj.getFullYear();

            return (
              <div key={post.id} className="relative grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-8 group">
                <div className="text-right pt-2 pr-4 md:pr-10">
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 capitalize">{day} {month}</p>
                  <p className="text-xs font-medium opacity-50">{year}</p>
                </div>
                <div className="relative pl-8 pb-4">
                  <div className="absolute left-[-1.5px] top-4 size-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-background-light dark:border-background-dark z-10 group-hover:bg-primary transition-all"></div>
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span key={tag} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${tagColors[tag] || tagColors["Infra"]}`}>{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm whitespace-pre-line">{post.content}</p>
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                      {post.version && (<span className="flex items-center gap-1"><GitCommit size={14} /> {post.version}</span>)}
                      <span className="flex items-center gap-1"><History size={14} /> Postado por @admin</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
