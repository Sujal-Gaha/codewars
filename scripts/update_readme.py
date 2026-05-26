import os


def count_solutions():
    stats = {}
    languages = ["python", "typescript", "go", "sql"]
    kyus = ["8kyu", "7kyu", "6kyu", "5kyu", "4kyu", "3kyu", "2kyu", "1kyu"]

    for lang in languages:
        lang_path = lang
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


def generate_readme(stats):
    languages = sorted(stats.keys())
    kyus = ["8kyu", "7kyu", "6kyu", "5kyu", "4kyu", "3kyu", "2kyu", "1kyu"]

    # Filter out kyus that have 0 solutions across all languages to keep it clean,
    # but maybe it's better to show the common ones.
    active_kyus = [
        kyu for kyu in kyus if any(stats[lang].get(kyu, 0) > 0 for lang in languages)
    ]
    if not active_kyus:
        active_kyus = ["8kyu", "7kyu"]  # Default fallback

    header = "# Codewars Solutions\n\n"
    header += "My personal collection of Codewars solutions, tracked and categorized by language and difficulty.\n\n"
    header += "## Progress Dashboard\n\n"

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

    footer = f"\n**Grand Total Solved: {grand_total}**\n\n"
    footer += "## Structure\n"
    footer += "Each language has its own directory with difficulty subdirectories (`8kyu`, `7kyu`, etc.).\n"
    footer += "Solutions are located in `solution/` and tests in `test/`.\n\n"
    footer += "## Running Tests\n"
    footer += "Use the root `test.sh` script to run tests or update this dashboard:\n"
    footer += "```bash\n./test.sh python      # Run Python tests\n./test.sh typescript  # Run TypeScript tests\n./test.sh update      # Update this README\n```\n"

    return header + table_header + table_sep + table_rows + footer


def update_readme():
    stats = count_solutions()
    content = generate_readme(stats)

    with open("README.md", "w") as f:
        f.write(content)
    print("README.md updated successfully!")


if __name__ == "__main__":
    update_readme()
