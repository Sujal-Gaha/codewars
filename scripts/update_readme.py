import os
import re
import shutil
import subprocess

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
README_PATH = os.path.join(PROJECT_ROOT, "README.md")


def count_solutions():
    stats = {}
    languages = ["python", "typescript", "go", "sql"]
    kyus = ["8kyu", "7kyu", "6kyu", "5kyu", "4kyu", "3kyu", "2kyu", "1kyu"]

    for lang in languages:
        lang_path = os.path.join(PROJECT_ROOT, lang)
        if not os.path.exists(lang_path):
            continue

        stats[lang] = {kyu: 0 for kyu in kyus}

        for kyu in kyus:
            # Match structure: lang/kyu/solution/
            solution_path = os.path.join(lang_path, kyu, "solution")
            if os.path.exists(solution_path):
                files = [
                    f
                    for f in os.listdir(solution_path)
                    if os.path.isfile(os.path.join(solution_path, f))
                    and not f.startswith(".")
                ]
                stats[lang][kyu] = len(files)

    return stats


def generate_dashboard(stats):
    languages = sorted(stats.keys())
    kyus = ["8kyu", "7kyu", "6kyu", "5kyu", "4kyu", "3kyu", "2kyu", "1kyu"]

    active_kyus = [
        kyu for kyu in kyus if any(stats[lang].get(kyu, 0) > 0 for lang in languages)
    ]
    if not active_kyus:
        active_kyus = ["8kyu", "7kyu"]  # Default fallback

    table_header = "| Language | " + " | ".join(active_kyus) + " | Total |\n"
    table_sep = "| :--- | " + " | ".join([":---:"] * len(active_kyus)) + " | :---: |\n"

    table_rows = ""
    grand_total = 0
    for lang in languages:
        row_total = sum(stats[lang].values())
        grand_total += row_total
        row = f"| **{lang.capitalize()}** | "
        row += " | ".join(str(stats[lang].get(kyu, 0)) for kyu in active_kyus)
        row += f" | **{row_total}** |\n"
        table_rows += row

    dashboard_text = table_header + table_sep + table_rows
    dashboard_text += f"\n**Grand Total Solved:** {grand_total}\n"
    return dashboard_text


def generate_full_readme(dashboard_content):
    header = "# Codewars Solutions\n\n"
    header += "My personal collection of Codewars solutions, tracked and categorized by language and difficulty.\n\n"
    header += "This repository is my sanctuary for intentional engineering—no vibecoding, no AI. Every line is written by hand.\n\n"
    header += "## Progress Dashboard\n\n"

    footer = "\n## Structure\n\n"
    footer += "Each language has its own directory with difficulty subdirectories (`8kyu`, `7kyu`, etc.).\n"
    footer += "Solutions are located in `solution/` and tests in `test/`.\n\n"
    footer += "## Running Tests\n\n"
    footer += "Use the root `test.sh` script to run tests or update this dashboard:\n\n"
    footer += "```bash\n./test.sh python      # Run Python tests\n./test.sh typescript  # Run TypeScript tests\n./test.sh update      # Update this README\n```\n"

    return header + dashboard_content + footer


def find_prettier():
    candidates = [
        # Local typescript package
        os.path.join(PROJECT_ROOT, "typescript", "node_modules", ".bin", "prettier"),
        os.path.join(PROJECT_ROOT, "node_modules", ".bin", "prettier"),
        # Neovim Mason
        os.path.expanduser("~/.local/share/nvim/mason/bin/prettier"),
        # PATH
        shutil.which("prettier"),
    ]
    for candidate in candidates:
        if candidate and os.path.isfile(candidate) and os.access(candidate, os.X_OK):
            return candidate
    return None


def find_prettier_config():
    candidates = [
        os.path.join(PROJECT_ROOT, ".prettierrc"),
        os.path.join(PROJECT_ROOT, ".prettierrc.json"),
        os.path.join(PROJECT_ROOT, "typescript", ".prettierrc"),
        os.path.join(PROJECT_ROOT, "typescript", ".prettierrc.json"),
    ]
    for candidate in candidates:
        if os.path.isfile(candidate):
            return candidate
    return None


def format_markdown(content, filepath=README_PATH):
    prettier_bin = find_prettier()
    if not prettier_bin:
        print("Warning: prettier formatter not found. Written unformatted.")
        return content

    cmd = [prettier_bin, "--stdin-filepath", filepath]
    config_file = find_prettier_config()
    if config_file:
        cmd.extend(["--config", config_file])
    else:
        # Neovim constraints (expandtab=true, shiftwidth=2, printWidth=120)
        cmd.extend(["--tab-width", "2", "--print-width", "120"])

    try:
        # Conform uses timeout_ms = 10000
        result = subprocess.run(
            cmd,
            input=content,
            text=True,
            capture_output=True,
            check=False,
            timeout=10,
        )
        if result.returncode == 0:
            return result.stdout
        else:
            print(f"Warning: prettier error: {result.stderr.strip()}")
            return content
    except (subprocess.SubprocessError, OSError) as e:
        print(f"Warning: failed to execute prettier: {e}")
        return content


def update_readme():
    stats = count_solutions()
    dashboard_content = generate_dashboard(stats)

    if os.path.exists(README_PATH):
        with open(README_PATH, "r", encoding="utf-8") as f:
            existing_content = f.read()

        pattern = r"(## Progress Dashboard\s*\n\n)(.*?)(?=\n## |\Z)"
        match = re.search(pattern, existing_content, flags=re.DOTALL)
        if match:
            new_content = (
                existing_content[: match.start(2)]
                + dashboard_content
                + existing_content[match.end(2) :]
            )
        else:
            new_content = generate_full_readme(dashboard_content)
    else:
        new_content = generate_full_readme(dashboard_content)

    formatted_content = format_markdown(new_content, README_PATH)

    with open(README_PATH, "w", encoding="utf-8") as f:
        f.write(formatted_content)
    print("README.md updated and formatted successfully!")


if __name__ == "__main__":
    update_readme()
