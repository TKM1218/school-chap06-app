import { posts } from '../../data/posts';

const formatDate = (iso) => {
  if (!iso) return '';
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso));
};

export const PostIndex = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-[#333333] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <p className="text-lg font-bold">Blog</p>
          <a href="#" className="text-sm font-bold hover:opacity-80">
            お問い合わせ
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="mb-8 text-xl font-bold">記事一覧</h1>

        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col gap-6 border-b border-gray-200 pb-8 last:border-b-0 md:flex-row"
            >
              <div className="w-full shrink-0 md:w-[280px]">
                <img src={post.thumbnailUrl}></img>
              </div>

              <div className="flex1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <time className="text-sm font-medium text-gray-500">
                    {formatDate(post.createdAt)}
                  </time>

                  <div className="flex gap-2">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="mb-2 text-lg font-bold text-black md:text-xl">
                  {post.title}
                </h2>

                <p className="text-sm leading-relaxed text-gray-600">
                  {post.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};
