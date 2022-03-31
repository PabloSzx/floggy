/**
 * Create our own chalk singleton so that when pretty mode of the logger is used
 * it alters only its own instance of chalk and not the singleton exported by
 * the package that might be being used by anything else in the process.
 */

export { default as chalk, Chalk } from 'chalk'
