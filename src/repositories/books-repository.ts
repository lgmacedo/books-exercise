import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database";

export async function getBooks() {
  const result = await prisma.book.findMany();
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.book.findFirst({
    where: {
      id,
    },
  });
  return result;
}

export async function createBook(book: CreateBook) {
  const result = await prisma.book.create({
    data: { ...book },
  });
  return result;
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  const result = await prisma.book.update({
    where: {
      id: bookId,
    },
    data: {
      grade,
      review,
      read: true,
    },
  });
  return result;
}
