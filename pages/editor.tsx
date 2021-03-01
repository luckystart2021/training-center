import dynamic from "next/dynamic";

// Common editors usually work on client-side, so we use Next.js's dynamic import with mode ssr=false to load them on client-side
const Editor = dynamic(() => import("../src/components/ckeditor"), {
  ssr: false,
});

export default function IndexPage() {
  let data: "";
  const handleData = (dataTemplate: string) => {
    console.log("dong3", dataTemplate);
  };
  return (
    <>
      <h2>nextjs + ckeditor5</h2>
      <Editor onchangeData={handleData} />
    </>
  );
}
