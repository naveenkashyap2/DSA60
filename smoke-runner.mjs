import { createServer } from 'vite';
const vite = await createServer({
  root: '/home/user/dsa60',
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error'
});
try {
  await vite.ssrLoadModule('/smoke.jsx');
} catch (e) {
  console.error('RUNNER ERROR:', e.message);
  process.exit(2);
} finally {
  await vite.close();
}
