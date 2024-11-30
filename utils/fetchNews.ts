import { Dispatch, SetStateAction } from 'react';
import { setArticles } from '@/store/bookmarkSlice';
import { AppDispatch } from '@/store/index'; 
import axios from 'axios';
import { API_KEY } from '@/constants/ApiKey';

export const fetchNews = async (
  setData: Dispatch<SetStateAction<any[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  dispatch: AppDispatch,
  searchQuery: string
) => {
  const mainUrl = new URL("https://api.thenewsapi.com/v1/news/all"); 
  mainUrl.searchParams.append("api_token", API_KEY);
  searchQuery && mainUrl.searchParams.append("search", searchQuery);
  const finalUrl = mainUrl.href;

  try {
    setLoading(true);
    const response = await axios.get(finalUrl); 
    const fetchedData = response.data.data; 
    setData(fetchedData);
    dispatch(setArticles(fetchedData));
  } catch (error) {
    console.error("Couldn't fetch data!", error);
  } finally {
    setLoading(false);
  }
};
