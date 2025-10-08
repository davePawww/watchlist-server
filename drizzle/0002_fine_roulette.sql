ALTER TABLE "watchlists" ALTER COLUMN "entry_price" SET DATA TYPE numeric(12, 4);--> statement-breakpoint
ALTER TABLE "watchlists" ALTER COLUMN "target_price" SET DATA TYPE numeric(12, 4);--> statement-breakpoint
ALTER TABLE "watchlists" ALTER COLUMN "stop_loss" SET DATA TYPE numeric(12, 4);