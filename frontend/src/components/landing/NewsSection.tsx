import type { NewsPost } from "@ndip/shared/types";

interface Props {
  posts: NewsPost[];
}

export function NewsSection({ posts }: Props) {
  return (
    <section className="bg-[#FDFAF8] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] font-black tracking-widest text-[#F57C20] uppercase bg-[#FFF7F2] border border-[#ECE7E2] px-3 py-1 rounded-full">
              LATEST INSIGHTS
            </span>
            <h2 className="text-3xl font-black text-[#1B2559] mt-3 leading-tight">
              News & Perspectives
            </h2>
            <p className="text-[#667085] text-sm mt-2 max-w-md leading-relaxed">
              Stories, insights, and updates on innovation in African higher education.
            </p>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#1F2B6C] text-[#1F2B6C] text-sm font-black hover:bg-[#1F2B6C] hover:text-white transition-all duration-200 shrink-0">
            View All News →
          </button>
        </div>

        {/* News Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-[18px] overflow-hidden border border-[#ECE7E2] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              {/* Cover image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.coverImageUrl || "/images/neil-bg0.jpg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {post.category && (
                  <span className="absolute top-4 left-4 bg-[#F57C20] text-white text-[9.5px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    {post.category}
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="text-[13.5px] font-black text-[#1B2559] leading-snug mb-2 group-hover:text-[#F57C20] transition-colors duration-200 line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-[11.5px] text-[#667085] font-semibold leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-3 border-t border-[#ECE7E2]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1F2B6C] text-white text-[9px] font-black flex items-center justify-center shrink-0">
                      {post.authorName?.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[10px] font-bold text-[#667085]">{post.authorName}</span>
                  </div>
                  {post.publishedAt && (
                    <span className="text-[10px] font-semibold text-[#98A2B3]">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 flex justify-center sm:hidden">
          <button className="px-6 py-3 rounded-full border-2 border-[#1F2B6C] text-[#1F2B6C] text-sm font-black hover:bg-[#1F2B6C] hover:text-white transition-all duration-200">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
