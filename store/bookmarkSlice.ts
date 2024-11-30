import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface BookmarkState {
  bookmarkedArticles: string[],
  articles: any[],
}

const initialState: BookmarkState = {
  bookmarkedArticles: [],
  articles: [],
}

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    setBookmarks: (state, action: PayloadAction<string[]>)  => {
      state.bookmarkedArticles = action.payload;
    },
    toggleBookmark: (state, action: PayloadAction<string>) => {
      const articleId = action.payload;
      const index = state.bookmarkedArticles.indexOf(articleId)
      if (index > -1) {
        state.bookmarkedArticles.splice(index, 1);
      } else {
        state.bookmarkedArticles.push(articleId);
      }

      AsyncStorage.setItem("bookmarks", JSON.stringify(state.bookmarkedArticles));
    },
    setArticles: (state, action: PayloadAction<any[]>) => {
      state.articles = action.payload;
    }
  }
});

export const { setBookmarks, toggleBookmark, setArticles } = bookmarkSlice.actions;

// Thunk to load bookmarks from AsyncStorage
export const loadBookmarks = () => async (dispatch: any) => {
  try {
    const bookmarksJson = await AsyncStorage.getItem("bookmarks");
    if (bookmarksJson) {
      const bookmarks = JSON.parse(bookmarksJson);
      dispatch(setBookmarks(bookmarks));
    }
  } catch(error) {
    console.error("Failed to load bookmarks", error);
  }
}

export default bookmarkSlice.reducer;
