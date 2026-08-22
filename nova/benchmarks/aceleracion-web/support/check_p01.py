"""Deterministic checks for the aceleracion-web P01 Nova gates (v2).

Resolves the target pilot repo as the nearest ancestor containing .git,
falling back to ACEL_PILOT_REPO or the canonical pilot checkout.

Usage: python check_p01.py [--stack] [--ci] [--e2e]
"""
import argparse
import json
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


def pkg() -> dict:
    p = ROOT / "package.json"
    if p.is_file():
        try:
            return json.loads(p.read_text(encoding="utf-8-sig"))
        except Exception:
            return {}
    return {}


def check_stack() -> int:
    data = pkg()
    scripts = " ".join((data.get("scripts") or {}).values())
    ok_ws = (ROOT / "pnpm-workspace.yaml").is_file() or (ROOT / "package.json").is_file()
    ok_biome = (ROOT / "biome.json").is_file() or (ROOT / "biome.jsonc").is_file()
    ok_bun = "bun" in scripts
    failed = [n for n, ok in [("pnpm/package.json", ok_ws), ("biome.json", ok_biome), ("bun-script", ok_bun)] if not ok]
    if failed:
        print(f"FAIL stack missing: {', '.join(failed)}")
        return 1
    print("PASS stack")
    return 0


def check_ci() -> int:
    wf = ROOT / ".github" / "workflows"
    files = list(wf.glob("*.yml")) + list(wf.glob("*.yaml")) if wf.is_dir() else []
    if not files:
        print("FAIL ci no workflow files")
        return 1
    print(f"PASS ci workflows={len(files)}")
    return 0


def check_e2e() -> int:
    blob = json.dumps(pkg()).lower()
    pw_dep = "playwright" in blob
    cfg = (ROOT / "playwright.config.ts").is_file() or (ROOT / "playwright.config.js").is_file()
    if not (pw_dep or cfg):
        print("FAIL e2e playwright not wired")
        return 1
    print("PASS e2e")
    return 0


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--stack", action="store_true")
    ap.add_argument("--ci", action="store_true")
    ap.add_argument("--e2e", action="store_true")
    args = ap.parse_args()
    rc = 0
    if args.stack or not (args.ci or args.e2e):
        rc |= check_stack()
    if args.ci:
        rc |= check_ci()
    if args.e2e:
        rc |= check_e2e()
    sys.exit(rc)