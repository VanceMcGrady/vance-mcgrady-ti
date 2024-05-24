import Profile from "@/app/ui_components/Profile";

export default function Page({
  params: { user_id },
}: {
  params: { user_id: string };
}) {
  return (
    <>
      <Profile user_id={user_id} />
    </>
  );
}
