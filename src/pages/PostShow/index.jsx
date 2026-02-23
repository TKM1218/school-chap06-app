import { useParams } from 'react-router-dom';
import { posts } from '../../data/posts';

const formatDate = (iso) => {
  if (!iso) return '';
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso));
};

export const PostShow = () => {
  const { id } = useParams();
  const post = posts.find((item) => item.id === Number(id));

  return (
    <main className='mx-auto max-w-4xl px-4 py-10 text-gray-800'>
      <article>
        <img
          src={post.thumbnailUrl}
          alt={post.title}
          className="mb-4 w-full"
        />

        <div className="mb-4 flex flex-wrap items-center gap-3">
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

        <h1 className="mb-6 font-bold text-black md:text-3xl">
          <div dangerouslySetInnerHTML={{__html: post.title}}></div>
        </h1>

        <div
          className="leading-relaxed text-gray-600"
          dangerouslySetInnerHTML={{__html: post.content}}
        />
      </article>
    </main>
  );
};
