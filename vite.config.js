import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/rent-car",
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/styles/_shared.scss";',
			},
		},
	},
});
