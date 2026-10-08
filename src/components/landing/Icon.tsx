import { icons as ri } from "@iconify-json/ri";
import { icons as solar } from "@iconify-json/solar";
import { getIconData, iconToSVG } from "@iconify/utils";

const SETS = { ri, solar } as const;

type Props = { icon: `${keyof typeof SETS}:${string}`; size?: number; className?: string };

// Renders Iconify icons as inline SVG on the server, so nothing is fetched at runtime.
export default function Icon({ icon, size = 20, className }: Props) {
  const [prefix, name] = icon.split(":") as [keyof typeof SETS, string];
  const data = getIconData(SETS[prefix], name);
  if (!data) throw new Error(`Unknown icon: ${icon}`);
  const { attributes, body } = iconToSVG(data, { height: size });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={attributes.viewBox}
      width={attributes.width}
      height={attributes.height}
      className={`shrink-0 ${className ?? ""}`}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
