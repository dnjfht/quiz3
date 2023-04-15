// action value
const ADDUSERANSWER = "add_user_answer";
const RESETUSERANSWER = "reset_user_answer";

// action creator

export const AddUserAnswer = (payload) => {
  return {
    type: ADDUSERANSWER,
    payload: payload,
  };
};

export const ResetUserAnswer = (payload) => {
  return {
    type: RESETUSERANSWER,
    payload: payload,
  };
};

// initialState
const initialState = {
  name: "유승민",
  quiz_list: [
    {
      image: "assets/1.png",
      quiz: "승민의 mbti는 intj다?",
      answer: false,
    },
    {
      image: "assets/2.png",
      quiz: "승민은 공감을 잘해주는 사람을 좋아한다?",
      answer: true,
    },
    {
      image: "assets/3.png",
      quiz: "승민은 사람들이랑 대화하고 알아가는 것을 즐긴다?",
      answer: true,
    },
    {
      image: "assets/4.png",
      quiz: "승민은 자기개발하는걸 좋아한다?",
      answer: true,
    },
    {
      image: "assets/5.png",
      quiz: "승민의 관심있을 때 하는 행동은 선톡을 하는 것이다?",
      answer: true,
    },
    {
      image: "assets/6.png",
      quiz: "승민은 불같은 연애보다 서로 믿고 의지할 수 있는 연애를 선호한다?",
      answer: true,
    },
    {
      image: "assets/7.png",
      quiz: "승민은 계획을 세우고 차근차근 계획에 옮기는걸 선호한다?",
      answer: true,
    },
    {
      image: "assets/8.png",
      quiz: "승민은 놀이기구 타는 것을 좋아한다?",
      answer: false,
    },
    {
      image: "assets/9.png",
      quiz: "승민은 고1 때부터 흡연을 했다?",
      answer: false,
    },
    {
      image: "assets/10.png",
      quiz: "승민은 소개팅을 나간 적이 있다?",
      answer: false,
    },
    {
      image: "assets/11.png",
      quiz: "승민은 소개팅과 같은 인위적인 만남을 좋아한다?",
      answer: false,
    },
    {
      image: "assets/12.png",
      quiz: "승민은 연인과 갈등이 있을 때 대화로 푸는 것을 선호한다?",
      answer: true,
    },
    {
      image: "assets/13.png",
      quiz: "승민은 연애할 때 항상 상대방의 기분이 우선이다?",
      answer: true,
    },
    {
      image: "assets/14.png",
      quiz: "승민은 좋아하는 사람에게 선물주는 것을 좋아한다?",
      answer: true,
    },
    {
      image: "assets/15.png",
      quiz: "승민은 감수성이 풍부해서 슬픈 영화나 만화를 보고 잘 운다?",
      answer: true,
    },
    {
      image: "assets/16.png",
      quiz: "승민은 본래 무뚝뚝한 성격이다?",
      answer: true,
    },
    {
      image: "assets/17.png",
      quiz: "승민의 노래방 18번곡은 나비무덤이다?",
      answer: false,
    },
    {
      image: "assets/18.png",
      quiz: "승민은 핫플을 돌아다니면서 맛집 탐방을 하고 사진 찍는 데이트를 선호한다?",
      answer: true,
    },
    {
      image: "assets/19.png",
      quiz: "승민은 연애할 때 꽃이나 편지 받는걸 좋아한다?",
      answer: true,
    },
    {
      image: "assets/20.png",
      quiz: "승민은 번호를 따인 적이 있다?",
      answer: false,
    },
  ],
  user_answer: [],
  result_text: {
    40: "나랑 친하지 않은가보군?😑",
    60: "나랑 좀 더 친해져야겠다🙃",
    80: "내적 친밀감 80퍼센트!😎",
    100: "뭐야, 넌 내 소울메이트...!?💖",
  },
};

// reducer

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSERANSWER: {
      const newUserAnswer = [...state.user_answer, action.payload];
      return { ...state, user_answer: newUserAnswer };
    }
    case RESETUSERANSWER: {
      return { ...state, user_answer: [] };
    }
    default:
      return state;
  }
};

export default quiz;
