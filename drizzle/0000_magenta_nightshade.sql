CREATE TYPE "public"."meta" AS ENUM('W-D-4', 'D-4-1', '4-1-15', '1-15-5');--> statement-breakpoint
CREATE TYPE "public"."results" AS ENUM('Win', 'Loss', 'Breakeven');--> statement-breakpoint
CREATE TYPE "public"."setups" AS ENUM('Icarus', 'Midas_Touch', 'Hermes', 'Nike', 'Trident', 'Perseus', 'Hercules', 'Other');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('Open', 'Closed', 'Waiting');--> statement-breakpoint
CREATE TYPE "public"."trade_direction" AS ENUM('Long', 'Short');--> statement-breakpoint
CREATE TABLE "watchlists" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "watchlists_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"coin_name" varchar(255) NOT NULL,
	"trade_direction" "trade_direction" NOT NULL,
	"chart_link" varchar(255) NOT NULL,
	"setup" "setups" DEFAULT 'Other' NOT NULL,
	"meta" "meta" NOT NULL,
	"entry_price" integer NOT NULL,
	"target_price" integer NOT NULL,
	"stop_loss" integer NOT NULL,
	"remarks" varchar(500),
	"status" "status" DEFAULT 'Waiting' NOT NULL,
	"result" "results"
);
