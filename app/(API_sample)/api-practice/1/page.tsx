"use client";
import { useState } from "react";
import Link from "next/link";

interface Todo {
    id: number;
    todo: string;
};

function Practice1() {
    const [todo, setTodo] = useState<Todo | null>(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/todos/random');
            const result = await response.json();
            setTodo(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <h1>APIの練習1</h1>
                <h2>内容</h2>
                <p>情報取得ボタンを押したら、APIからデータを取得し、そのまま表示してください。</p>
                <p>情報取得ボタンは<code>id=&quot;get_info&quot;</code> です。</p>
                <p>apiの取得にはfetchを使用してください。</p>
                <p>情報の表示はclass=&quot;display_area&quot;の<code>pre</code>タグ内に表示してください。</p>
                <h3>情報</h3>
                <ul>
                    <li>エンドポイント: <code>https://dummyjson.com/todos/random</code></li>
                    <li><Link href="https://dummyjson.com/docs/todos#todos-random" target="_blank">API ドキュメント</Link></li>
                    <li>メソッド: <code>GET</code></li>
                </ul>

                <button id="get_info" onClick={fetchData}>情報取得</button>
                <div className="display_area mt-5 p-2.5 border border-color-black">
                    <h3>表示エリア</h3>
                    <pre>
                        {todo ? JSON.stringify(todo, null, 2) : 'ここにAPIから取得したデータが表示されます。'}
                    </pre>
                </div>

                <div className="mt-4">
                    <Link className="mr-2.5" href="/api-practice/2">次の練習へ→</Link>
                </div>
            </div>
        </>
    );
}

export default Practice1;
