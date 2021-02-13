import UserTemplate from "../../src/containers/UserTemplate";
import { useRouter } from "next/router";
import axios from "axios";

DetailsNews.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(
      "https://600fdd7a6c21e1001704f836.mockapi.io/news/1"
    );
    const detail = res.data;
    return { detail };
  } catch (error) {
    return { error };
  }
};

export default function DetailsNews(detail) {
  const router = useRouter();
  console.log(router.query);
  return (
    <UserTemplate>
      <div>Details news</div>
    </UserTemplate>
  );
}
