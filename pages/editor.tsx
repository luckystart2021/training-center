import dynamic from "next/dynamic";

// Common editors usually work on client-side, so we use Next.js's dynamic import with mode ssr=false to load them on client-side
const Editor = dynamic(() => import("../src/components/ckeditor"), {
  ssr: false,
});

export default function IndexPage() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.dtc-project.tk/api/user/upload/ck/";

  xhr.open("POST", url);
  xhr.send();

  return (
    <>
      <h2>nextjs + ckeditor5</h2>
      <Editor />

      <form
        action="https://api.dtc-project.tk/api/user/upload/ck"
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" id="upload" name="upload" />
        <input type="submit" />
      </form>
    </>
  );
}
