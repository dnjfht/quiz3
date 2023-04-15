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
      answer: true,
    },
    {
      image: "assets/2.png",
      quiz: "승민은 고기를 좋아한다?",
      answer: false,
    },
    {
      image: "assets/3.png",
      quiz: "승민은 사람들한테 관심이 없는 편이다?",
      answer: true,
    },
    {
      image: "assets/4.png",
      quiz: "승민의 키는 158cm다?",
      answer: false,
    },
    {
      image: "assets/5.png",
      quiz: "승민은 패션디자인을 전공했었다?",
      answer: false,
    },
    {
      image: "assets/6.png",
      quiz: "승민의 주량은 소주 5잔이다?",
      answer: false,
    },
    {
      image: "assets/7.png",
      quiz: "최수빈은 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "assets/8.png",
      quiz: "김태형은 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "assets/9.png",
      quiz: "송강은 유승민의 이상형이다?",
      answer: false,
    },
    {
      image: "assets/10.png",
      quiz: "우도환은 유승민의 이상형이다?",
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
