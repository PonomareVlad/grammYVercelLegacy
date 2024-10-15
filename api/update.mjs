import {bot, secretToken} from "../src/bot.mjs";
import {webhookCallback} from "grammy";

// Default grammY handler for incoming updates via webhooks
export const POST = webhookCallback(bot, "std/http", {
    timeoutMilliseconds: 9_000,
    secretToken
});
