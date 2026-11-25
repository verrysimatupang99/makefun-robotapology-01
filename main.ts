const APOLOGY =
  "I sincerely apologize for the inconvenience. I have logged your disappointment for future indifference.";

const USAGE = `Usage: node main.ts [--shout] [--help]

Prints a sincere robot apology.

Options:
  --shout  Print the apology in uppercase
  --help   Show this help text
`;

function renderLine(shout: boolean): string {
  return shout ? APOLOGY.toUpperCase() : APOLOGY;
}

function hasFlag(flag: string, argv: string[] = process.argv.slice(2)): boolean {
  const terminator = argv.indexOf("--");
  const flags = terminator === -1 ? argv : argv.slice(0, terminator);
  return flags.includes(flag);
}

function showHelp(): void {
  console.error(USAGE);
}

function main(): void {
  if (hasFlag("--help")) {
    showHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
