import { NextResponse } from "next/server";
import { execSync } from "child_process";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

export async function GET() {
  try {
    const projectRoot = process.cwd();

    // Files and directories to include in the ZIP
    const includeList = [
      "src/",
      "public/",
      "package.json",
      "tsconfig.json",
      "next.config.ts",
      "postcss.config.mjs",
      "tailwind.config.ts",
      ".env",
      "prisma/",
      "next-env.d.ts",
    ];

    // Filter to only existing paths
    const existingPaths = includeList.filter((p) => {
      try {
        return existsSync(join(projectRoot, p));
      } catch {
        return false;
      }
    });

    // Create a temporary ZIP file
    const zipPath = join(projectRoot, ".tmp-luxora-project.zip");

    // Remove any existing temp zip
    try {
      execSync(`rm -f "${zipPath}"`);
    } catch {
      // ignore
    }

    // Create ZIP using the system's zip command
    // -r = recursive, -q = quiet, -x = exclude patterns
    const pathsArg = existingPaths.map((p) => `"${p}"`).join(" ");
    const excludePatterns =
      "-x \"*.log\" \"node_modules/*\" \".next/*\" \".tmp-*\" \".git/*\" \".zscripts/*\" \"dev.log\" \"server.log\"";

    execSync(
      `cd "${projectRoot}" && zip -r -q "${zipPath}" ${pathsArg} ${excludePatterns}`,
      { timeout: 30000 }
    );

    // Read the ZIP file
    const zipBuffer = readFileSync(zipPath);

    // Clean up temp file
    try {
      execSync(`rm -f "${zipPath}"`);
    } catch {
      // ignore
    }

    // Return as downloadable ZIP
    return new NextResponse(zipBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="luxora-project.zip"',
        "Content-Length": zipBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("ZIP generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate project ZIP" },
      { status: 500 }
    );
  }
}
