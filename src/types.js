/**
 * @typedef {Object} Message
 * @property {number|string} [id] - A unique identifier for the message, usually typically Date.now() for local messages.
 * @property {string} text - The actual content of the message. Supports markdown formatting.
 * @property {'me'|'bot'} sender - Indicates who sent the message. Determines styling and placement.
 * @property {string} timestamp - A formatted string representing when the message was sent (e.g., '10:00 AM').
 */

/**
 * @typedef {Object} Chat
 * @property {number|string} id - A unique identifier for the chat session.
 * @property {string} title - A short, user-readable title for the chat.
 * @property {Message[]} messages - An array of messages belonging to this chat session.
 */

// This file is used for JSDoc typings and does not export any runtime code. 
export {};
