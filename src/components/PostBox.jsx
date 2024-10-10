import React, { useState, useRef } from "react";
import ProfilePic from "./ProfilePic";

function PostBox() {
  // There might need some changes to this page because the input box does not resize based on the sreen size. It uses manual resize. I haven't find a better solution to this. We can look up something later, I just can't think of anything at the moment.
  const [postContent, setPostContent] = useState("");
  const textareaRef = useRef(null);
  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleChange = (e) => {
    setPostContent(e.target.value);
    resizeTextarea();
  };

  return (
    <>
      {/* This is the ProfilePic component. */}
      <div className="flex gap-10 m-4">
        <div className="col-span-1">
          <ProfilePic />
        </div>

        <div className="">
          <textarea
            ref={textareaRef}
            value={postContent}
            rows={4}
            cols={110}
            onChange={handleChange}
            placeholder="Share you thoughts out..."
            className="textarea--postbox p-3 border block w-full border-gray-400 bg-slate-100 hover:bg-slate-200 rounded-lg resize outline-none"
            required
          ></textarea>
        </div>

        <div className="self-end">
          <button
            type="submit"
            className="bg-orange-400 text-white p-1 w-14 rounded-full hover:bg-orange-800"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default PostBox;
