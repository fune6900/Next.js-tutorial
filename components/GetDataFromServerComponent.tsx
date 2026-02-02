import prisma from '@/app/lib/prisma'
import React from 'react'
import Box from './Box'

const GetDataFromServerComponent = async () => {
  console.log('[GetDataFromServerComponent] fetch start')
  try {
    const users = await prisma.user.findMany() // Userテーブルの全てのデータを取得する
    console.log('Userテーブルのデータを取得しました！', users.length) // データ取得成功：取得したデータの件数をログに出力する
    return (
      <Box>
        <h2>Get Data From Server Component</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Box>
    )
  } catch (err) {
    console.error('Userテーブルのデータの取得に失敗しました！', err) // データ取得失敗：エラーログを出力する
    return (
      <Box>
        <h2>データ取得エラー</h2>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{String(err)}</pre>
      </Box>
    )
  }
}

export default GetDataFromServerComponent
