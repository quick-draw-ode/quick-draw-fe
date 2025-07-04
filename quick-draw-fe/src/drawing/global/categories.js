const categories = {
  binoculars: '쌍안경',
  basket: '바구니',
  beach: '해변',
  apple: '사과',
  anvil: '모루',
  airplane: '비행기',
  blackberry: '블랙베리',
  basketball: '농구',
  axe: '도끼',
  baseball: '야구',
  bottlecap: '병뚜껑',
  banana: '바나나',
  bat: '박쥐',
  bicycle: '자전거',
  bucket: '양동이',
  'birthday cake': '생일 케이크',
  broom: '빗자루',
  beard: '수염',
  'The Eiffel Tower': '에펠탑',
  belt: '벨트',
  broccoli: '브로콜리',
  bulldozer: '불도저',
  bear: '곰',
  boomerang: '부메랑',
  book: '책',
  ambulance: '구급차',
  bread: '빵',
  bandage: '붕대',
  bench: '벤치',
  arm: '팔',
  bathtub: '욕조',
  bracelet: '팔찌',
  brain: '뇌',
  'The Mona Lisa': '모나리자',
  barn: '헛간',
  bridge: '다리',
  backpack: '배낭',
  bird: '새',
  'animal migration': '철새 이동',
  blueberry: '블루베리',
  angel: '천사',
  'The Great Wall of China': '만리장성',
  'alarm clock': '알람 시계',
  'aircraft carrier': '항공모함',
  ant: '개미',
  bowtie: '나비넥타이',
  bee: '벌',
  asparagus: '아스파라거스',
  'baseball bat': '야구 방망이',
  bed: '침대',
};

export function getRandomCategory() {
  const keys = Object.keys(categories);
  const index = Math.floor(Math.random() * keys.length);
  const key = keys[index];

  return [key, categories[key]];
}

export default categories;
