import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	
	distDir: "out", 
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
	  mdxRs: true,
	},
	    
	     
  };

export default withContentlayer(nextConfig);
