import { SparklesIcon } from "@heroicons/react/outline";
import TweetInput from "./TweetInput";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Suparna Chakraborty",
      username: "SuparnaChakraborty",
      userImage: "https://i.pinimg.com/736x/4e/4b/48/4e4b48446ba1375e6f116a64742ea49f.jpg",
      postImage:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      text: "Technological advancements have led to significant changes in society. The earliest known technology is the stone tool, used during prehistoric times, followed by the control of fire, which contributed to the growth of the human brain and the development of language during the Ice Age. The invention of the wheel in the Bronze Age allowed greater travel and the creation of more complex machines. More recent technological inventions, including the printing press, telephone, and the Internet, have lowered barriers to communication and ushered in the knowledge economy. ",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Suparna Chakraborty",
      username: "SuparnaChakraborty",
      userImage: "https://i.pinimg.com/736x/4e/4b/48/4e4b48446ba1375e6f116a64742ea49f.jpg",
      postImage:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      text: "Technology is the application of conceptual knowledge for achieving practical goals, especially in a reproducible way.[1] The word technology can also mean the products resulting from such efforts,[2][3] including both tangible tools such as utensils or machines, and intangible ones such as software. Technology plays a critical role in science, engineering, and everyday life. ",
      timestamp: "8 hours ago",
    },
    {
      id: "3",
      name: "Suparna Chakraborty",
      username: "SuparnaChakraborty",
      userImage: "https://i.pinimg.com/736x/4e/4b/48/4e4b48446ba1375e6f116a64742ea49f.jpg",
      postImage:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      text: "Beard ethical health goth, migas kinfolk tousled austin freegan narwhal selvage 8-bit vinyl drinking vinegar. Lo-fi flexitarian bicycle rights prism jianbing pug art party literally bitters.",
      timestamp: "23 hours ago",
    },
  ];
  return (
    <div className="xl:ml-[260px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50  bg-white justify-between items-center border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <TweetInput />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default Feed;
