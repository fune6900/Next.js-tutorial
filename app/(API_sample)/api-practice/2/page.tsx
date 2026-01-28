"use client";
import { useState } from "react";
import Link from "next/link";

interface Todo {
    id: number;
    todo: string;
};

function Practice2() {
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
                <h1>APIの練習2</h1>
                <h2>内容</h2>
                <p>前回の練習の内容をもとに、データをJSONからパースして、指定された項目を表示してください。</p>
                <p>情報取得ボタンは<code>id=&quot;get_info&quot;</code> です。</p>
                <p>apiの取得にはfetchを使用してください。</p>
                <p>情報の表示はclass=&quot;display_area&quot;の<code>pre</code>タグ内に表示してください。</p>
                <h3>情報</h3>
                <ul>
                    <li>エンドポイント: <code>http://172.17.11.113:20012/jyuchu/vanfu/0010000033</code></li>
                    <li><Link href="https://dummyjson.com/docs/todos#todos-random" target="_blank">API ドキュメント</Link></li>
                    <li>メソッド: <code>GET</code></li>
                    <li>表示してほしい項目
                        <ul>
                            <li>①id</li>
                            <li>②todo</li>
                        </ul>
                    </li>
                </ul>
                <button id="get_info" onClick={fetchData}>情報取得</button>
                <div className="display_area mt-5 p-2.5 border border-color-black">
                    <h3>表示エリア</h3>
                    {todo ? (
                        <ul>
                            <li>id:{todo.id}</li>
                            <li>todo:{todo.todo}</li>
                        </ul>
                    ) : ('ここにAPIから取得したデータが表示されます。')}
                </div>

                <div className="practice">
                    <Link style={{marginRight:"10px"}} href="/api-practice/1">←前の練習へ</Link>
                    <Link style={{marginRight:"10px"}} href="/api-practice/3">次の練習へ→</Link>
                </div>
            </div>
        </>
    );
}

export default Practice2;
