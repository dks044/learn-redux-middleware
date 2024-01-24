// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 샘플 데이터
const posts = [
  {
    id: 1,
    title: '야스오',
    body: '미드 챔피언'
  },
  {
    id: 2,
    title: '리덕스',
    body: 'loreamloreamloreamloreamloreamloreamloreamloreamloreamloreamloreamloreamloreamloreamloreamloreamloreamloream'
  },
  {
    id: 3,
    title: 'redux-saga',
    body:
      '귀찮다'
  }
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  await sleep(500); // 0.5초 쉬고
  return posts; // posts 배열
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
  await sleep(500); // 0.5초 쉬고
  return posts.find(post => post.id === id); // id 로 찾아서 반환
};