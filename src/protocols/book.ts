import { Book as BookDB } from "@prisma/client";

export type Book = BookDB;

export type CreateBook = Omit<Book, "id" | "read" | "review" | "grade">;