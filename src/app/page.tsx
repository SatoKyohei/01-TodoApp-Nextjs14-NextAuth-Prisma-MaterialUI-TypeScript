import * as React from 'react';
import OAuthSignIn from "@/app/components/OAuthSignIn";
import { Box } from '@mui/material';




// セッション情報を見てログイン済みだったらTodoListを表示、ログインがまだだったら認証ページを表示（三項演算子）
export default function Home() {
  return (
    <Box sx={{flexGrow: 1}}>
      <OAuthSignIn />
    </Box>
  );
}
