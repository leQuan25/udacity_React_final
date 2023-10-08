export const RECEIVE_USERS = "RECEIVE_USERS";
export const TOGGLE_USERS = "TOGGLE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
