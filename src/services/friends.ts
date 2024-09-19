import { mockFriends } from "../mocks/mocks";

const getMainlyFriends = async (id: number) => {
  return {
    id,
    data: mockFriends,
  };
}

export {
    getMainlyFriends,
}