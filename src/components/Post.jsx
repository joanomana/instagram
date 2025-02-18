import { useState } from "react";
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import avatar7 from "../storage/img/avatar7.png";
import postImage from "../storage/img/post.png";
import tagsImage from "../storage/img/tags.svg";

const Post = () => {
  const [likes, setLikes] = useState(100);

  return (
    <div className="border-b pb-4">
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-2 px-1">
          <div className="rounded-full">
            <img src={avatar7} alt="foto" class="w-[40px] h-[40px] rounded-full" />
          </div>
          <div class="flex flex-col pt-0">
          <span className="font-bold text-[15px] ">Ruffles</span>
          <p class="text-[10px]">Sponsored</p>
          </div>
        </div>
        <div class="pt-2.5 px-5"><BsThreeDots size={20} /></div>
      </div>
      <div className="relative">
        <img src={postImage} alt="post" />
        <img class="absolute bottom-3 left-3" src={tagsImage} alt="tag" />
      </div>
      <div className="flex justify-between py-3 px-4">
        <div className="flex gap-4">
          <FiHeart size={24} onClick={() => setLikes(likes + 1)} className="cursor-pointer" />
          <FiMessageCircle size={24} />
          <FiSend  size={24} />
        </div>
        <FiBookmark className="" size={24} />
      </div>
      <p className="px-4"><strong>{likes} Likes</strong></p>
      <p className="px-4"><strong>Username</strong> Lorem ipsum dolor sit amet...</p>
      <form action="?">
        <textarea name="Comment" id=""></textarea>
      </form>
      <p className="px-4" >View all 16 comments</p>
    </div>
  );
};

export default Post;
