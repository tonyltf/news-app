import { News } from '../store/news';

export const FETCHING_NEWS = 'FETCHING_NEWS';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILED = 'FETCH_NEWS_FAILED';
export const SEARCH_NEWS = 'SEARCH_NEWS';
export const CLEAR_NEWS = 'CLEAR_NEWS';

interface FetchNewsAction {
  type: typeof FETCHING_NEWS;
  loading: boolean;
}
interface FetchNewsSuccessAction {
  type: typeof FETCH_NEWS_SUCCESS;
  news: News[];
}
interface FetchNewsFailedAction {
  type: typeof FETCH_NEWS_FAILED;
  message: string;
}

interface SearchNewsAction {
  type: typeof SEARCH_NEWS;
  search: string;
}

interface ClearNewsAction {
  type: typeof CLEAR_NEWS;
}

export type NewsActionType = FetchNewsAction | FetchNewsSuccessAction | FetchNewsFailedAction | SearchNewsAction | ClearNewsAction;

export function fetchNews(loading: boolean): FetchNewsAction {
  return {
    type: FETCHING_NEWS,
    loading,
  };
}

export function fetchNewsSuccess(news: News[]): FetchNewsSuccessAction {
  return {
    type: FETCH_NEWS_SUCCESS,
    news,
  };
}

export function fetchNewsFailed(message: string): FetchNewsFailedAction {
  return {
    type: FETCH_NEWS_FAILED,
    message,
  };
}

export function searchNews(search: string): SearchNewsAction {
  return {
    type: SEARCH_NEWS,
    search,
  };
}

export function clearNews(): ClearNewsAction {
  return {
    type: CLEAR_NEWS,
  };
}
