"use client";
import { useState } from "react";
import Link from "next/link";

interface Todo {
    id: number;
    todo: string;
};

function Practice3() {
    const [todoId, setTodoId] = useState<string>("");
    const [todo, setTodo] = useState<Todo | null>(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/todos/${todoId}`); // テンプレートリテラルを使用してtodoIdをURLに組み込む
            const result = await response.json();
            setTodo(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div style={{ padding: '30px' }}>
                <h1>APIの練習3</h1>
                <h2>内容</h2>
                <p>前回の練習をもとに取得したデータをJSONからパースして、指定された項目を表示してください。</p>
                <p>エンドポイントの最後のIDをテキストボックスで入力できるようにしてください。</p>
                <p>テキストボックスのIDは<code>id</code>です。</p>
                <p>情報取得ボタンは<code>id=&quot;get_info&quot;</code> です。</p>
                <p>apiの取得にはfetchを使用してください。</p>
                <p>情報の表示はclass=&quot;display_area&quot;の<code>pre</code>タグ内に表示してください。</p>
                <h3>情報</h3>
                <ul>
                    <li>エンドポイント: https://dummyjson.com/todos<code>{"{{"}todoId{"}}"}</code></li>
                    <li><Link href="https://dummyjson.com/todos/1" target="_blank">API ドキュメント</Link></li>
                    <li>メソッド: <code>GET</code></li>
                    <li>表示してほしい項目
                        <ul>
                            <li>①todoId</li>
                            <li>②tod</li>
                        </ul>
                    </li>
                </ul>

                <div className="display_area mt-5 p-2.5 border border-color-black">
                    <input id="todoId" type="text" placeholder="TodoIDを取得" style={{ marginRight: '10px' }} onChange={(e) => setTodoId(e.target.value)} />
                    <button id="get_info" onClick={fetchData}>情報取得</button>
                    <h3>表示エリア</h3>
                    {todo ? (
                        <ul>
                            <li>id:{todo.id}</li>
                            <li>todo:{todo.todo}</li>
                        </ul>
                    ) : ('ここにAPIから取得したデータが表示されます。')}
                </div>

                <div className="practice">
                    <Link style={{marginRight:"10px"}} href="/api-practice/2">←前の練習へ</Link>
                    <Link style={{marginRight:"10px"}} href="/api-practice/4">次の練習へ→</Link>
                </div>
            </div>
        </>
    );
}

export default Practice3;
