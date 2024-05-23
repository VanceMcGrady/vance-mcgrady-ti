import Feed from "../ui_components/Feed";
export default function Page() {
  const posts = getPostsForMe();

  return (
    <>
      <Feed />
    </>
  );
}
