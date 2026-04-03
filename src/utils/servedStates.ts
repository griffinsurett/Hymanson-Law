import { getCollection } from "astro:content";
import { humanizeSlug } from "@/utils/string";

export async function getServedStates() {
  const servedStates = await getCollection("where-we-serve");

  return servedStates
    .filter((entry) => entry.id !== "_meta")
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
}

export async function getServedStatesLabel() {
  const servedStates = await getServedStates();
  const labels = servedStates.map(
    (state) => state.data.title || humanizeSlug(state.slug || state.id)
  );

  if (labels.length <= 1) return labels[0] ?? "";
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;

  return `${labels.slice(0, -1).join(", ")}, and ${labels.at(-1)}`;
}
