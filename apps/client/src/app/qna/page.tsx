import { trpc } from "@client/src/app/trpc";
import QnaList from "@client/src/components/qna/QnaList";

export default async function QnaPage() {
  const questions = await trpc.getQuestions.query();

  return <QnaList />;
}
