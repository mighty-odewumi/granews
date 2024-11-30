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
  const mainUrl = new URL("https://newsdata.io/api/1/latest"); 
  mainUrl.searchParams.append("apikey", API_KEY);
  searchQuery && mainUrl.searchParams.append("q", searchQuery);
  const finalUrl = mainUrl.href;
  
  try {
    setLoading(true);
    const response = await axios.get(finalUrl); 
    const fetchedData = response.data.results; 
    console.log(fetchedData);
    setData(fetchedData);
    dispatch(setArticles(fetchedData));
  } catch (error) {
    console.error("Couldn't fetch data!", error);
  } finally {
    setLoading(false);
  }
};
