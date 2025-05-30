// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],

	experimental: {
		fonts: [
			{
				name: "Barlow",
				cssVariable: "--font-barlow",
				provider: fontProviders.google(),
				weights: [400, 700],
			},
		],
	},

	adapter: cloudflare(),
});
