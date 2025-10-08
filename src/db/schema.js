import {
  integer,
  pgEnum,
  pgTable,
  varchar,
  timestamp,
  numeric,
} from "drizzle-orm/pg-core";

export const tradeDirectionEnum = pgEnum("trade_direction", ["Long", "Short"]);
export const setupsEnum = pgEnum("setups", [
  "Icarus",
  "Midas_Touch",
  "Hermes",
  "Nike",
  "Trident",
  "Perseus",
  "Hercules",
  "Other",
]);
export const metaEnum = pgEnum("meta", ["W-D-4", "D-4-1", "4-1-15", "1-15-5"]);
export const statusEnum = pgEnum("status", ["Open", "Closed", "Waiting"]);
export const resultsEnum = pgEnum("results", ["Win", "Loss", "Breakeven"]);

export const watchListsTable = pgTable("watchlists", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  coinName: varchar("coin_name", { length: 255 }).notNull(),
  tradeDirection: tradeDirectionEnum("trade_direction").notNull(),
  chartLink: varchar("chart_link", { length: 255 }).notNull(),
  setup: setupsEnum("setup").default("Other").notNull(),
  meta: metaEnum("meta").notNull(),
  entryPrice: numeric("entry_price", { precision: 12, scale: 4 }).notNull(),
  targetPrice: numeric("target_price", { precision: 12, scale: 4 }).notNull(),
  stopLoss: numeric("stop_loss", { precision: 12, scale: 4 }).notNull(),
  remarks: varchar("remarks", { length: 500 }),
  status: statusEnum("status").default("Waiting").notNull(),
  result: resultsEnum("result"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
