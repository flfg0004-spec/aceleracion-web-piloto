"""Deterministic checks for the aceleracion-web P03 Nova gates (v2).

Usage: python check_p03.py [--baas] [--frameworks] [--review]
"""
import argparse
import os
import sys
from pathlib import Path


def resolve_repo() -> Path:
    here = Path(__file__).resolve()
    for parent in here.parents:
        if (parent / ".git").exists():
            return parent
    env = os.environ.get("ACEL_PILOT_REPO")
    if env and Path(env).is_dir():
        return Path(env)
    fallback = Path(r"C:\dev\aceleracion-web-piloto")
    if fallback.is_dir():
        return fallback
    raise SystemExit("FAIL repo not found")


ROOT = resolve_repo()


def first_existing(paths) -> bool:
    return any((ROOT / p).is_file() for p in paths)


def check_baas() -> int:
    ok = first_existing([
        "docs/decision-baas.md",
        "decisions/baas-evaluation.md",
        "docs/baas-evaluation.md",
    ])
    print("PASS baas" if ok else "FAIL baas no evaluation document")
    return 0 if ok else 1


def check_frameworks() -> int:
    ok = first_existing([
        "docs/framework-matrix.md",
        "decisions/framework-matrix.md",
        "docs/framework-decision.md",
    ])
    print("PASS frameworks" if ok else "FAIL frameworks no matrix document")
    return 0 if ok else 1


def check_review() -> int:
    ok = first_existing([
        "docs/review-tools-evaluation.md",
        "decisions/review-pipeline.md",
        "docs/prototyping-tools.md",
    ])
    print("PASS review" if ok else "FAIL review no evaluation document")
    return 0 if ok else 1


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--baas", action="store_true")
    ap.add_argument("--frameworks", action="store_true")
    ap.add_argument("--review", action="store_true")
    args = ap.parse_args()
    rc = 0
    if args.baas or not (args.frameworks or args.review):
        rc |= check_baas()
    if args.frameworks:
        rc |= check_frameworks()
    if args.review:
        rc |= check_review()
    sys.exit(rc)