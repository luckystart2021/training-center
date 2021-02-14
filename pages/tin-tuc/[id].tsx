import UserTemplate from "../../src/containers/UserTemplate";
import { useRouter } from "next/router";

//https://600fdd7a6c21e1001704f836.mockapi.io/news/1

export default function DetailsNews({ detail }) {
  const router = useRouter();
  console.log(router);
  return (
    <UserTemplate title="Chi tiết bài viết">
      <div>Details news</div>
    </UserTemplate>
  );
}
