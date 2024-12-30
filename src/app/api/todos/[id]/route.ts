import { connect } from "@/app/api/todos/route";
import { prisma } from "@/app/lib/PrismaClient";
import { NextResponse } from "next/server";

// 記事の詳細取得
export const GET = async (
    req: Request,
    { params }: { params: { id: number } }
) => {
    try {
        await connect();
        const id = params.id;
        const todo = await prisma.post.findUnique({
            where: { id: id },
        });
        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.json(error);
    } finally {
        await prisma.$disconnect;
    }
};
