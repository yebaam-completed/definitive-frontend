/* eslint-disable @typescript-eslint/no-explicit-any */
import { some, findIndex } from "lodash";
import { addNotification, clearNotification } from "../../features/notifications/reducers/notification.reducer";
import { addUser, clearUser } from "../../features/users/reducers/user.reducer";
import { Dispatch } from "@reduxjs/toolkit";
import { IUserDocument } from "../../features/users/interfaces/user.interface";
import millify from "millify";

interface DispatchUserParams {
  result: {
    data: {
      token: string;
      user: IUserDocument;
    };
  };
  pageReload: (reload: boolean) => void;
  dispatch: Dispatch;
  setUser: (user: IUserDocument) => void;
}

interface ClearStoreParams {
  dispatch: Dispatch;
  deleteStorageUsername: () => void;
  deleteSessionPageReload: () => void;
  setLoggedIn: (loggedIn: boolean) => void;
}

export class Utils {
  static dispatchUser({ result, pageReload, dispatch, setUser }: DispatchUserParams): void {
    pageReload(true);
    dispatch(addUser({ token: result.data.token, profile: result.data.user }));
    setUser(result.data.user);
  }

  static clearStore({ dispatch, deleteStorageUsername, deleteSessionPageReload, setLoggedIn }: ClearStoreParams): void {
    dispatch(clearUser());
    dispatch(clearNotification());
    deleteStorageUsername();
    deleteSessionPageReload();
    setLoggedIn(false);
  }

  static dispatchNotification(message: string, type: any, dispatch: Dispatch): void {
    dispatch(addNotification({ message, type }));
  }

  static dispatchClearNotification(dispatch: Dispatch): void {
    dispatch(clearNotification());
  }

  static appImageUrl(version: string, id: string): string {
    version = version.replace(/['"]+/g, '');
    id = id.replace(/['"]+/g, '');
    return `https://res.cloudinary.com/dzqpacupf/image/upload/v${version}/${id}`;
  }

  static generateString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static checkIfUserIsBlocked(blocked: string[], userId: string): boolean {
    return some(blocked, (id) => id === userId);
  }

  static checkIfUserIsFollowed(userFollowers: IUserDocument[], postCreatorId: string, userId: string): boolean {
    return some(userFollowers, (user) => user._id === postCreatorId || postCreatorId === userId);
  }

  static checkIfUserIsOnline(username: string | undefined, onlineUsers: string[]): boolean {
    return some(onlineUsers, (user) => user === username?.toLowerCase());
  }

  static firstLetterUpperCase(word: string): string {
    if (!word) return '';
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }

  static formattedReactions(reactions: Record<string, number>): Array<{ type: string; value: number }> {
    const postReactions: Array<{ type: string; value: number }> = [];
    for (const [key, value] of Object.entries(reactions)) {
      if (value > 0) {
        const reactionObject = {
          type: key,
          value
        };
        postReactions.push(reactionObject);
      }
    }
    return postReactions;
  }

  static shortenLargeNumbers(data: number | undefined): string | number {
    if (data === undefined) {
      return 0;
    } else {
      return millify(data);
    }
  }

  static getImage(imageId: string, imageVersion: string): string {
    return imageId && imageVersion ? this.appImageUrl(imageVersion, imageId) : '';
  }

  static getVideo(videoId: string, videoVersion: string): string {
    return videoId && videoVersion
      ? `https://res.cloudinary.com/dzqpacupf/video/upload/v${videoVersion}/${videoId}`
      : '';
  }

  static removeUserFromList(list: string[], userId: string): string[] {
    const index = findIndex(list, (id) => id === userId);
    if (index !== -1) {
      list.splice(index, 1);
    }
    return list;
  }

  static checkUrl(url: string, word: string): boolean {
    return url.includes(word);
  }

  static renameFile(element: File): File {
    const fileName = element.name.split('.').slice(0, -1).join('.');
    const blob = element.slice(0, element.size, '/image/png');
    const newFile = new File([blob], `${fileName}.png`, { type: '/image/png' });
    return newFile;
  }
}
