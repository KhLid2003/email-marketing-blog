import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function RichTextEditor({ value, onChange }) {
  return (
    <Editor
      apiKey="r7ldo4rvlx6f9yywylb8xwwghzqa7k3wjtxnr887kbnuzmyf"
      value={value}
      onEditorChange={onChange}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
}
