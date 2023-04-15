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
