


// const numbers = '[]';

export const setBlogsToLocal = (blogs) => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}


export const getBlogsFromLocal = () => {
  const blogs = localStorage.getItem('blogs');
  return blogs ? JSON.parse(blogs) : [];
}


