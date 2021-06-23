import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
// ----------------Link Stuff-------------------
const Link = Quill.import("formats/link");
class linkType extends Link {
  static create(value) {
    // let node = super.create(value);
    // value = this.sanitize(value);
    // if (Number(value) !== NaN) {
    //   node.setAttribute("href", "tel:" + value);
    //   node.className = "link--tel";
    // }
    // if (validations.isEmail(value)) {
    //   node.setAttribute("href", "mailto:" + value);
    //   node.className = "link--mail";
    // }
    if (value.startsWith("https://") || value.startsWith("http://")) {
      node.className = "link--external";
    } else {
      node.removeAttribute("rel");
      node.removeAttribute("target");
    }
    return node;
  }
}
Quill.register(linkType);
// -------------End link stuff-----------

const Editor = ({ onChange, name, value }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      ["link", "video"],
      ["clean"],
    ],
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={modules}
      onChange={(content, event, editor) => {
        onChange({ target: { name, value: content } });
      }}
    />
  );
};

export default Editor;
