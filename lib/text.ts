export interface Header {
  id: string;
  text: string;
  level: number;
}

export const extractHeaders = (markdown: string) => {
  const headers: Header[] = [];
  const lines = markdown.split("\n");

  for (const line of lines) {
    if (line.startsWith("# ")) {
      headers.push({
        id: filterCharsOnly(
          line.replace("# ", "").toLowerCase().replace(/\s+/g, "_")
        ),
        text: line.replace("*", "").replace("# ", "").replace("*", ""),
        level: 1
      });
    } else if (line.startsWith("## ")) {
      headers.push({
        id: filterCharsOnly(
          line.replace("## ", "").toLowerCase().replace(/\s+/g, "_")
        ),
        text: line.replace("*", "").replace("## ", "").replace("*", ""),
        level: 2
      });
    }
    // else if (line.startsWith("### ")) {
    //   headers.push({
    //     id: line.replace("### ", "").toLowerCase().replace(/\s+/g, "_"),
    //     text: line.replace("### ", ""),
    //     level: 3,
    //   });
    // }
    // Add more levels if needed
  }

  return headers;
};

// Updated helper functions
export function highlightMatch(text: string, query: string, maxLength = 100) {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
  const match = regex.exec(text);

  if (!match) return truncateText(text, maxLength);

  const matchIndex = match.index;
  const matchLength = match[0].length;

  // Calculate start and end positions to show context around the match
  const startPos = Math.max(0, matchIndex - (maxLength / 2 - matchLength));
  const endPos = Math.min(
    text.length,
    matchIndex + matchLength + maxLength / 2
  );

  let result = filterCharsOnly(text.slice(startPos, endPos));

  // Add ellipsis if we're not at the start/end
  if (startPos > 0) result = `...${result}`;
  if (endPos < text.length) result = `${result}...`;

  // Highlight the match
  result = result.replace(
    regex,
    '<span class="bg-yellow-300/60 dark:bg-yellow-500/60 text-primary">$1</span>'
  );

  return result;
}

export function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

// Helper function to escape regex special characters (unchanged)
export function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Remove digits and special characters,
export function filterCharsOnly(input: string) {
  // Extract part before parentheses
  const nameOnly = input.split("(")[0].trim();

  // Keep only alphabetic characters and spaces
  return nameOnly.replace(/[^a-zA-Z\s]/g, "");
}
