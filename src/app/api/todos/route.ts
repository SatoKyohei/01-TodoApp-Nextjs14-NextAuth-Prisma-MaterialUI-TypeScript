import { prisma } from "@/app/lib/PrismaClient";
import { NextResponse } from "next/server";

export const connect = async () => {
    try {
        await prisma.$connect();
    } catch (error) {
        return Error("DB接続に失敗しました");
    }
};

// すべてのTodoを取得
export const GET = async (req: Request, res: NextResponse) => {
    try {
        await connect();
        const posts = await prisma.post.findMany();
        return NextResponse.json(
            { message: "Success", posts },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

// Todoを新規作成
export const POST = async (req: Request, res: NextResponse) => {
    try {
        const { id, title, description, status, due, comments } = await req.json();
        await connect();
        const post = await prisma.post.create({
            data: { id, title, description, status, due, comments },
        });
        return NextResponse.json({ message: "Success", post }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};
