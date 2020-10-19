import UserApi from '../assets/api/UserApi';
import * as actionTypes from './actionTypes';

const dispatchUsers = (allUsers) => {
  return {
    type: actionTypes.LOAD_ALL_USERS,
    payload: allUsers,
  };
};

export const loadAllUsers = () => {
  return (dispatch) => {
    UserApi.loadAllUsers((users) => {
      dispatch(dispatchUsers(users));
    });
  };
};

const addUser = (userData) => {
  return {
    type: actionTypes.REGISTER_USER,
    payload: userData,
  };
};

export const registerUser = (data) => {
  return (dispatch) => {
    UserApi.registerUser(data, (userData) => {
      dispatch(addUser(userData));
    });
  };
};

// const login = (allowLogin) => {
//   return {
//     type: actionTypes.LOGIN_USER,
//     payload: allowLogin,
//   };
// };

// export const loginUser = ({ userId, password }) => {
//   let users = [],
//     pairs;
//     return dispatch => {
//       return new Promise((resolve, reject) => {

//         UserApi.logUserIn((allUSers) => {
//           users = allUSers;
//           pairs = users.map((user) => {
//             return [user.email, user.password];
//           });
//           for (const pair of pairs) {
//             console.log(pair);
//             if (pair[0] === userId) {
//               if (pair[1] === password) {
//                 dispatch(login(true));
//                 resolve(true);
//               }
//             }
//           }
//           reject();
//         });
//       });
//     };
// };

export const loginUser = ({ userId, password }, cb) => {
  let users = [],
    pairs;
  UserApi.logUserIn((allUSers) => {
    users = allUSers;
    pairs = users.map((user) => {
      return [user.email, user.password];
    });
    for (const pair of pairs) {
      console.log(pair);
      if (pair[0] === userId) {
        if (pair[1] === password) {
          return cb(true);
        }
      }
    }
    return cb(false);
  });
};
