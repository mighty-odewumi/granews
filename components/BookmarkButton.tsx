import React from "react";
import { ToastAndroid, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "react-native-paper";
import { toggleBookmark } from "@/store/bookmarkSlice";
import { RootState } from "@/store";

interface BookmarkButtonProps {
  articleId: string;
}

export default function BookmarkButton({ articleId }: BookmarkButtonProps) {
  const dispatch = useDispatch();
  const isBookmarked = useSelector((state: RootState) => 
    state.bookmarks.bookmarkedArticles.includes(articleId)
  );

  // If the article has already been saved, and it is clicked on, 
  // show that it was unsaved, 
  // Else, show that it was just saved
  const toggleToast = () => {
    isBookmarked 
      ? (ToastAndroid.show("News Article unsaved!", ToastAndroid.SHORT)) 
      : (ToastAndroid.show("News Article successfully saved!", ToastAndroid.SHORT));
  }

  const handleToggleBookmark = () => {
    dispatch(toggleBookmark(articleId));
    toggleToast();
  };

  return (
    <TouchableOpacity onPress={handleToggleBookmark}>
      <Icon 
        source={isBookmarked ? "bookmark-check" : "bookmark-outline"}
        size={26}
      />
    </TouchableOpacity>
  )
} 
