const API_BASE_URL = 'https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev';

export const fetchPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) throw new Error('記事一覧の取得に失敗しました');
  return response.json();
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('記事詳細の取得に失敗しました');
  return response.json();
};
