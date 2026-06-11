"use client";

import { signUp } from "@/app/actions/auth-actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const result = await signUp(email, password);

    if (result?.status === "error") {
      alert(result.message);
    } else {
      redirect("/signin");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">회원가입</h1>
      <p className="text-gray-700">인프런에서 다양한 학습의 기회를 얻으세요</p>
      <form
        className="flex flex-col gap-2 min-w-[300px]"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@inflearn.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-400 rounded-sm p-2"
        />

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-400 rounded-sm p-2"
        />

        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Password Confirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="border-2 border-gray-400 rounded-sm p-2"
        />

        <button className="bg-green-500 text-white font-bold cursor-pointer rounded-sm p-2">
          회원가입
        </button>
        <Link href="/signin" className="text-center">
          로그인
        </Link>
      </form>
    </div>
  );
}
