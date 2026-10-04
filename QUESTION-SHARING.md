# Original-PB question sharing

Maths Q643–Q1023 and P&S Q205–Q344 have 521 JPEG share images rendered directly from the supplied PDFs. Question text, original diagrams/tables and multiple-choice options are retained; the printed answer column is excluded. Split-page questions are joined in their original order. Rebuild with `python3 scripts/build-question-share-images.py` (PyMuPDF and Pillow).

The Share PB question button opens an image preview. After the file loads, supported browsers offer a native image-and-link share sheet; choose WhatsApp there. File preparation happens before the final share click to preserve user activation. Cancelled shares are not retried automatically. Browsers without file sharing offer download, a WhatsApp text/link URL, and manual/copy-link controls. No message is sent automatically, and no student profile data is included in a share.

Question links retain the exact reader and `#qNUMBER`. A logged-out student tapping Show solution or Print solution is sent to the Hub's existing login with an allowlisted same-origin return URL. Completing login restores the question and reveals the solution. Existing device profiles are reused. P&S also offers an expandable original-PB image preview.

## Scope and verification

This uses the existing `ljiet_student_profile` phone/name device profile. It is a **UI gate**, not verified identity or server-side content authorization: solution data is still in static JavaScript, the practice books contain printed keys, and device profiles can be edited. Implement server-validated authentication and protected solution endpoints before treating this as access control.

The hosted Site's audience remains owner-only until the owner explicitly requests a sharing/access change. Thus external classmates cannot currently open that restricted hosted URL. The sharing implementation itself uses the current application origin so it also works on an independently configured public hosting origin.

The privileged Supabase service-role key previously present in browser source was removed; the client uses the public anon key. A zero-row, read-only leaderboard query with the anon key returned HTTP 200. The old exposed key remains in history/previous deployments and must be rotated in Supabase; removing source is not revocation.

`node scripts/verify-question-sharing.cjs` (with jsdom installed) verifies all 521 assets, exact question URLs, file/text payloads, login/print gates, malformed profiles, return URL validation, auto reveal after login, storage logout, and unsupported sharing fallback. Existing reader and dashboard regressions also pass. Representative rendered share images were inspected. Native WhatsApp handoff and mobile browser appearance have not been tested on a real device in this environment.
