import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ChangeEvent, CSSProperties, Dispatch, KeyboardEvent, ReactNode, SetStateAction } from 'react';
import { ISignInPayload, ISignUpPayload, IResetPassword, IAuthResponse, IAuthDocument } from '../../features/auth/interfaces/auth.interface';


export type validationErrorsType =
  | ISignInPayload
  | ISignUpPayload
  | IResetPassword
  // | IPersonalInfoData
  // | IExperience
  // | IEducation
  // | ILanguage;

export interface IQueryResponse {
  data: IAuthResponse;
  error: FetchBaseQueryError | SerializedError;
}

export interface IResponse {
  message?: string;
  token?: string;
  user?: IAuthDocument;
  users?: IAuthDocument;
  // bussineUsrId?: IBussinesDocument;
  // professional?: IProfessionalDocument;
  // professionals?: IProfessionalDocument[];
  // blog?: IBlog;
  // blogs?: IBlog[];
  post?: string;
  posts?: string[];

  comment?: string;
  comments?: string[];


  total?: number;
  sortItems?: string[];
  // conversations?: IConversationDocument[] | IMessageDocument[];
  // messages?: IMessageDocument[];
  // messageData?: IMessageDocument;
  conversationId?: string;
  clientSecret?: string;
  review?: IReviewDocument;
  reviews?: IReviewDocument[];
  notifications?: string[];
  browserName?: string;
  deviceType?: string;
}

export interface IBannerProps {
  bgColor: string;
  text: string;
  showLink: boolean;
  linkText?: string;
  onClick?: () => void;
}

export interface IAlertProps {
  type: string;
  message: string;
}

export interface IAlertTypes {
  [key: string]: string;
  success: string;
  error: string;
  warning: string;
}

export interface IBreadCrumbProps {
  breadCrumbItems: string[];
}

export interface IDropdownProps {
  text: string;
  values: string[];
  maxHeight: string;
  mainClassNames?: string;
  dropdownClassNames?: string;
  showSearchInput?: boolean;
  style?: CSSProperties;
  setValue?: Dispatch<SetStateAction<string>>;
  onClick?: (item: string) => void;
}

export interface IHtmlParserProps {
  input: string;
}

export interface IPageMessageProps {
  header: string;
  body: string;
}

export interface ITextInputProps {
  id?: string;
  name?: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  readOnly?: boolean;
  checked?: boolean;
  rows?: number;
  autoFocus?: boolean;
  maxLength?: number;
  min?: string | number;
  max?: string | number;
  onChange?: (event: ChangeEvent) => void;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyUp?: () => void;
  onKeyDown?: (event: KeyboardEvent) => void;
}

export interface IButtonProps {
  label?: string | ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  id?: string;
  className?: string;
  role?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (event?: any) => void;
  disabled?: boolean;
  testId?: string;
}

export interface ISliderImagesText {
  header: string;
  subHeader: string;
}

export interface IStarRatingProps {
  value?: number;
  size?: number;
  setReviewRating?: Dispatch<SetStateAction<number>>;
}

export interface IGigCardItemModal {
  overlay: boolean;
  deleteApproval: boolean;
}



export interface IReviewMessageDetails {
  gigId?: string;
  reviewerId?: string;
  sellerId?: string;
  review?: string;
  rating?: number;
  orderId?: string;
  createdAt?: string;
  type: string;
}

export interface IRatingTypes {
  [key: string]: string;
}

export interface IReviewDocument {
  _id?: string;
  gigId: string;
  reviewerId: string;
  sellerId: string;
  review: string;
  reviewerImage: string;
  rating: number;
  orderId: string;
  createdAt: Date | string;
  reviewerUsername: string;
  country: string;
  reviewType?: string;
}

export interface IRatingCategoryItem {
  value: number;
  count: number;
}

export interface IRatingCategories {
  five: IRatingCategoryItem;
  four: IRatingCategoryItem;
  three: IRatingCategoryItem;
  two: IRatingCategoryItem;
  one: IRatingCategoryItem;
}

export interface postModel
{
  id: number,
  bgColor: string,
  post: string,
  gifUrl: string,
  imgId: string,
  imgVersion: string,
  image: string,
  privacy: string,
  profilePicture: string,
  feelings: string
}
export interface friendModel
{
  id: number,
  name: string,
  imageSrc: string,
  mutualFriends: number
}