import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
};

export default getSortedPosts;
