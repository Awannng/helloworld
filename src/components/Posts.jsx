import React from "react";

function Posts() {
  return (
    <>
      {/* There might be more styling to the second div. 
      But so far, I just used lorem text as a replacement. 
      And we also might need the database for the profile pic and name.
      We might also need another component of the profile pic and the name, since it's other people's info. */}
      <div className="border border-gray-400 m-4 rounded-lg p-2 ">
        <div className="flex gap-5">
          <div className="w-12 h-12 bg-blue-400 rounded-full hover:cursor-pointer">
            {/* profile picture */}
          </div>
          <div className="self-center">
            <h4>Name</h4>
          </div>
        </div>

        <div className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          temporibus ducimus error vero voluptatem maxime illo similique culpa
          quibusdam. Illum ratione delectus voluptas facilis obcaecati sunt
          libero provident. Earum, molestias.
        </div>
      </div>
    </>
  );
}

export default Posts;
