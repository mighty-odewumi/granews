import React from "react";
import { TouchableOpacity } from "react-native";
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

  const handleToggleBookmark = () => {
    dispatch(toggleBookmark(articleId));
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
