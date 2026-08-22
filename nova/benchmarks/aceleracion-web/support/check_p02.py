"""Deterministic checks for the aceleracion-web P02 Nova gates (v2).

Usage: python check_p02.py [--build] [--obs] [--preview]
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


def pkg_blob() -> str:
    p = ROOT / "package.json"
    if p.is_file():
        try:
            return json.dumps(p.read_text(encoding="utf-8-sig")).lower()
        except Exception:
            return ""
    return ""


def check_build() -> int:
    blob = pkg_blob()
    bundler = '"vite"' in blob or '"next"' in blob or "vite" in blob or "turbopack" in blob
    bench = (ROOT / "benchmarks" / "build-benchmark.json").is_file() or (
        ROOT / "docs" / "build-benchmark.md").is_file()
    if not bundler:
        print("FAIL build no bundler detected")
        return 1
    if not bench:
        print("FAIL build no benchmark artifact")
        return 1
    print("PASS build")
    return 0


def check_obs() -> int:
    blob = pkg_blob()
    sentry = "sentry" in blob
    otel = "opentelemetry" in blob
    if not sentry:
        print("FAIL obs sentry missing")
        return 1
    if not otel:
        print("FAIL obs opentelemetry missing")
        return 1
    print("PASS obs")
    return 0


def check_preview() -> int:
    wf = ROOT / ".github" / "workflows"
    files = list(wf.glob("*.yml")) + list(wf.glob("*.yaml")) if wf.is_dir() else []
    for f in files:
        try:
            text = f.read_text(encoding="utf-8-sig", errors="ignore").lower()
            if "preview" in text and ("pull_request" in text or "pull_request_target" in text):
                print("PASS preview")
                return 0
        except Exception:
            pass
    print("FAIL preview no preview workflow")
    return 1


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--build", action="store_true")
    ap.add_argument("--obs", action="store_true")
    ap.add_argument("--preview", action="store_true")
    args = ap.parse_args()
    rc = 0
    if args.build or not (args.obs or args.preview):
        rc |= check_build()
    if args.obs:
        rc |= check_obs()
    if args.preview:
        rc |= check_preview()
    sys.exit(rc)