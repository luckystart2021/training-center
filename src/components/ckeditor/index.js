import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <div>dong ne</div>
            // <CKEditor
            //     data="<p>Hello from CKEditor 5!!</p>"
            //     onInit={editor => console.log("Editor is ready to use!", editor)}
            //     onChange={(event, editor) => {
            //         console.log("Change", { event, editor });
            //     }}
            //     onBlur={(event, editor) => {
            //         console.log("Blur.", { event, editor });
            //     }}
            //     onFocus={(event, editor) => {
            //         console.log("Focus.", { event, editor });
            //     }}
            //     config={{
            //         plugins: [
            //             Essentials,
            //             Paragraph,
            //             Bold,
            //             Italic,
            //             Heading,
            //             Indent,
            //             IndentBlock,
            //             Underline,
            //             Strikethrough,
            //             BlockQuote,
            //             Font,
            //             Alignment,
            //             List,
            //             Link,
            //             MediaEmbed,
            //             PasteFromOffice,
            //             Image,
            //             ImageStyle,
            //             ImageToolbar,
            //             ImageUpload,
            //             ImageResize,
            //             SimpleUploadAdapter,
            //             Table,
            //             TableToolbar,
            //             TextTransformation
            //         ],
            //         toolbar: [
            //             "heading",
            //             "|",
            //             "bold",
            //             "italic",
            //             "underline",
            //             "strikethrough",
            //             "|",
            //             "fontSize",
            //             "fontColor",
            //             "fontBackgroundColor",
            //             "|",
            //             "alignment",
            //             "outdent",
            //             "indent",
            //             "bulletedList",
            //             "numberedList",
            //             "blockQuote",
            //             "|",
            //             "link",
            //             "insertTable",
            //             "imageUpload",
            //             "mediaEmbed",
            //             "|",
            //             "undo",
            //             "redo"
            //         ],
            //         heading: {
            //             options: [
            //                 {
            //                     model: "paragraph",
            //                     view: "p",
            //                     title: "본문",
            //                     class: "ck-heading_paragraph"
            //                 },
            //                 {
            //                     model: "heading1",
            //                     view: "h1",
            //                     title: "헤더1",
            //                     class: "ck-heading_heading1"
            //                 },
            //                 {
            //                     model: "heading2",
            //                     view: "h2",
            //                     title: "헤더2",
            //                     class: "ck-heading_heading2"
            //                 },
            //                 {
            //                     model: "heading3",
            //                     view: "h3",
            //                     title: "헤더3",
            //                     class: "ck-heading_heading3"
            //                 }
            //             ]
            //         },
            //         fontSize: {
            //             options: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 27, 29, 31, 33, 35]
            //         },
            //         alignment: {
            //             options: ["justify", "left", "center", "right"]
            //         },
            //         table: {
            //             contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
            //         },
            //         image: {
            //             resizeUnit: "px",
            //             toolbar: [
            //                 "imageStyle:alignLeft",
            //                 "imageStyle:full",
            //                 "imageStyle:alignRight",
            //                 "|",
            //                 "imageTextAlternative"
            //             ],
            //             styles: ["full", "alignLeft", "alignRight"]
            //         },
            //         typing: {
            //             transformations: {
            //                 remove: [
            //                     "enDash",
            //                     "emDash",
            //                     "oneHalf",
            //                     "oneThird",
            //                     "twoThirds",
            //                     "oneForth",
            //                     "threeQuarters"
            //                 ]
            //             }
            //         },
            //         simpleUpload: {
            //             uploadUrl: "https://api.imgur.com/3/upload",
            //             headers: {
            //                 "X-CSRF-TOKEN": "CSFR-Token"
            //                 // Authorization: 'Bearer <JSON Web Token>'
            //             }
            //         },
            //         language: "ko"
            //     }}
            //     editor={ClassicEditor}
            // />
        );
    }
}

export default App;
