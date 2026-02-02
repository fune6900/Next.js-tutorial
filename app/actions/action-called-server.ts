"use server";

import { redirect } from "next/navigation";
import { ERROR_MESSAGES } from "../constants";
import prisma from "../lib/prisma";

export const actionCalledServer = async (formData: FormData) => {
  const nameEntry = formData.get("name"); // nameキーの値を取得
  const emailEntry = formData.get("email"); // emailキーの値を取得
  const name = typeof nameEntry === "string" ? nameEntry : ""; // 文字列型に変換  typeofでnameentryから型を取り出し、三項演算子でその型がstringならnameEntryをnameに代入、そうでなければ空文字をnameに代入
  const email = typeof emailEntry === "string" ? emailEntry : ""; // 文字列型に変換

  const errors: (keyof typeof ERROR_MESSAGES)[] = []; // エラー配列の初期化 keyofでERROR_MESSAGESのキーの型を取り出し,typeofでそれを型として使用する配列を定義 つまり{empty_name: string, empty_email: string, unexpected_error: string}というオブジェクトのキーのみを要素とする配列を定義していることになる
  if (name === "") { // nameが空文字の場合
    errors.push("empty_name"); // エラー配列に"empty_name"を追加
  }
  if (email === "") { // emailが空文字の場合
    errors.push("empty_email");
  }
  if (errors.length > 0) { // エラーがある場合
    const params = new URLSearchParams(); // URLSearchParamsオブジェクトを作成(もっと簡単にいうとクエリパラメータを作るための箱を作成する)
    errors.forEach((error) => params.append("errors", error));
    redirect(`/practice/call-server-action?${params.toString()}`); // エラー情報をクエリパラメータとして付与してリダイレクト
  }

  await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  redirect("/static-rendering"); // 成功した場合は/static-renderingにリダイレクト
};