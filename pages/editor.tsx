import dynamic from "next/dynamic";

// Common editors usually work on client-side, so we use Next.js's dynamic import with mode ssr=false to load them on client-side
const Editor = dynamic(() => import("../src/components/ckeditor"), {
  ssr: false,
});

export default function IndexPage() {
  const registerUser = (event) => {
    event.preventDefault();
    console.log(Editor)
  };
  return (
    <>
      <h2>nextjs + ckeditor5</h2>
      <form onSubmit={registerUser}>
        <Editor />
        <button type="submit">Register</button>
      </form>

      {/* <form action={() -} method="post" encType="multipart/form-data">
        <input type="file" id="upload" name="upload" />
        <input type="submit" />
      </form> */}
    </>
  );
}
