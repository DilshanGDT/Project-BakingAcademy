import { pgTable, text, serial, integer, boolean, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  category: text("category").notNull(), // birthday, wedding, bento, pastries
  imageUrl: text("image_url").notNull(),
  featured: boolean("featured").default(false),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  duration: text("duration").notNull(),
  level: text("level").notNull(), // beginner, intermediate, advanced
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  comment: text("comment").notNull(),
  rating: integer("rating").notNull(),
  featured: boolean("featured").default(false),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type Product = typeof products.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type Review = typeof reviews.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertReview = z.infer<typeof insertReviewSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
