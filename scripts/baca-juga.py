#!/usr/bin/env python3
"""Jana blok "Baca juga" (3 pautan dalaman berkaitan) pada setiap artikel.

Guna: python3 scripts/baca-juga.py
Selamat dijalankan berulang kali (idempotent). Jalankan selepas tambah artikel
baharu dalam `nav:` di mkdocs.yml. Blok diletak sebelum kad bio `.abio`.
"""
import glob
import os
import re

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_GROUPS = {"Tutorial Blog"}
HUBS = [
    "apa-itu-akaun-gap-gold-accumulation-program-public-gold.md",
    "9-soalan-lazim-sebelum-buka-akaun-emas-gap.md",
    "cara-daftar-public-gold-gap-2026.md",
]
START, END = "<!-- baca-juga -->", "<!-- /baca-juga -->"


def nav_groups():
    groups, current = {}, None
    for line in open(os.path.join(ROOT, "mkdocs.yml"), encoding="utf-8"):
        m = re.match(r"^  - ([^:]+):\s*$", line.rstrip("\n"))
        if m:
            current = m.group(1).strip()
            groups[current] = []
            continue
        m = re.match(r"^      - .+?: artikel/([^\s]+\.md)\s*$", line.rstrip("\n"))
        if m and current:
            groups[current].append(m.group(1))
        elif re.match(r"^\S", line):
            current = None
    return groups


def title_of(slug):
    text = open(os.path.join(ROOT, "docs/artikel", slug), encoding="utf-8").read()
    fm = re.match(r"---\n(.*?)\n---\n", text, re.S)
    return yaml.safe_load(fm.group(1))["title"]


def related(slug, group):
    i = group.index(slug)
    picks = []
    for step in range(1, len(group)):
        cand = group[(i + step) % len(group)]
        if cand != slug and cand not in picks:
            picks.append(cand)
        if len(picks) == 3:
            return picks
    for hub in HUBS:
        if hub != slug and hub not in picks:
            picks.append(hub)
        if len(picks) == 3:
            break
    return picks


def block(slug, group):
    lines = [START, "## Baca juga", ""]
    for r in related(slug, group):
        title = title_of(r).replace("[", "(").replace("]", ")")
        lines.append(f"- [{title}]({r})")
    lines += ["", END, ""]
    return "\n".join(lines)


def main():
    changed = 0
    all_slugs = {os.path.basename(p) for p in glob.glob(os.path.join(ROOT, "docs/artikel/*.md"))}
    for name, group in nav_groups().items():
        if name in SKIP_GROUPS or name == "Utama":
            continue
        for slug in group:
            if slug not in all_slugs:
                continue
            path = os.path.join(ROOT, "docs/artikel", slug)
            text = open(path, encoding="utf-8").read()
            new_block = block(slug, group)
            if START in text:
                text2 = re.sub(re.escape(START) + r".*?" + re.escape(END) + r"\n?", lambda _m: new_block, text, flags=re.S)
            else:
                marker = '<div class="abio" markdown>'
                if marker in text:
                    text2 = text.replace(marker, new_block + "\n" + marker, 1)
                else:
                    text2 = text.rstrip("\n") + "\n\n" + new_block
            if text2 != text:
                open(path, "w", encoding="utf-8").write(text2)
                changed += 1
    print(f"Dikemas kini: {changed} artikel")


if __name__ == "__main__":
    main()
