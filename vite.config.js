import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import jsonServer from 'vite-plugin-simple-json-server';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [react(), jsonServer()],
})