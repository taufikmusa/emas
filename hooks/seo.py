"""Hook MkDocs: tambah rel="sponsored nofollow" pada pautan rujukan berkod.

Pautan daftar Public Gold (intro_pgcode=...) dan tiket PG Mall (pgmall.my/r/...)
ialah pautan rujukan. Google cadangkan rel="sponsored" untuk pautan sebegini.
"""
import re

_A_TAG = re.compile(r"<a\b[^>]*>", re.IGNORECASE)
_REFERRAL_MARKERS = ("intro_pgcode=", "pgmall.my/r/")
_REL_VALUES = ("sponsored", "nofollow")


def _fix_tag(match):
    tag = match.group(0)
    href = re.search(r'href="([^"]*)"', tag)
    if not href or not any(m in href.group(1) for m in _REFERRAL_MARKERS):
        return tag
    rel = re.search(r'\brel="([^"]*)"', tag)
    if rel:
        values = rel.group(1).split()
        for value in _REL_VALUES:
            if value not in values:
                values.append(value)
        return tag[: rel.start()] + 'rel="' + " ".join(values) + '"' + tag[rel.end():]
    return tag[:-1] + ' rel="sponsored nofollow">'


def on_post_page(output, **kwargs):
    return _A_TAG.sub(_fix_tag, output)
