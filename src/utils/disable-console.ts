// Disable console.log in contentscript to prevent SES/lockdown logging to external page
if (process.env.NODE_ENV === 'production' && typeof console !== undefined) {
  console.log = noop;
  console.info = noop;
}

function noop() {
  return undefined;
}

export {};
