import {
  generateOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

export const runtime = "edge";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return generateOgImage();
}
