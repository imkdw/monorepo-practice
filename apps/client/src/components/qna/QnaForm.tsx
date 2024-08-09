"use client";

import { FormEvent, useState } from "react";

export default function QnaForm() {
  const [data, setData] = useState({
    name: "",
    password: "",
    title: "",
    content: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form>
      <input type="text" placeholder="닉네임" name="name" />
      <input type="password" placeholder="비밀번호" name="password" />
      <input type="text" placeholder="제목" name="title" />
      <textarea placeholder="내용" name="content" />
      <button type="submit">등록</button>
    </form>
  );
}
