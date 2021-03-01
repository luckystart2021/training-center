import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadAdapter from "./UploadAdapter";

// Server URL
const URL = "https://api.dtc-project.tk/api/user/upload/ck";

function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    // Create new object and pass server url
    return new UploadAdapter(loader, URL);
  };
}

// https://ck
class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: "",
    };
  }

  render() {
    // CKEditor Config
    const config = {
      language: "en", // fa - for persian language ( rtl )
      extraPlugins: [CustomUploadAdapterPlugin],
    };
    return (
      <>
        <CKEditor
          editor={ClassicEditor}
          // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html#component-properties
          // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html
          config={config}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
            editor.plugins.get("TextTransformation").isEnabled = true;
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            this.props["onchangeData"](data);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </>
    );
  }
}

export default App;
