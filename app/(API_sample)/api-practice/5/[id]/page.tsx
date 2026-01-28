"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Todo {
    id: number;
    todo: string;
};

function Practice4() {
    const { id } = useParams<{ id: string }>();
    const [todo, setTodo] = useState<Todo | null>(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/todos/${id}`); // テンプレートリテラルを使用してtodoIdをURLに組み込む
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error("該当のtodoIDが見つかりませんでした");
                } else if (response.status === 500) {
                    throw new Error("サーバーエラーが発生しました。時間をおいて再度お試しください。");
                } else {
                    throw new Error("不明なエラーが発生しました");
                }
            }
            const result = await response.json();
            setTodo(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <>
            <div style={{ padding: '30px' }}>
                <h1>APIの練習5</h1>
                <h2>内容</h2>
                <p>「/practice/api/5/{"{"}id{"}"}」にアクセスしたら、受注データを表示できるようにしてください</p>
                <span>URLの例：<Link id="next-practice" style={{ marginRight: "10px" }} href={`/practice/api/5/${id}`}>/practice/api/5/{id}</Link></span>
                <p>受注番号はURLパラメータから取得してください。</p>
                <p>情報の表示は以前の問題と同様に行ってください。</p>

                <h3>情報</h3>
                <ul>
                    <li>エンドポイント: https://dummyjson.com/todos<code>{"{{"}id{"}}"}</code></li>
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
                    <h3>表示エリア</h3>
                    {todo ? (
                        <ul>
                            <li>id:{todo.id}</li>
                            <li>todo:{todo.todo}</li>
                        </ul>
                    ) : ('ここにAPIから取得したデータが表示されます。')}
                    <div className="error_display">
                        {/* ここにエラーメッセージを表示 */}
                    </div>
                </div>

                <div className="practice">
                    <Link style={{marginRight:"10px"}} href="/api-practice/4">←前の練習へ</Link>
                    <Link style={{marginRight:"10px"}} href="/api-practice/5">次の練習へ→</Link>
                </div>
            </div>
        </>
    );
}

export default Practice4;
