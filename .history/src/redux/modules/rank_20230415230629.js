import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

// action value
const ADDUSERNAME = "add_user_name";
const GETRANK = "get_rank";
const ADDRANK = "add_rank";

// action creator
export const GetRank = (payload) => {
  return {
    type: GETRANK,
    payload: payload,
  };
};

export const AddUserName = (payload) => {
  return {
    type: ADDUSERNAME,
    payload: payload,
  };
};

export const AddRank = (payload) => {
  return {
    type: ADDRANK,
    payload: payload,
  };
};

export const loadQuizFB = () => {
  return async function (dispatch) {
    const quiz_data = await getDocs(collection(db, "quiz"));
    console.log(quiz_data);

    let quiz_list = [];

    quiz_data.forEach((doc) => {
      console.log(doc.data());
      quiz_list.push({ id: doc.id, ...doc.data() });
    });

    console.log(quiz_list);

    dispatch(GetRank(quiz_list));
  };
};

export const addQuizFB = (payload) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "quiz"), payload);
    // const _quiz = await getDoc(docRef);
    // const quiz = { id: _quiz.id, ..._quiz.data() };
    // dispatch(AddRank(quiz));

    // 추가한 데이터 중 id를 가져와서 bucket_data 만들기.
    // const bucket_data = { id: docRef.id, ...payload };
    // // 마지막으로 액션 일으키기 (수정해달라고 요청)
    // dispatch(createWidget(bucket_data));
  };
};

// initialState
const initialState = {
  user_name: "",
  rank: [
    // { score: 100, name: "방가방가", comment: "다들 잘생겼다" },
    // { score: 40, name: "이하늘", comment: "너무 어려운데..." },
    // { score: 60, name: "오하요~!", comment: "잘 생긴 사람이 곧 이상형" },
  ],
};

// reducer
const rank = (state = initialState, action) => {
  switch (action.type) {
    case GETRANK: {
      console.log(action.payload);
      return { ...state, rank: action.payload };
    }
    case ADDUSERNAME: {
      return { ...state, user_name: action.payload };
    }
    case ADDRANK: {
      const new_rank_data = [...state.rank, action.payload];
      return { ...state, rank: new_rank_data };
    }
    default:
      return state;
  }
};
export default rank;
