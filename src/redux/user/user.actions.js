import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFail = err => ({
  type: UserActionTypes.SIGN_IN_FAIL,
  payload: err
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFail = err => ({
  type: UserActionTypes.SIGN_OUT_FAIL,
  payload: err
});

export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: {
    user,
    additionalData
  }
});

export const signUpFail = err => ({
  type: UserActionTypes.SIGN_UP_FAIL,
  payload: err
});

// email
export const emailSignInStart = emailAndPswd => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPswd
});
